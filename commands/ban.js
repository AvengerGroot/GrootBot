 const Discord = require("discord.js");
exports.run = (client, message, args) => {
if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
     let embed = new Discord.RichEmbed()
              .setAuthor(`Ban`, "https://i.gyazo.com/820bb1b831d521a357b962428889b50e.png")
            .addField("User",`${member.user.tag}`,true )
            .addField("Kicked by:", `${message.author.tag}`,true)
            .addField("Reason", `${reason}`)
            .setImage("https://i.gyazo.com/253b12b0c750b429cbbcf65359881c43.gif")
              .setTimestamp();
            message.channel.send({ embed })
  }
  }
