import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from 'src/auth/guards/jwt.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService,JwtStrategy,UserService],
  controllers: [AuthController]
})
export class AuthModule {}