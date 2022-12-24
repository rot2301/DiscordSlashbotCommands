const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('Ticket Creator'),
	async execute(interaction) {
		const filter = m => m.content.includes('discord');
		const collector = interaction.channel.createMessageCollector({ filter, time: 15000 });

		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});
	},
};