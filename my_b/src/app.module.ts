// import { configORM } from './../../typeORM.config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configORM } from 'typeORM.config';
import { AuthService } from './auth/auth.service';
import { ChatGateway } from './chatGateway';

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot(configORM)],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
