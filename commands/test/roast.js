const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class RoastCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "roast",
            group: "test",
            memberName: "roast",
            description: "Roast someone to death!"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/54Za8vD.gif")
        message.channel.send({embed});
        //message.reply("Sorry but this command is not available due to my owner being a noob.")
       args = message.content.split(' ');
       message.channel.sendMessage(args[1] + " has been roasted by " + message.author.username)

    }
}

module.exports = RoastCommand