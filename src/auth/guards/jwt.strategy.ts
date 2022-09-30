import { Inject, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PassportStrategy} from '@nestjs/passport';

import { ExtractJwt, Strategy} from 'passport-jwt';
import { AuthService } from "../auth.service";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private authService : AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        });
    }
    async validate(payload: any){
        return{...payload.user};
    }
}