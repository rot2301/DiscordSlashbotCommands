const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('epicfree')
		.setDescription('Epic Games Free game message gen'),
	async execute(interaction) {
		await interaction.reply('is free on Epic Games');
	},
};