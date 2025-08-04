import getEnv from "../utils/get_env";

const envConfig = () =>({
    NODE_ENV: getEnv('NODE_ENV', 'development'),
    PORT: getEnv('PORT', '3000'),
    MONGO_URI: getEnv('MONGO_URI'),
    BASE_PATH: getEnv('BASE_PATH', '/api'),

    JWT_SECRET: getEnv('JWT_SECRET', 'defaultsecret'),
    JWT_EXPIRATION: getEnv('JWT_EXPIRATION', '1h') as string,
    JWT_REFRESH_SECRET: getEnv('JWT_REFRESH_SECRET', 'defaultrefreshsecret'),
    JWT_REFRESH_EXPIRATION: getEnv('JWT_REFRESH_EXPIRATION', '7d')as string,

    GEMINI_API_KEY: getEnv('GEMINI_API_KEY', ''),

    FRONTEND_URL: getEnv('FRONTEND_URL', 'http://localhost:5173'),

})

export const Env = envConfig();