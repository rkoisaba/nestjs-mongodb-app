import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserService } from 'src/user/user.service';
//import { AuthService } from './auth.service';
import { LoginDTO } from 'src/user/dtos/login.dto';

@Controller('auth')
export class AuthController {
        constructor(
        private userService: UserService,
        //private authService: AuthService,
        
      ) {}


     

    
}