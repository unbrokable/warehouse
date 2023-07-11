import { PrismaRepositoriesModule } from '@/framework/repositories/prisma/repositories.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaRepositoriesModule],
  exports: [PrismaRepositoriesModule],
})
export class DataServicesModule {}
