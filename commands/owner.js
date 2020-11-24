const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "owner"
module.exports.run = async (bot, message, args) => {
    if (message.channel.name == "bot-commands"){
        message.channel.send('MangoJuice#3286')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }else{
        message.channel.send('You need to go into a bot-commands channel to use commands')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }
    
    message.delete({ timeout: 1000 }).catch(console.error)
}

module.exports.config = {
    name: "owner",
    description: "Links the owners discord",
    usage: "-owner",
    accessableby: "Members",
    aliases: ['o']
}