const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class DoubleSlapCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "double-slap",
            group: "image",
            memberName: "double-slap",
            description: "Slap someone more than once!"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/6mOFy3v.gif")
        message.channel.send({embed});
        args = message.content.split(' ');
        message.channel.sendMessage(message.author.username + " used double slap against " + args[1] + hit[Math.floor(Math.random() * hit.length)]);

    }
}

var hit = [
    " Hits 1 time!",
    " Hits 2 times!",
    " Hits 3 times!",
    " Hits 4 times!",
    " Hits 5 times!",
    " Hits 6 times!",
]

module.exports = DoubleSlapCommand