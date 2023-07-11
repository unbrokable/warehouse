import { IUserRepository } from '@/core/abstracts/user-repository.abstract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserUseCases {
  constructor(private readonly userRepository: IUserRepository) {}

  public getUser(userId: number) {
    return this.userRepository.get(userId);
  }
}
