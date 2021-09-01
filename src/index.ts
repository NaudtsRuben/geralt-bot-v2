import { Client, Intents } from "discord.js";

(async () => {
    const myIntents = new Intents();
    myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES);
    const BOT = new Client({ intents: myIntents });

    BOT.login(process.env.BOT_TOKEN);
})();