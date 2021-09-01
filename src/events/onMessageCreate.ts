import { Message } from "discord.js";

export const onMessageCreate = async (message: Message) => {
    if (message.author.bot) return;


}