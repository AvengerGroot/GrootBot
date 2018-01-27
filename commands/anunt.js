const Discord = require("discord.js");
const superagent = require("superagent")
exports.run = (client, message, args) => {
  if (message.member.hasPermission("ADMINISTRATOR")) {
 		   const text = args.join(" ")
 		   if (text.length < 1) return message.channel.send("Can not announce nothing");

 		   const embed = new Discord.RichEmbed()
 		   .setTitle("Important Announcement:")
 		   .setDescription(text)
 		   .setTimestamp();
 		   message.channel.send("@everyone")
 		   message.channel.send({embed})
}
}
