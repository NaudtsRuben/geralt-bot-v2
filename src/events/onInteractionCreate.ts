import { Interaction } from "discord.js";
import { SlashCommandList } from "../commands/_CommandList";

export const onInteractionCreate = async (interaction: Interaction) => {
    if (interaction.user.bot) return;

    if (!interaction.isCommand()) return;

    SlashCommandList.forEach(command => {
        if (command.data.name === interaction.commandName) {
            try {

                command.execute(interaction);

            } catch (error) {

                console.error(error);
                interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

            }
        }
    });
}