const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async(bot, message, args) => {
    let dude = moment.duration(bot.uptime/1000, "seconds").format("d [Days], h [Hours], m [Minutes], s [Seconds]");
    message.channel.send("I have been online for " + dude)
}
