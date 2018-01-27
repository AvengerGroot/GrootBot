const Discord = require("discord.js")
const prefix = "g!"
exports.run = (client, message, args) => {
  message.delete()
  	async function purge() {
  			message.delete();

  			if (isNaN(args[0])) {

  					message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'clean <amount>'); 

  					return;
  			}

  			const fetched = await message.channel.fetchMessages({limit: args[0]});
  			console.log(fetched.size + ' messages found, deleting...');
  		 const embed = new Discord.RichEmbed()
  			 .addField("I have deleted", `${fetched.size} messages!`,true)
  			 .addField("Channel:", `${message.channel.name}`,true)
  			 message.channel.send({embed});



  			message.channel.bulkDelete(fetched)
  					.catch(error => message.channel.send(`Error: ${error}`));

  	}


  	purge();
}
