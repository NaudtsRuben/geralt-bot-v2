export const validateEnv = () => {
    if(!process.env.BOT_TOKEN){
        console.warn("Missing discord bot token!");
        return false;
    }
    if(!process.env.MONGO_URI){
        console.warn("Missing MongoDB connection string!");
        return false;
    }
    return true;
}

