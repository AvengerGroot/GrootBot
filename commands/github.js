const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  embed.setTitle("__Groot Source Code__")
  .setColor("#9CDAF0")
    .setDescription("**Groot is open-source!\n The source code is over at https://github.com/AvengerGroot/GrootBot**")
    .setThumbnail("https://assets-cdn.github.com/images/modules/logos_page/Octocat.png")
  message.channel.send({embed});
}
