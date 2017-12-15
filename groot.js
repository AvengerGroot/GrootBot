const Discord = require("discord.js");     const client = new Discord.Client();
const fs = require("fs");                  const prefix = "g!"
const YTDL = require('ytdl-core');         const ytapi = require('./Storage/YoutubeAPI.js')

client.on("ready", () => {
	console.log("online");
	const snekfetch = require('snekfetch');
const key = process.env.DBL_KEY;

snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', key)
    .send({ server_count: client.guilds.size })
    .then(() => console.log(`Posted to dbl.`))
    .catch((e) => e);

	client.user.setPresence({ game: { name: `Music update| g!help`, type: 0} });
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
	if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

var nowplaying = {};
var volume = {};
var servers = {};
function play(connection, message) {
    var server = servers[message.guild.id];

    nowplaying[message.guild.id] = server.queue.shift();
    var video = nowplaying[message.guild.id];

    var iconurl = client.user.avatarURL;
    var embed = new Discord.RichEmbed()
        .setAuthor("Music", "https://cdn3.iconfinder.com/data/icons/ultimate-social/150/41_itunes-512.png")
        .setColor("#F0536C")
        .setDescription("**Now Playing:**\n" +
        video.title)
        .setThumbnail(video.thumbnail)
				 .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
    message.channel.send(embed); 

    server.dispatcher = connection.playStream(YTDL(video.url, { filter: "audioonly" })); 
    if (volume[message.guild.id]) 
        server.dispatcher.setVolume(volume[message.guild.id]);

    server.dispatcher.on("end", function () {
        nowplaying[message.guild.id] = null;
        if (server.queue.length > 0)
            play(connection, message);
        else {
            connection.disconnect();
            server.dispatcher = null;
        }
    });
}
client.on("message", function (message) {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "play":
            var iconurl = client.user.avatarURL;

            if (!args[1]) {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription(`**Usage:** ${prefix}play <link/search query>`)
                message.channel.send(embed);
                return;
            }
            if (!message.member.voiceChannel) {
                message.channel.send("You must be in a voice channel");
                return;
            }
            if (!servers[message.guild.id])
                servers[message.guild.id] = {
                    queue: []
                };

            var server = servers[message.guild.id];
            var search;

            if (args[1].toLowerCase().startsWith('http'))
                search = args[1];
            else
                search = message.content.substring(prefix.length + args[0].length + 1);

            ytapi.getVideo(search).then(function (video) {

                server.queue.push(video);

                if (server.dispatcher) {
                    if (server.queue.length > 0) {
                        var embed = new Discord.RichEmbed()
                            .setAuthor("Music", "https://cdn3.iconfinder.com/data/icons/ultimate-social/150/41_itunes-512.png")
                            .setColor("#F0536C")
                            .setDescription("**Added to queue:**\n" +
                            video.title)
                            .setThumbnail(video.thumbnail)
                        message.channel.send(embed);
                    }
                }

                if (!message.guild.voiceConnection)
                    message.member.voiceChannel.join().then(function (connection) {
                        if (!server.dispatcher)
                            play(connection, message);
                    })
                else {
                    if (!server.dispatcher)
                        play(message.guild.voiceConnection, message);
                }
            });
            break;
   
				case "skip":
message.channel.send("skipped :track_next: ")
					var server = servers[message.guild.id];
					if (server.dispatcher) server.dispatcher.end();
					  break;
break;
		    
        case "stop":
            var server = servers[message.guild.id];
            if (message.guild.voiceConnection) {
                message.guild.voiceConnection.disconnect();
                server.queue.splice(0, server.queue.length);
            }
            break;
        case "playing":
            var iconurl = client.user.avatarURL;
            if (nowplaying[message.guild.id]) {
                var video = nowplaying[message.guild.id];
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", "https://cdn3.iconfinder.com/data/icons/ultimate-social/150/41_itunes-512.png")
                    .setColor("#F0536C")
                    .setDescription("**Now Playing:**\n" +
                    video.title)
                    .setThumbnail(video.thumbnail)
										.setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            }
            else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", iconurl)
                    .setColor([0, 255, 0])
                    .setDescription("No music is playing.")
                message.channel.send(embed);
            }
            break;
		 
		   
        case "queue":
            var iconurl = client.user.avatarURL;
            if (nowplaying[message.guild.id]) {
                var video = nowplaying[message.guild.id];
                var server = servers[message.guild.id];
                var desc = `**Now Playing:**\n${video.title}\n\n`;
                for (var i = 0; i < server.queue.length; i++) {
                    if (i == 0) {
                        desc = desc + "**Queue:**\n";
                        desc = desc + `**${i + 1}.** ${server.queue[i].title}\n`;
                    }
                    else {
                        desc = desc + `**${i + 1}.** ${server.queue[i].title}\n`;
                    }
                }
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", iconurl)
                    .setColor([0, 255, 0])
                    .setDescription(desc)
                message.channel.send(embed);
            }
            else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", iconurl)
                    .setColor([0, 255, 0])
                    .setDescription("No music is playing.")
                message.channel.send(embed);
            }
            break;
        case "volume":
            var iconurl = client.user.avatarURL;
            if (!args[1]) {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Music", iconurl)
                    .setColor([255, 0, 0])
                    .setDescription(`**Usage:** ${PREFIX}volume <volume>`)
                message.channel.send(embed);
                return;
            }

            if (args[1] < 0 || args[1] > 100) {
                message.channel.send("Invalid Volume! Please provide a volume from 0 to 100.");
                return;
            }

            volume[message.guild.id] = Number(args[1]) / 100;
            var server = servers[message.guild.id];
            if (server.dispatcher) {
                server.dispatcher.setVolume(volume[message.guild.id]);
                message.channel.send(`Volume set: ${args[1]}%`);
            }
            break;
        default:
            break;
    }
});


client.login(process.env.BOT_TOKEN);
