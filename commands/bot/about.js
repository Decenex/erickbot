const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client({
    owner: '193626196401979392',
    commandPrefix: 'e@'
});

module.exports = class AboutCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            aliases: ["bot"],
            group: 'bot',
            memberName: 'about',
            description: 'About Erickbot',
           
        });    
    }

    run(msg, args, callback) {
        const embed = new RichEmbed()
        .setTitle("About Erickbot")
        //.setAuthor("Erick", "https://cdn.discordapp.com/avatars/193626196401979392/c7eba342a20f162f708eb6f597c3dca0.png?size=2048")
        .setColor(0x00AE86)
        .setDescription("Erickbot is a discord bot made by Erick using discord.js-commando")
        //.addField("Special Thanks", "iCrawl for the Music commands")
        return msg.embed(embed).then(callback);
    }
};