const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
	.setColor("#B15E3A")
	.setAuthor(`Server info`, message.guild.iconURL)
	.addField("Server name", `${message.guild.name}`,true)
.addField("Members",`${message.guild.memberCount}`,true)
.addField("Owner",`${message.guild.owner}`,true)
.addField("Region", message.guild.region,true)
.setThumbnail(message.guild.iconURL)
.setTimestamp()
	 message.channel.send({ embed })
}
