import { AuthResponse, LoginDto, RegisterDto } from '@/core/dtos/auth';
import { AuthUseCases } from '@/use-cases/auth/auth-use-case';
import { AuthGuard } from '@/use-cases/auth/auth.guard';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthUseCases) {}

  @HttpCode(200)
  @Post('login')
  login(@Body() request: LoginDto): Promise<AuthResponse> {
    return this.authService.login(request);
  }

  @Post('register')
  register(@Body() request: RegisterDto): Promise<AuthResponse> {
    return this.authService.register(request);
  }
}
