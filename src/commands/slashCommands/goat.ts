import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, GuildMember, Message } from "discord.js";

export const goat = {
    data: new SlashCommandBuilder()
        .setName('goat')
        .setDescription("Sends an insulting gif to the mentioned user's dm's. Followed by your ID.")
        .addMentionableOption(option => option
            .setName('user')
            .setDescription('Mention a user')
            .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        try {
            const mentionable = interaction.options.getMentionable('user') as GuildMember;

            await mentionable.user.send("https://tenor.com/beIX0.gif").then((sentMessage: Message) => {
                sentMessage.reply(`Courtesy of <@${interaction.user.id}>`);
            });

            await interaction.reply({ content: "Goat has been sent...", ephemeral: true });
        }
        catch (error){
            console.log(error);
            await interaction.reply({ content: "You have to mention a user.", ephemeral: true });
        }
    },
};

module.exports = goat;