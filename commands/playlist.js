const { SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Playlist dos Guri'),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/1Un01y7n5bSjYLgLNLt7fe?si=c12ec71f43ce4284")
    }
}