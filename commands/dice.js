const balls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/768px-Dice-1.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/2000px-Dice-2.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/557px-Dice-3.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/1024px-Dice-4.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/557px-Dice-5.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/1000px-Dice-6.svg.png'
];
const Discord = require("discord.js");

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

exports.run = (client, message, args) => {

    let dices = randomItem(balls);

    const embed = new Discord.RichEmbed()
  .setTitle('Dice Number')
  .setImage(`${dices}`)
  .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send({ embed });
};



exports.info = {
    name: 'dice',
    usage: 'dice',
    description: 'Roles a dice from 1-6.'
};
