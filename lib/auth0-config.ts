require("dotenv").config();

interface Config {
  AUTH0_CLIENT_ID: string;
  AUTH0_CLIENT_SECRET?: string;
  AUTH0_AUDIENCE: string;
  AUTH0_SCOPE: string;
  AUTH0_DOMAIN: string;
  REDIRECT_URI: string;
  POST_LOGOUT_REDIRECT_URI: string;
  SESSION_COOKIE_SECRET?: string;
  SESSION_COOKIE_LIFETIME?: string;
}

let config: Config;

if (typeof window === "undefined") {
  /**
   * Settings exposed to the server
   */
  config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET!,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE!,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE!,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN!,
    REDIRECT_URI: process.env.REDIRECT_URI!,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI!,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET!,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
  };
} else {
  /**
   * Settings exposed to the client
   */
  config = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE!,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE!,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN!,
    REDIRECT_URI: process.env.REDIRECT_URI!,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI!,
  };
}

export default config;
