import { Client, Intents, Interaction } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";
import { onMessageCreate } from "./events/onMessageCreate";
import { onInteractionCreate } from "./events/onInteractionCreate";

(async () => {
    if (!validateEnv()) return;

    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES);
    const BOT = new Client({ intents: myIntents });



    BOT.on("ready", () => {
        console.log("Connected to discord!");
        BOT.user?.setActivity('https://git.io/JExfB');
    });

    BOT.on("messageCreate", async (message) => await onMessageCreate(message));

    BOT.on("interactionCreate", async (interaction) => await onInteractionCreate(interaction));

    //await connectDatabase();

    BOT.login(process.env.BOT_TOKEN);
})();