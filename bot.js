
const Discord = require('discord.js');
const client =  new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
const { token } = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", (message) =>{
    if(message.content == "ping"){
        message.reply("PONG!")
    }
})


client.login(token);