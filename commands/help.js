const Discord = require("discord.js");
const fs = require("fs");
var commandsList = fs.readFileSync('Storage/help.txt', 'utf8');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} I've sent you a DM with all my commands! :mailbox_with_mail: `)
  message.channel.send({embed});
   message.author.send(commandsList)
}
