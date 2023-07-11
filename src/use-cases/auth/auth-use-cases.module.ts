import { Module } from '@nestjs/common';
import { AuthUseCases } from './auth-use-case';
import { DataServicesModule } from '@/services/data-services/data-services/data-services.module';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DataServicesModule,
    JwtModule.register({
      global: true,
      secret: new ConfigService().get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '20m' },
    }),
  ],
  providers: [
    AuthUseCases,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  exports: [AuthUseCases],
})
export class AuthUseCasesModule {}
