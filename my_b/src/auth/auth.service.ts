import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/user.dto';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
constructor(private readonly userservice:UserService){}

  async login42(req) {
    if (!req.user) {
        console.log("user didnt authenticate");
    }
    else 
    {
        const { username } = req.user;
        const userDto:UserDto = { username  };
        const user = await this.userservice.findUser(userDto.username);
        if (!user)
        {
            return await this.userservice.creatUser(userDto);
        }
        return userDto;
    }
}

async generateAccessToken(user: UserEntity) {
    // const payload = { sub: user.id };
    const accessToken = {} 
    // = this.jwtService.sign(payload);
    return accessToken;
  }

}
