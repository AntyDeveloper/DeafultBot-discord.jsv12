const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
    name: 'commandname',
    description: 'description command',
    execute(client, message, args) {
}
}; 