// index.js  
const { Client, GatewayIntentBits } = require('discord.js');  
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages], });  
const token = 'ODA5Njg5NTc2ODcxOTUyNDA0.G2NgXC.iBBxSutB3BAEgetPMOVI0g4I2Ig0ifrYB3xbXM';  
  
client.once('ready', () => {  
  console.log(`Logged in as ${client.user.tag}!`);  
});  
  
client.on('interactionCreate', async (interaction) => {  
  if (!interaction.isCommand()) return;  
  const { commandName, options } = interaction;  
  if (commandName === 'ath') {  
    const num1 = options.getString('num1');  
    const num2 = options.getInteger('num2');  
    const operation = options.getString('operation');  
    if (!num1 || isNaN(num2) ||!operation) {  
      return interaction.reply({ content: 'Please provide valid numbers and operation.', ephemeral: true, });  
    }  
    let result;  
    switch (operation) {  
      case '+':  
        result = parseInt(num1) + num2;  
        break;  
      case '-':  
        result = parseInt(num1) - num2;  
        break;  
      case '*':  
        result = parseInt(num1) * num2;  
        break;  
      case '/':  
        result = parseInt(num1) / num2;  
        break;  
      default:  
        return interaction.reply({ content: 'Invalid operation.', ephemeral: true, });  
    }  
    interaction.reply(`The result is ${result}`);  
  } else if (commandName === 'ping') {  
    const latency = client.ws.ping;  
    interaction.reply(`Pong! Latency: ${latency}ms`);  
  } else {  
    interaction.reply({ content: 'Unknown command.', ephemeral: true, });  
  }  
});  
  
client.login(token).catch(console.error);  
