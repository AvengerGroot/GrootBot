const Discord = require("discord.js");
function CreatedAt(message) {
  let joinedDiscorduw = message.guild.createdAt;
  let oneD = 24 * 60 * 60 * 1000;
  let secondD = new Date();
  let joinedDiscord = Math.round(Math.abs((joinedDiscorduw.getTime() - secondD.getTime()) / (oneD)));
  return joinedDiscord;
}



exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
	.setColor("#B15E3A")
	.setAuthor(`Server info`, message.guild.iconURL)
	.addField("Server name", `${message.guild.name}`,true)
.addField("Members",`${message.guild.memberCount} `,true)
.addField("Owner",`${message.guild.owner}`,true)
.addField("Region", message.guild.region,true)
.addField(`Created`, '\n '+ CreatedAt(message) + ' days ago' + '\n', true)
.addField("Verfication level", message.guild.verificationLevel, true)
.addField("Server emojis:", message.guild.emojis.map(e=>e.toString()).join(" "))
.setThumbnail(message.guild.iconURL)
.setTimestamp()
.setFooter(`Requested By ${message.author.username}`, message.author.avatarURL)
	 message.channel.send({ embed })
}
