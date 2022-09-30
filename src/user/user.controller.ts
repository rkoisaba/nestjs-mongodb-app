import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UserDetails } from './userdetails.interface';
import { UserService } from './user.service';


@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserDetails | null>{
        return this.userService.findById(id);
    }

}