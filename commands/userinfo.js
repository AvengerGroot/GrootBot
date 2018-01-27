const Discord = require("discord.js");
function status(message) {
  let statususer = '';
  if (message.author.presence.status === 'online') { statususer = 'Online'; }
  else if (message.author.presence.status === 'offline') { statususer = 'Offline / Invisible'; }
  else if (message.author.presence.status === 'idle') { statususer = 'Away From Keyboard'; }
  else if (message.author.presence.status === 'dnd') { statususer = 'Do not Disturb'; }
  else { statususer = 'Unknown'; }
  return statususer;
}

function DiscordD(message) {
  let joinedDiscorduw = message.author.createdAt;
  let oneD = 24 * 60 * 60 * 1000;
  let secondD = new Date();
  let joinedDiscord = Math.round(Math.abs((joinedDiscorduw.getTime() - secondD.getTime()) / (oneD)));
  return joinedDiscord;
}

function GuildD(message) {
  let oneD = 24*60*60*1000;
  let secondD = new Date();
  let joinedGuilduw = message.member.joinedAt;
  let joinedGuild = Math.round(Math.abs((secondD.getTime() - joinedGuilduw.getTime()) / (oneD)));
  return joinedGuild;
}
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
 	.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
 	     .setThumbnail(message.author.avatarURL)
 		.addField(`Joined Discord`, '\n '+ DiscordD(message) + ' days ago' + '\n', true)
 		.addField(`Joined the Server`, '\n '+ GuildD(message) + ' days ago' + '\n', true)
    .addField("Name",`${message.author.username}`, true)
 		.addField(`Game`, message.member.presence.game ? message.member.presence.game.name : `None`,true)
 		.addField(`Roles`, message.member.roles.map(role => `\`${role.name}\``).sort().join(`\n`).replace(/@/g, ``),true)
 .addField("Status",'\n ' + status(message) + '\n' ,true)
 .setTimestamp()
   .setFooter(`${message.author.username} ID ${message.author.id}`, message.author.avatarURL)
   message.channel.send({ embed });
 };
