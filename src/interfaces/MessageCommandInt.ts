import { Message } from "discord.js";

export interface MessageCommandInt {
    name: string;
    description: string;
    run: (message: Message) => Promise<void>
}