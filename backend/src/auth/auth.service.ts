import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { Response } from 'express';
import { JwtPayload, JwtPayloadRefresh, Tokens } from './types/jwt.types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto): Promise<{ message: string }> {
    const existByEmail = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existByEmail) throw new ConflictException('Email уже используется');

    const existUsername = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (existUsername)
      throw new ConflictException('Имя пользователя уже занято');

    const hashedPassword = await argon2.hash(dto.password);

    await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        password: hashedPassword,
      },
    });
    return { message: 'Регистрация успешна' };
  }

  async login(dto: LoginDto, res: Response): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    const validPassword = await argon2.verify(user.password, dto.password);

    if (!validPassword) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    const tokens = await this.generateTokens({
      sub: user.id,
      email: user.email,
    });

    await this.saveRefreshToken(user.id, tokens.refreshToken);
    this.setRefreshTokenCookie(res, tokens.refreshToken);

    res.json({ accessToken: tokens.accessToken });
  }

  async logout(userId: string, res: Response): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });
    this.clearRefreshTokenCookie(res);
    res.json({ message: 'Выход выполнен' });
  }

  async refreshTokens(payload: JwtPayloadRefresh, res: Response): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Доступ запрещен');
    }
    const tokenMatches = await argon2.verify(
      user.refreshToken,
      payload.refreshToken,
    );

    if (!tokenMatches) {
      throw new ForbiddenException('Токен недействителен');
    }

    const tokens = await this.generateTokens({
      sub: user.id,
      email: user.email,
    });

    await this.saveRefreshToken(user.id, tokens.refreshToken);
    this.setRefreshTokenCookie(res, tokens.refreshToken);

    res.json({ accessToken: tokens.accessToken });
  }

  private async generateTokens(payload: JwtPayload): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: this.config.getOrThrow<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.config.getOrThrow<string>('ACCESS_TOKEN_TTL'),
      } as JwtSignOptions),
      this.jwt.signAsync(payload, {
        secret: this.config.getOrThrow<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.config.getOrThrow<string>('REFRESH_TOKEN_TTL'),
      } as JwtSignOptions),
    ]);

    return { accessToken, refreshToken };
  }

  private async saveRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<void> {
    const hashedToken = await argon2.hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        refreshToken: hashedToken,
      },
    });
  }

  private setRefreshTokenCookie(res: Response, refreshToken: string): void {
    const isProduction = this.config.get<string>('NODE_ENV') === 'production';
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/api/auth/refresh',
    });
  }

  private clearRefreshTokenCookie(res: Response): void {
    res.clearCookie('refresh_token', { path: '/api/auth/refresh' });
  }
}
