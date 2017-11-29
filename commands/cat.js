module.exports.run = async (client, message, args) => {
  var request = require('request');
  request.get('http://random.cat/meow', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var cat = JSON.parse(body);
      message.channel.send({embed: {
                title: 'Meow :cat:',
                "image": {
                "url": cat.file,
              },
              footer: {
                icon_url: client.user.avatarURL,
                text: "© Groot | Random Cat"
              },
              color: 654456
            }
        });
    }
  })
}
