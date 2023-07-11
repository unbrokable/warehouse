import { User } from '@prisma/client';
import { IRepository } from './generic-repository.abstract';

export abstract class IUserRepository extends IRepository<User> {
  abstract getByEmail(email: string): Promise<User>;
}
