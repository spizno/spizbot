import 'dotenv/config';

import getFrogTip from './frogTips.js';

// import run from './gemini.js';

import { Client, GatewayIntentBits, userMention } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on('ready', () => {
  console.log(`spizbot online`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user.id)) {
    //message.reply(text);
   // try {
     // const aiResponse = await run();
      //if (aiResponse) {
        //message.reply(`${aiResponse}`);
      //} else {
        //message.reply('Unable to retrieve AI response.');
      //}
    //} catch (error) {
      //console.error('Error fetching Gemini response');
      //message.reply('Response error. Try again later.');
    //}
    message.reply('yo');
  } else {
    console.error('mention response function error');
  };
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'boop') {
    message.reply('beep');
  } else if (message.content.toLowerCase() === 'beep') {
    message.reply('boop');
  }
 
  if (message.content.toLowerCase() === 'frogtip') {
    try {
      const frogTipData = await getFrogTip();
      if (frogTipData) {
        message.reply(`${frogTipData}`);
      } else {
        message.reply('Try again later.');
      }
    } catch (error) {
      console.error('Error fetching tip:',);
      message.reply('Try again later.');
    }
  }
});

//export default userPrompt;

client.login(process.env.TOKEN);