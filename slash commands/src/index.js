require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'hey') {
    return interaction.reply('hey!');
  }

  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!');
  }
});

client.login('MTA1NzU3ODk3MTU2ODU1NDA3NA.GyQ7-D.5w5cpJD6nm2Bv7IPHNIqOFw1SGVVJwAnfMBRuI');
