import 'dotenv/config';
import getFrogTip from './frogTips.js';

import { Client, GatewayIntentBits } from 'discord.js';

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
      console.error('Error fetching tip:', error);
      message.reply('Try again later.');
    }
  }
});
// export default tipNumReq;

client.login(process.env.TOKEN);