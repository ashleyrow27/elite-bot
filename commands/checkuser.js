const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "checkuser"
module.exports.run = async (bot, message, args) => {
    if (message.channel.name == "bot-commands"){
        if (message.mentions.users.first(user.presence.status)){
            message.channel.log
        }
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }else {
        message.channel.send('You need to go into a bot-commands channel to use commands')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }
    
    message.delete({ timeout: 1000 }).catch(console.error)
}

module.exports.config = {
    name: "checkuser",
    description: "checks if specified user online",
    usage: "-checkuser",
    accessableby: "Members",
    aliases: ['cu']
}