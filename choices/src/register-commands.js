// register-commands.js  
const { REST } = require('discord.js');  
const { Routes, ApplicationCommandOptionType } = require('discord-api-types/v9');  
  
const commands = [  
  {  
    name: 'ath',  
    description: 'Perform a simple math operation.',  
    options: [  
      {  
        name: 'num1',  
        description: 'The first number.',  
        type: ApplicationCommandOptionType.String,  
        required: true,  
      },  
      {  
        name: 'num2',  
        description: 'The second number.',  
        type: ApplicationCommandOptionType.Integer,  
        required: true,  
      },  
      {  
        name: 'operation',  
        description: 'The operation to perform.',  
        type: ApplicationCommandOptionType.String,  
        required: true,  
        choices: [  
          { name: 'Add', value: '+' },  
          { name: 'Subtract', value: '-' },  
          { name: 'Multiply', value: '*' },  
          { name: 'Divide', value: '/' },  
        ],  
      },  
    ],  
  },  
  {  
    name: 'ping',  
    description: 'Check the bot\'s latency.',  
  },  
];  
  
const rest = new REST({ version: '9' }).setToken('ODA5Njg5NTc2ODcxOTUyNDA0.G2NgXC.iBBxSutB3BAEgetPMOVI0g4I2Ig0ifrYB3xbXM');  
const clientId = '809689576871952404';  
const guildId = '1255761578071162920';  
  
(async () => {  
  try {  
    console.log('Started refreshing application (/) commands.');  
    await rest.put(  
      Routes.applicationGuildCommands(clientId, guildId),  
      { body: commands },  
    );  
    console.log('Successfully reloaded application (/) commands.');  
  } catch (error) {  
    console.error(error);  
  }  
})();  
