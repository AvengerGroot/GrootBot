const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args) => {
  let dude = moment.duration(client.uptime/1000, "seconds").format("d [Days], h [Hours], m [Minutes], s [Seconds]");
  let embed = new Discord.RichEmbed()
      .setThumbnail(`${client.user.avatarURL}`)
      .setColor("#B15E3A")
   .addField(":pager:Servers", ` ${message.client.guilds.size}`,true)
  .addField(":couple:Users", `${message.client.users.size}`,true)
   .addField(":book:Library", "Discord.js (`11.2.1`)", true )
  .addField(":man:Creator",`Avenger#8215` ,true )
  .addField(":heartbeat:Heartbeat Ping", `${Date.now() - message.createdTimestamp} **ms**`,true)
  .addField(":pencil:Channels", `${message.client.channels.size}`,true)
  .addField(":stopwatch:Uptime", dude,true)
     .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
      message.channel.send({ embed })

}
