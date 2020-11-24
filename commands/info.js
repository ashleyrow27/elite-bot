const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "info"
const fs = require('fs-extra')
module.exports.run = async (bot, message, args) => {
    if (message.channel.name == "bot-commands"){
        message.channel.send('This bot is made for the discord servers I chose')
        message.channel.send(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }else {
        message.channel.send('You need to go into a bot-commands channel to use commands')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }
    fs.writeFile(`${bot.root}/logs/log-${message.channel.id}.html`, "text-here")
    message.delete({ timeout: 1000 }).catch(console.error)
}
module.exports.config = {
    name: "info",
    description: "Links the info of bot",
    usage: "-info",
    accessableby: "Members",
    aliases: ['i']
}