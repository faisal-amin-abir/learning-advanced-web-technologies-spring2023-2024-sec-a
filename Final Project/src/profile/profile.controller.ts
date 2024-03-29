import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {

  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile(){
    return "i am protected route";
  }
}
