import { IUserRepository } from '@/core/abstracts/user-repository.abstract';
import { User } from '@/core/entities';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prismaService: PrismaService) {}
  async getByEmail(email: string): Promise<User> {
    const user: User = await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  get(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(item: User): Promise<User> {
    delete item.id;
    return this.prismaService.user.create({
      data: item,
      include: {
        owner: true,
      },
    });
  }

  update(id: number, item: User) {
    throw new Error('Method not implemented.');
  }
}
