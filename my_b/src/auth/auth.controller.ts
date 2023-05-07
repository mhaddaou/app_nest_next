import { Controller, Get, Request, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  @Get('42')
  @UseGuards(AuthGuard('42'))
  async fortyTwoLogin(@Req() req) {
  }

  @Get('callback')
  @UseGuards(AuthGuard('42'))
  async QuaranteDeuxCallback(@Req() req) {
      return await this.authService.login42(req);
  }
}
