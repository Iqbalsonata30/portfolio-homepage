export const APP_ENVIRONMENT = import.meta.env.VITE_APP_ENVIRONMENT;
export const IS_DEV = APP_ENVIRONMENT !== "prod";

export const BASE_URL = IS_DEV
  ? "http://localhost:8080"
  : "https://iqbalsonata.xyz";
