// imports needed
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { EgroupsModule } from './e-groups/egroups.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [EgroupsModule,MongooseModule.forRoot('mongodb+srv://admin:admin1234@cluster0.biuusrk.mongodb.net/?retryWrites=true&w=majority'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
