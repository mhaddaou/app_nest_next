import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { QuaranteDeuxStrategy } from './strategies/carondo.strategy';
import { PassportModule } from '@nestjs/passport';
import { ftAuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PassportModule, UserModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService, QuaranteDeuxStrategy,ftAuthGuard,UserService,],
})  
export class AuthModule {}
