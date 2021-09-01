import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const hmm: MessageCommandInt = {
	name: "hmm",
	description: "Sends gif of Geralt saying 'hmm'",
	run: async (message) => {
		await message.reply('https://tenor.com/bfLrw.gif');
	}
};
