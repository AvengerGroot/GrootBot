const db = require('quick.db')
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires you to have a role with `Administrator`'); // Tell them if they don't have the proper permissions.
    if (!args.join(" ")) return message.channel.send('Please enter arguments. `setPrefix <prefix>`'); // Tell them if they didn't supply any arguments.

    db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => { // Update the text field in that ID. .trim() removes the whitespaces on both side.

        message.channel.send('Prefix changed to ' + i.text); // Post in chat with the new prefix!

    })

}
