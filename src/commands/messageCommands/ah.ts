import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const ah: MessageCommandInt = {
	name: "ah",
	description: "Sends gif of Geralt saying 'ah'",
	run: async (message) => {
		await message.reply('https://tenor.com/boItO.gif');
	}
};