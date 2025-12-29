const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('minecraft')
		.setDescription('Provides information about the Minecraft server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`To be whitelisted on our Minecraft server, please submit a Ticket in #contact-an-admin. To join, connect to IP`);
	},
};