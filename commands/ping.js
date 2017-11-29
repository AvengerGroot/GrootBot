const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
		.setDescription(`:ping_pong: Pong! Time took: ${Date.now() - message.createdTimestamp} ms`)
		.setColor("#B15E3A")
		message.channel.send({embed})
}
