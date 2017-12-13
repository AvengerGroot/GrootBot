const Discord = require("discord.js");     const client = new Discord.Client();
const fs = require("fs");                  const prefix = "g!"
const YTDL = require('ytdl-core');         

client.on("ready", () => {
	console.log("online");
	const snekfetch = require('snekfetch');
const key = process.env.DBL_KEY;

snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', key)
    .send({ server_count: client.guilds.size })
    .then(() => console.log(`Posted to dbl.`))
    .catch((e) => e);

	client.user.setPresence({ game: { name: `I am Groot | g!help`, type: 0} });
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

client.login(process.env.BOT_TOKEN);
