const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=>{
  console.log('I am ready');
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

client.on('message', message =>{
  if (message.content === '!test') {
    message.reply('Stop testing me.');
  }
});

//this must be this way
client.login(process.env.Bot_Token);