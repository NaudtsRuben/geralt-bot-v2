import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const angry: MessageCommandInt = {
	name: "angry",
	description: "Sends gif of Geralt saying 'angry hmmm'",
	run: async (message) => {
		await message.reply('https://tenor.com/bfF44.gif');
	}
};


