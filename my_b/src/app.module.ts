import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configORM } from 'typeORM.config';


@Module({
  imports: [TypeOrmModule.forRoot(configORM),],
  controllers: [AppController],
  providers: [AppService, ChatGateway ],
})
export class AppModule {}
