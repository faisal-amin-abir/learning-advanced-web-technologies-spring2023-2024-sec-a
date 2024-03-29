import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { jwtConstants } from "./auth.constant";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    authService: any;
    
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: jwtConstants.secret,
        });
    }
 
    // async validate(payload : any){
    //     return {id:payload.sub, email:payload.email};
    // }
    async validate(payload : any){
        const user = await this.authService.validateUser(payload);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
        }
}