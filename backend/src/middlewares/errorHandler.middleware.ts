import { log } from "console";
import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/app_error";

export const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
    console.log('Error occured on Path:',req.path);

    if(err instanceof AppError){
        return res.status(err.statusCode || HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
            message: err.message,
            errorCode: err.errorCode,
        });
    }

    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message:'Internal Server Error',
        err:err?.message || 'An unexpected error occurred',
    })
    
}