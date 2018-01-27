const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if(!message.mentions.users.first()) message.reply('Please mention a member of this server')
	if(message.mentions.users.first()) {
			let user = message.mentions.users.first()
			let output = user.avatarURL
			if(!output) {
				return message.channel.send(`**${message.mentions.members.first().user.username}** does not have an avatar`)
		}
	var embed = new Discord.RichEmbed()
 .setAuthor(`${message.mentions.members.first().user.username} has this avatar!`)
 .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
	.setImage(output)
	.setTimestamp();
	message.channel.send(embed)
}

}
