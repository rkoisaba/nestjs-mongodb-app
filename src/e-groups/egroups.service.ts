//imports needed
import{ Injectable, NotFoundException } from '@nestjs/common'
import { Model } from 'mongoose';
import { Egroup  } from './egroups.model'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()

export class EgroupsService{
    
    constructor(@InjectModel('Egroup') private egroupModel: Model<Egroup>) {} 
   
   async insertEgroup(
        campus: string,demographic: string,groupType: string, meetingDate: string, zipCode: string){
        const newEgroup = new this.egroupModel({campus, demographic,groupType,meetingDate,zipCode});
      
        const result = await newEgroup.save();
        console.log(result);
        return result.id as string;
    }   
    // Get E-Groups
    async getEgroups() {
        const egroups = await this.egroupModel.find().exec()
        return egroups.map(egroup =>({
            id:egroup.id,
            campus: egroup.campus,
            demographic: egroup.demographic,
            groupType: egroup.groupType,
            meetingDate: egroup.meetingDate,
            zipCode: egroup.zipCode,

        }));
    }

    // Get single E-Group using ID
    async getSingleEgroup(egroupId:string){
        const egroup = await this.findEgroup(egroupId);
        return {id:egroup.id,
            campus: egroup.campus,
            demographic: egroup.demographic,
            groupType: egroup.groupType,
            meetingDate: egroup.meetingDate,
            zipCode: egroup.zipCode,}
    }
    // update an E-Group
    async updateEgroup(
                egroupId: string,
                campus: string,
                demographic: string, 
                groupType: string, 
                meetingDate: string, 
                zipCode: string
            ){
            const updatedEgroup = await this.findEgroup(egroupId);
           
            // find each entry in the E-Group so that nothing is overwritten or null
            if(campus){
                updatedEgroup.campus = campus;
                //console.log('campus')
            }
            if(demographic){
                updatedEgroup.demographic = demographic;
                //console.log('demographic')
            }
            if(groupType){
                updatedEgroup.groupType = groupType;
                //console.log('type')
            }
            if(meetingDate){
                updatedEgroup.meetingDate = meetingDate;
                //console.log('meeting date')
            }
            if(zipCode){
                updatedEgroup.zipCode = zipCode;
                //console.log('zip code')
            }
            
            updatedEgroup.save();
            }
    async deleteEgroup(egroupId:string){
        const result = await this.egroupModel.deleteOne({_id:egroupId}).exec();
        if(result.deletedCount ===0){
            throw new NotFoundException('Couldn not find E-Group');
        }
    
        }

    
    // Check if E-Group exists
    private async findEgroup(id:string){
        const egroup = await this.egroupModel.findById(id);
        if(!egroup){
            throw new NotFoundException('Couldn not find E-Group'); 
        }
        return egroup;
    }
}
