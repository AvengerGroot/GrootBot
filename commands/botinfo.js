const Discord = require("discord.js");
const superagent = require("superagent")
exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
     .setAuthor("Groot", "https://i.gyazo.com/01f3462cdfd1e23d80685edbe861ca2b.png")
      .setThumbnail("https://i.gyazo.com/09125d6521f1fd9f07cdb6dd82060c4c.png")
      .setColor("#B15E3A")
 	 .addField("Username:", "Groot#7544", true )
 	 .addField("Servers", ` ${message.client.guilds.size}`,true)
 	 .addField("Library", "Discord.js", true )
 	.addField("Creator",`Avenger#8215` ,true )
     .setTimestamp()
 	.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)


      message.channel.send({ embed })
}
