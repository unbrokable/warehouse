import { DataServicesModule } from '@/services/data-services/data-services/data-services.module';
import { Module } from '@nestjs/common';
import { UserUseCases } from './user-use-case';

@Module({
  imports: [DataServicesModule],
  providers: [UserUseCases],
  exports: [UserUseCases],
})
export class UserUseCasesModule {}
