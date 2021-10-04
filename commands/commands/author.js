const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
//Dont remove this command. Thanks :D
module.exports = {
    name: 'author',
    description: 'Bot author is Antisocial!',
    execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#FFF0F9')
    .setDescription(`The author of the basis is AntiSocial`)
    .addField(`Join to discord!`, `[Click here](https://discord.gg/aaq8zxEUvk)`, true)
    .addField(`My GitHub`, `[And click here!](https://github.com/AntyDeveloper)`, true)
    message.channel.send(embed)
}
}; 