import {
  NotFoundException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthResponse, LoginDto, RegisterDto } from '@core/dtos/auth';
import { User } from '@core/entities';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from '@/core/abstracts/user-repository.abstract';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUseCases {
  private readonly HASH_ITERATION = 10;

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<AuthResponse> {
    const user: User = await this.userRepository.getByEmail(dto.email);

    if (!user || (await bcrypt.compare(user.password, dto.password))) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: await this.getAccessToken(user),
    };
  }

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, this.HASH_ITERATION);

    const createdUser: User = await this.userRepository.create({
      createdAt: undefined,
      updateAt: undefined,
      email: dto.email,
      password: hash,
      id: 0,
    });

    return {
      accessToken: await this.getAccessToken(createdUser),
    };
  }

  private getAccessToken(user: User) {
    return this.jwtService.signAsync(user);
  }
}
