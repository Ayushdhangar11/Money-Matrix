import { Response } from "express";
import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/app_error";
import { z,ZodError } from "zod";
import { ErrorCodeEnum } from "../enum/error_code.enum";


const formatZodError = (res: Response, error: z.ZodError) => {
  const errors = error?.issues?.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));
  return res.status(HTTPSTATUS.BAD_REQUEST).json({
    message: "Validation failed",
    errors: errors,
    errorCode: ErrorCodeEnum.VALIDATION_ERROR,
  });
};

export const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
    console.log('Error occured on Path:',req.path,'Error:',err);

    
  if (err instanceof ZodError) {
    return formatZodError(res, err);
  }

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