import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Некорректный email' })
  email: string;

  @MinLength(6, { message: 'Имя должно быть миниму 3 символа' })
  @MaxLength(30, { message: 'Имя не должно привышать 30 символов' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Пароль должен быть минимум 6 символов' })
  password: string;
}

export class LoginDto {
    @IsEmail({},{message: "Некорректный email"})
    email: string
    
    @IsString()
    username: string

    @IsString()
    password: string
}
