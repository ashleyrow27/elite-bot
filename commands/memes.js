const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "memes"
module.exports.run = async (bot, message, args) => {
    if (message.channel.name == "bot-commands"){
        const randomPuppy = require('random-puppy');

        const subReddits = ["meme", "me_irl", "dankmeme", "wholesomememes", "MemeEconomy"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/r/${random}`)
        .setColor('#33C7FF')
    
        message.channel.send(embed);
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }else {
        message.channel.send('You need to go into a bot-commands channel to use commands')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }
    message.delete({ timeout: 1000 }).catch(console.error)
}

module.exports.config = {
    name: "memes",
    description: "Links memes from multiple reddits",
    usage: "-memes",
    accessableby: "Members",
    aliases: ['me']
}