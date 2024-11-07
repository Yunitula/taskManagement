import * as process from 'process';
import {config} from 'dotenv'

config();

export const appPort =  process.env.PORT;

//Database 
export const dbName = process.env.DB_NAME;
export const dbHost = process.env.DB_HOST;
export const dbPort = process.env.DB_PORT;


//swagger
export const swaggerApiTitle = process.env.SWAGGER_API_TITLE;
export const swaggerApiDescription = process.env.SWAGGER_API_DESCRIPTION;
export const swaggerApiVersion = process.env.SWAGGER_API_VERSION;
export const swaggerDocs = process.env.SWAGGER_API_DOCS;

//JWt Tokens
export const jwtSecret = process.env.JWT_SECRET;
export const access_secret_key = process.env.ACCESS_SECRET_KEY;
export const access_strategy = process.env.ACCESS_STRATEGY;
export const access_token_expires_in = process.env.ACCESS_TOKEN_EXPIRES_IN;
export const refresh_secret_key = process.env.REFRESH_SECRET_KEY;
export const refresh_strategy = process.env.REFRESH_STRATEGY;
export const refresh_token_expires_in = process.env.REFRESH_TOKEN_EXPIRES_IN;
export const refreshTokenLimit =parseInt(process.env.REFRESH_TOKEN_LIMIT);

//mail
export const emailHost = process.env.EMAIL_HOST;
export const emailPort = parseInt(process.env.EMAIL_PORT);
export const emailSecure = process.env.EMAIL_SECURE;
export const emailUsername = process.env.EMAIL_USERNAME;
export const emailPassword = process.env.EMAIL_PASSWORD;
export const tempDir = process.env.TEMP_DIR;
export const tempExt = process.env.TEMP_EXT;

//password reset
export const forgotPasswordURL = process.env.FORGOT_PASSWORD_URL;