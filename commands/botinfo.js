const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args) => {
  let dude = moment.duration(client.uptime/1000, "seconds").format("d [Days], h [Hours], m [Minutes], s [Seconds]");
  let embed = new Discord.RichEmbed()
     .setAuthor("Groot", "https://i.gyazo.com/01f3462cdfd1e23d80685edbe861ca2b.png")
      .setThumbnail("https://i.gyazo.com/09125d6521f1fd9f07cdb6dd82060c4c.png")
      .setColor("#B15E3A")
 	 .addField("Username:", "Groot#7544", true )
 	 .addField("Servers", ` ${message.client.guilds.size}`,true)
 	 .addField("Library", "Discord.js", true )
 	.addField("Creator",`Avenger#8215` ,true )
.addField("Heartbeat Ping", `${Date.now() - message.createdTimestamp} **ms**`,true)
.addField("Uptime", dude,true)
     .setTimestamp()
 	.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)


      message.channel.send({ embed })
}
