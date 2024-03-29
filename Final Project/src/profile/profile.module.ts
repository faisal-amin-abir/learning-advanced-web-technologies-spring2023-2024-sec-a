import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/auth.constant';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProfileController],
  imports: [AuthModule, PassportModule, JwtModule.register({
    secret:jwtConstants.secret,
    signOptions: { expiresIn: '60s'},
   })],
  providers: [ProfileService],
})
export class ProfileModule {}
