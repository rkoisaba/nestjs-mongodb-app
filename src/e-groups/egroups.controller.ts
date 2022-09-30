// imports needed
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { EgroupsService } from './egroups.service';


@Controller('egroups')

export class EgroupsController{

    constructor(private egroupService: EgroupsService) {}
   
    @Post()
    
    async addEgroup(

              @Body ('campus') egroupCampus : string,

              @Body('demographic') groupDemographic: string,

              @Body('groupType') egroupType: string,

              @Body('meetingDate') egroupMeetingDate: string,

              @Body('zipCode') egroupZipCode: string
            ){
                const generatedId = await this.egroupService.insertEgroup(
                    egroupCampus,
                    groupDemographic,
                    egroupType,
                    egroupMeetingDate,
                    egroupZipCode
                    );
                return {id: generatedId}
            }
        // Responses
        
        // All E-Groups
        @Get()    
        async getAllEgroups() {
            const egroups = await this.egroupService.getEgroups();
            return egroups;

        }
        // E-Group by ID
        @Get(':id')
        getEgroup(@Param('id')egroupId: string){
            return this.egroupService.getSingleEgroup(egroupId);

        }
        // Updating E-Group 
        @Patch(':id')
        async updateEgroup(

            @Param('id') egroupId: string,

            @Body('campus')  campus : string,

            @Body('demographic') demographic: string,

            @Body('groupType') groupType: string,

            @Body('meetingDate') meetingDate: string,

            @Body('zipCode') zipCode: string,
        ) {
            await this.egroupService.updateEgroup(egroupId,campus,demographic,groupType,meetingDate,zipCode);
            return null;
        }   
        
        @Delete(':id')
        async removeEgroup(@Param('id')egroupId: string) {
            await this.egroupService.deleteEgroup(egroupId)
            return null;

        }
    }



