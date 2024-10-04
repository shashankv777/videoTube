import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})


    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUDNAME,
        api_key: process.env.CLOUDINARY_API_KEY ,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })

        console.log("File uploaded successfully",response.url)
        fs.unlinkSync(localFilePath)
        return response
    }catch(error){
         fs.unlinkSync(localFilePath) //remove the locally stored temporary file as
                                      //the upload operation got failed
        return null
    }

}
 
export {uploadOnCloudinary}
    