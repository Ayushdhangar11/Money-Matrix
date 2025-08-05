import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { NextFunction } from "express";
import { Env } from "./config/env.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { BadRequestException } from "./utils/app_error";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import connectDatabase from "./config/db.config";
import authRoutes from "./routes/auth.route";

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse the data coming fro the form to json format

// /why we uset up cors to our frontend cuz it only sahre resources with url only nothin gels eif we use star then it may acccess by other websites
app.use(
    cors({
        origin: Env.FRONTEND_URL,
        credentials: true, // Allow cookies to be sent
    })
);

app.get(
    "/",
    asyncHandler(async (req, res, _next) => {
        // res.status(HTTPSTATUS.OK).json({ message: 'Welcom tonbackend api' }); this will lead to json format data
        throw new BadRequestException("this is test error");
        res.send("welcome to backend api");
    })
);

app.use(`${BASE_PATH}/auth`, authRoutes);

app.use(errorHandler);

app.listen(Env.PORT, async () => {
    await connectDatabase();
    console.log(
        `Server is running on port ${Env.PORT} at ${new Date().toLocaleString()}`
    );
});
