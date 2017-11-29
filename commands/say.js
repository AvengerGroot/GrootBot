const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
      const text = args.join(" ")
      if (text.length < 1) return message.reply("Can not say nothing!");

      const embed = new Discord.RichEmbed()
      .setColor("#917357")
      .setDescription(text)
      message.channel.send({embed})
}
