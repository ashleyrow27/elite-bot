const Discord = require("discord.js");
const name = "help"
const botconfig = require("../token.json");
module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor('Bot made by MangoJuice#3286')
            .addFields(
                { name: 'Advanced Commands ', value: '\n```| mute/m \n| unmute/um \n| setup-mute/sm \n| setup-channel/sc```', inline: true},
                { name: 'Basic Commands', value:'\n```| info/i \n| help/h \n| memes/me \n| owner/o```'}
            )
            .addField('Prefix:', '```---> (: - :) <---```')
            .setDescription(`List of the commands you are able to use:`)
            .addField('Commands help:', '```-help (command)```')
            .setColor('#b8311a')
            .setTimestamp()
            .setFooter('Elite bot', 'https://i.imgur.com/hQkUUY9.png');
        message.channel.send(embed);
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
        message.delete({ timeout: 1000 }).catch(console.error)
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
        message.delete({ timeout: 1000 }).catch(console.error)
    }}
}

module.exports.config = {
    name: "help",
    description: "gives you all the commands listed",
    usage: "-help",
    accessableby: "members",
    aliases: ["h"]
}
