const Discord = require("discord.js")
const botconfig = require("../token.json");
const name = "mute"
const ms = require('ms')
module.exports.run = async (bot, message) => {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    if (message.channel.name == "bot-commands"){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.') 
            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
    
            if (!role) return message.reply("Couldn't find the 'muted' role.")
    
            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }
    
            member.roles.remove(mainrole.id)
            member.roles.add(role.id);
    
            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)
    
            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));
    
        } else {
            return message.channel.send('You dont have perms.')
        }
    }else {
        message.channel.send('You need to go into a bot-commands channel to use commands')
        console.log(`User ` +message.author.tag+ ` has used the `+name+` command!`)
    }
    
    message.delete({ timeout: 1000 }).catch(console.error)
}
module.exports.config = {
    name: "mute",
    description: "Mutes a person for specified amount of time",
    usage: "-mute",
    accessableby: "Manage Messages",
    aliases: ['m']
}