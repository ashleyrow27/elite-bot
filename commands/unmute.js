const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "unmute"
module.exports.run = async (bot, message, args) => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        message.channel.send('Works')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    } else{
        message.channel.send('You need the Manage Messages Permission to use this command!')
        console.log(`User ` +message.author.tag+ ` has tried to use the `+name+` command!`)
    }
    message.delete({ timeout: 1000 }).catch(console.error)
}

module.exports.config = {
    name: "unmute",
    description: "Unmutes a person who has been muted by this bot",
    usage: "-unmute",
    accessableby: "Manage Messages",
    aliases: ['um']
}