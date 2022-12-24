const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('elon')
		.setDescription('Are you sure?'),
	async execute(interaction) {
		await interaction.reply('Flashbang out! https://cdn.discordapp.com/attachments/481965352868380672/1045008369188093972/unknown.png');
	},
};