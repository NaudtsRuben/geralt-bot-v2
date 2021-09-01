import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const hmmm: MessageCommandInt = {
	name: "hmmm",
	description: "Sends gif of Geralt saying 'hmmm'",
	run: async (message) => {
		await message.reply('https://tenor.com/beVdP.gif');
	}
};
