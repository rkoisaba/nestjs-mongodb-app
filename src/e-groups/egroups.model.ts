import * as mongoose from 'mongoose';

export const EgroupsSchema = new mongoose.Schema({
     
    campus: {type:String, },
    demographic: {type: String, },
    groupType: {type: String, },
    meetingDate: {type: String,},
    zipCode: {type: String,},


})

// Defining E-Group object
export interface  Egroup extends mongoose.Document{  

    id: string;        
    campus: string;
    demographic: string;
    groupType: string;
    meetingDate: string;
    zipCode: string;

};
