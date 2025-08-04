//for human redable staus codes
//error codes when we want to show custom error on frontend
//this is not the same as http status codes, these are custom codes for our application
//we can use these codes to show custom messages on frontend

const httpConfig = () =>({
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    // Client Error
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
 

    // Server Error
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
       INTERNAL_SERVER_ERROR: 500,

})

export const HTTPSTATUS = httpConfig();

export type HttpStatusCodeType = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];