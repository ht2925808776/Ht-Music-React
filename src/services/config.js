const devBaseURL="http://localhost:3000";//开发环境
const proBaseURL="http://localhost:3000";//生产环境 


export const BASE_URL= process.env.NODE_ENV==="development" ? devBaseURL:proBaseURL;
export const TIMEOUT=5000;