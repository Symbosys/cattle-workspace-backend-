import "dotenv/config";

const env = {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV,
    
    jwtSecret: process.env.JWT_SECRET,


    // Cloudinary Credentials
    cloud_name: process.env.CLOUD_NAME, 
    cloud_api_key: process.env.CLOUD_API_KEY,  
    cloud_api_secret: process.env.CLOUD_API_SECRET,
    cloud_folder: process.env.CLOUD_FOLDER,
}

export default env