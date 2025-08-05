import { HTTPSTATUS } from "../config/http.config"
import { asyncHandler } from "../middlewares/asyncHandler.middleware"
import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../validators/auth.validator";
import { registerService } from "../services/auth.services";


export const registerController = asyncHandler(
    async(req:Request,res:Response)=>{
        const body = registerSchema.parse(req.body);
        // Here you would typically save the user to the database
        // For demonstration, we will just return a success message
        await registerService(body);

        console.log("User registered:", body);

       return  res.status(HTTPSTATUS.CREATED).json({
            message:"Registration Successful",
        })
    }
)


// export const loginController = asyncHandler(
//     async(req:Request,res:Response)=>{

//         const body = loginSchema.parse({...req.body});

//         return res.staus
//     }
// )
