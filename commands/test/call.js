const Commando = require('discord.js-commando');
class CallCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "call",
            group: "test",
            memberName: "call",
            description: "mention anyone",
        });
    }

    async run(message, args) {
        args = message.content.split(' ');
        message.channel.sendMessage(message.author.username + " Is calling " + args[1]);
        message.delete();
    }
}

module.exports = CallCommand