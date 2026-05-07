import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, UpdateProfileDto } from './dto/auth.dto';
import type { Response } from 'express';
import { AccessTokenGuard, RefreshTokenGuard } from './guards/jwt.guard';
import { GetUser } from './decorators/get-user.decorator';
import type { JwtPayloadRefresh } from './types/jwt.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto, @Res() res: Response) {
    return this.authService.login(dto, res);
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetUser('id') userId: string, @Res() res: Response) {
    return this.authService.logout(userId, res);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(@GetUser() payload: JwtPayloadRefresh, @Res() res: Response) {
    return this.authService.refreshTokens(payload, res);
  }

  @UseGuards(AccessTokenGuard)
  @Get('me')
  getMe(@GetUser('id') userId: string) {
    return this.authService.getProfile(userId);
  }

  @UseGuards(AccessTokenGuard)
  @Patch('profile')
  @HttpCode(HttpStatus.OK)
  updateProfile(@GetUser('id') userId: string, @Body() dto: UpdateProfileDto) {
    return this.authService.updateProfile(userId, dto);
  }
}
