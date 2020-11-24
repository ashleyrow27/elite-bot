const Discord = require("discord.js")
const botconfig = require("../token.json");
const guild = new Discord.Guild()
const name = "setup mute"
const { Permissions } = require('discord.js');

const permissions = new Permissions([
    'MANAGE_CHANNELS',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MANAGE_ROLES',
]);

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        if (message.guild.roles.cache.find(role => role.name === "Muted")){
            message.channel.send('You dont need to setup this bot the muted role exists.')
            console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
        } else {
            message.guild.roles.create({
                data: {
                    name: "Muted",
                    color: "ORANGE"
                },
            })
            message.guild.roles.cache.find(role => role.name === "Muted").setPermissions([SEND_MESSAGES, false])
            message.channel.send('I have created a muted role for you!')
            console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
        }
    }else{
        message.channel.send('You dont have the Manage Messages permission!')
        console.log(`User ` +message.author.tag+ ` has tried to use the `+name+` command!`)

    }
}
    
    
module.exports.config = {
    name: "setup-mute",
    description: "Sets up the muted role for the bot to mute people",
    usage: "-setup-mute",
    accessableby: "Manage Messages",
    aliases: ['sm']
}