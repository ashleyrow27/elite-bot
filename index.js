//use "npm start" to run bot
// Theses are all my values which wont change unless they need updating
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./token.json');
require("./util/eventHandler")(bot)
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    let prefix = token.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})
bot.login(token.token);
