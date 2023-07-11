import { IUserRepository } from '@/core/abstracts/user-repository.abstract';
import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './user-repository';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
    PrismaService,
  ],
  exports: [IUserRepository, PrismaService],
})
export class PrismaRepositoriesModule {}
