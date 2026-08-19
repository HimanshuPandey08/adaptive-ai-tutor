const mongoose = require("mongoose")


async function connectDB() {
    
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("The db has been connected")
    } catch (err) {
        console.error("Failed to connect:", err);
        process.exit(1);
    }
}


module.exports = connectDB;