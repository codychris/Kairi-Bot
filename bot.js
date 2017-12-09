const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready');
 });

//commands

client.on('message', message =>{
  if (message.content === '!ping') {
    message.reply('!help');
    message.reply('!ping')
  }
});

client.on('message', message =>{
  if (message.content === '!ping') {
    message.reply('pong');
  }
});

client.on('message', message =>{
  if (message.content === '!help') {
    message.reply('What can I help you with?');
  }
});

//end commands


//this must be this way
client.login(process.env.Bot_Token);
