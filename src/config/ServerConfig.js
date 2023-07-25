const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE_PATH:process.env.FLIGHT_SERVICE_PATH,
    EMAIL_PASS: process.env.EMAIL_PASS,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY
    
    

}