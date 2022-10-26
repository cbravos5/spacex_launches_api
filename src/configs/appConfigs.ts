export const ENVIRONMENT = process.env.APP_ENV || "dev";
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const APP_PORT = Number(process.env.APP_PORT) || 3000;
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || "/";
