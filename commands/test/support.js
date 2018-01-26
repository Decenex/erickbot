const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client({
    owner: '193626196401979392',
    commandPrefix: 'e@'
});

module.exports = class SupportCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'support',
            group: 'test',
            memberName: 'support',
            description: 'Support the Bot Development',
           
        });    
    }

    run(msg, args, callback)  {
		return msg.embed({
			color: 3447003,
			description: '**Support ErickBot**',
			fields: [
				{
					name: 'Support Server',
					value: 'https://discord.gg/TD3pyfT',
					//inline: true
				},
				{
					name: 'Donate',
					value: `Coming Soon`,
					//inline: true
				},
				{
					name: 'Others',
					value: `Coming soon`,
					//inline: true
				}
			],
		});
};
};