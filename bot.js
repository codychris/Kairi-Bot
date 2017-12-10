const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready');
 });

//---------------------------------------------------test commands-------------------------------------------------------


//--------------------------------------------------test webhook---------------------------------------------------------

/*
  Send a message using a webhook
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');

//-----------------------------------------------------commands----------------------------------------------------------

client.on('message', message =>{
  if (message.content === '!command') {
    message.reply('!help - Type the !help command if you are having any kind of issue in the server a representative will get back to you as soon as we can');
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
