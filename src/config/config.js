import dotenv from "dotenv"

dotenv.config();

const config = {
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN:process.env.JWT_SCREET,
    REFRESH_TOKEN:process.env.REFRESH_TOKEN,
    IMAGEKIT_PRIVATE_KEY:process.env.IMAGEKIT_PRIVATE_KEY
}

export default config