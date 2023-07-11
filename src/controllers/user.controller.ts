import { GetUser } from '@/core/decorators';
import { AuthGuard } from '@/use-cases/auth/auth.guard';
import { UserUseCases } from '@/use-cases/user/user-use-case';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserUseCases) {}

  @UseGuards(AuthGuard)
  @Get('me')
  public getMe(@GetUser('id') userId: number) {
    return this.userService.getUser(userId);
  }
}
