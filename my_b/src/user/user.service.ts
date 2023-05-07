
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>){}

    async creatUser(userDto:UserDto){
        const user = await this.userRepo.create(userDto);
        return await this.userRepo.save(user);
    }

    async updateUser(){}

    async findUser(username:string){
        return await this.userRepo.findOne({where:{username:username}});
    }
}