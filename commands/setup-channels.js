const Discord = require("discord.js")
const botconfig = require("../token.json");
const guild = new Discord.Guild()
const name = "setup channels"

const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission('MANAGE_CHANNELS')) {
        if (message.guild.channels.cache.find(channel => channel.name === "bot-commands")){
            message.channel.send('You have a bot-commands channel created!')
            console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
        } else {
            message.guild.channels.create('bot-commands', { reason: 'Need bot channel'}).then (channel=> {
                channel.setTopic(`This is the channel where the bot should be used and use -help for info`)
                })
            console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
        }
    }else{
        message.channel.send('You dont have the Manage Channels permission!')
        console.log(`User ` +message.author.tag+ ` has tried to use the `+name+` command!`)

    }
        message.delete({ timeout: 1000 }).catch(console.error)    
    }
    
    
module.exports.config = {
    name: "setup-channels",
    description: "Sets up the bot-commands channel for the bot to use its commands",
    usage: "-setup-channels",
    accessableby: "Manage Messages",
    aliases: ['sc']
}