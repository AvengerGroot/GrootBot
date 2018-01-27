const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
		.setDescription(`:ping_pong: Pong! Time took: ${Date.now() - message.createdTimestamp} ms`)
		message.channel.send({embed})
}
