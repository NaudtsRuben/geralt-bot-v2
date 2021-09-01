import { Message } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onMessageCreate = async (message: Message) => {
    if (message.author.bot) return;

    if (message.channel.type === "DM") {
		console.log(`${message.createdAt}: ${message.author.username}: ${message.content}`);
		message.channel.send('https://tenor.com/bfLrv.gif');
		return;
	}

	const words = message.content.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "").split(" ");
	words.forEach(word => {
        CommandList.forEach(command => {
            if (command.name === word){
                try {
                    command.run(message);
                } catch (error) {
                    console.error(error);

                    message.reply({ content: 'There was an error while executing this command!'});
                }
            }
        });
	});
}