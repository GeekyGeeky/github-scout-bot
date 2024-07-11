// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    BOT_TOKEN?: string;
    // Add other environment variables here
  }
}
