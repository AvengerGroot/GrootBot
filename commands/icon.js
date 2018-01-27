const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let output = message.guild.iconURL
if(!output) {
  return message.channel.send(`**${message.guild.name}** does not have an icon`)
}
  const embed = new Discord.RichEmbed()
		.setDescription(`**${message.guild.name}** Icon`)
    .setImage(`${message.guild.iconURL}`)

		message.channel.send({embed})
}
