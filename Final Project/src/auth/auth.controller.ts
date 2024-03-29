import { Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post("/login")
    async login(@Req() req:Request){
        return await this.authService.login(req.body);
    }

}
