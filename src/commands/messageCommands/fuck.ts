import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const fuck: MessageCommandInt = {
	name: "fuck",
	description: "Sends gif of Geralt saying 'fuck'",
	run: async (message) => {
		await message.reply('https://tenor.com/beVZc.gif');
	}
};


