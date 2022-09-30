import{ Injectable, NotFoundException } from '@nestjs/common'
import { Model } from 'mongoose';
import { UserDocument  } from './user.schema'
import { InjectModel } from '@nestjs/mongoose';
import{ UserDetails} from './userdetails.interface';

@Injectable()
export class UserService{

    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {} 
   
    _getUserDetails(user: UserDocument): UserDetails{
        return {
            id: user.id,
            email: user.email,
            password: user.password,
            phone: user.phone,
            role: user.role,
        }
    }
    async findByEmail(email:string) : Promise<UserDocument | null>{
        return this.userModel.findOne({email}).exec();
        }

    async findById(id:string): Promise<UserDetails | null>{
        const user = await this.userModel.findById(id).exec();
        if(!user) return null;
        return this._getUserDetails(user);
    }

    async createUser(
        id:string,
        email:string,
        hashedPassword: string,
        phone:string,
        role: string,
        ): Promise<UserDocument>{
            const newUser = new this.userModel({
                id,
                email,
                password: hashedPassword,
                phone,
                role,

            });
            return newUser.save();
        }
 
 }
