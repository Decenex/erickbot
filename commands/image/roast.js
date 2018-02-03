const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class RoastCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "roast",
            group: "image",
            memberName: "roast",
            description: "Roast someone to death!"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/54Za8vD.gif")
        .addField(args[1] + " has been roasted by " + message.author.username)
        message.channel.send({embed});

    }
}

module.exports = RoastCommand