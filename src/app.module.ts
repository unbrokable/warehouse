import { Module } from '@nestjs/common';
import { AuthUseCasesModule } from './use-cases/auth/auth-use-cases.module';
import { AuthController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services/data-services.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controllers/user.controller';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

console.log(process.env.NODE_ENV);

@Module({
  imports: [
    DataServicesModule,
    AuthUseCasesModule,
    UserUseCasesModule,
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
  ],
  controllers: [AuthController, UsersController],
  providers: [],
})
export class AppModule {}
