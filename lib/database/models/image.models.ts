import { Document,Schema, model, models } from "mongoose";
import { string } from "zod";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string;
    width?: number; // optional
    height?: number; // optional
    config?: object; // optional
    transformationUrl?: string; // optional
    aspectRatio?: string; // optional
    color?: string; // optional
    prompt?: string; // optional
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    } // optional, use the actual type from your 'User' model
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  
const ImageSchema= new Schema({
    title:{type:String, required:true},
    transformationType:{type:String, required:true},
    publicId:{type:String, required:true},
    secureURL:{type:String, required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:String},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date,default:Date.now}


});

const Image=models?.Image||model('Image',ImageSchema);

export default Image;

