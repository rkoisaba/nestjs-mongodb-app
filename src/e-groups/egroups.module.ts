//imports needed
import { Module } from '@nestjs/common';
import { EgroupsController } from './egroups.controller';
import { EgroupsService } from './egroups.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EgroupsSchema } from './egroups.model'; 

@Module({
    imports: [MongooseModule.forFeature([{name: 'Egroup', schema: EgroupsSchema }])],
    controllers : [EgroupsController],
    providers:[EgroupsService],
})
export class EgroupsModule {}
