const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
		.setDescription(`**${message.guild.name}** Icon`)
    .setImage(`${message.guild.iconURL}`)
		.setColor("#B15E3A")
		message.channel.send({embed})
}
