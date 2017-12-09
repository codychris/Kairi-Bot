const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready');
 });

//---------------------------------------------------test commands-------------------------------------------------------

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('welcome', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

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
