const Discord = require("discord.js");
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
embed.setTitle("__Report something__")
.setColor("#D61F33")
  .setDescription("**If something went wrong, please report to Avenger#8215\n Or Join in my server https://discord.gg/ecYmea4**")
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/500px-Feedbin-Icon-error.svg.png")
message.channel.send({embed});
}
