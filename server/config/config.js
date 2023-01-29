const TABLE_NAME = 'all-for-you';
require('dotenv').config()

const config = {
    PORT: process.env.PORT || 5000,
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: process.env.DB_CONNECTION,
    SECRET: process.env.SECRET,
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_STORAGE: process.env.CLOUDINARY_STORAGE
}

module.exports = config;