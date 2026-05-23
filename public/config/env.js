import "dotenv/config";
const env = {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
};
export default env;
//# sourceMappingURL=env.js.map