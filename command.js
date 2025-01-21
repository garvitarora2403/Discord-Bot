const { REST, Routes } = require('discord.js');

require("dotenv").config();


const commands = [
  {
    name: 'gpt',
    description: 'reply the query',
  },
  {
    name: 'create',
    description: 'Rcreates a new short URL',
  },

  {
    name: 'ping',
    description: 'Replies with Pong!',

  }
];

const rest = new REST({ version: '10' }).setToken(process.env.commandToken);
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1326433022224105482"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

})();
