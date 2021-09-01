import { Client, Intents } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";
import { onMessageCreate } from "./events/onMessageCreate";

(async () => {
    if (!validateEnv()) return;

    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES);
    const BOT = new Client({ intents: myIntents });



    BOT.on("ready", () => console.log("Connected to discord!"));

    BOT.on("messageCreate", async (message) => await onMessageCreate(message));

    await connectDatabase();

    BOT.login(process.env.BOT_TOKEN);
})();