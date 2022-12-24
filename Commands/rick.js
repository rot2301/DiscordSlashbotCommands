const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rick')
		.setDescription('Does a thing'),
	async execute(interaction) {
		await interaction.reply('https://cdn.discordapp.com/attachments/481965352868380672/1045703302786056302/SPOILER_SPOILER_SPOILER_SPOILER_SPOILER_SPOILER_SPOILER_SPOILER_SPOILER_sorry-2-1-2-5-1-2-1.webm');
	},
};