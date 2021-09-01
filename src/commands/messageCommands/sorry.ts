import { MessageCommandInt } from "../../interfaces/MessageCommandInt";


export const sorry: MessageCommandInt = {
	name: "sorry",
	description: "Sends gif of Geralt saying 'sorry'",
	run: async (message) => {
		await message.reply('https://tenor.com/bwKbb.gif');
	}
};
