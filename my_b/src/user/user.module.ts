import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserEntityRepository } from './user.entity.reposetory';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity, UserEntityRepository])], 
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
