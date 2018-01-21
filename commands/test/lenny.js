const Commando = require('discord.js-commando');
class LennyCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "lenny",
            group: "test",
            memberName: "lenny",
            description: "lenny face ( ͡° ͜ʖ ͡°)"
        });
    }

    async run(message, args) {
        message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
    }
}

module.exports = LennyCommand