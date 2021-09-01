import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const sleep: MessageCommandInt = {
	name: "sleep",
	description: "Sends gif of Geralt saying he can't sleep",
	run: async (message) => {
		await message.reply('https://tenor.com/beTwe.gif');
	}
};
