const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setDescription(`I am on **${message.client.guilds.size}** servers! :house_with_garden: `)
  .setTimestamp();
  message.channel.send({ embed });
}
