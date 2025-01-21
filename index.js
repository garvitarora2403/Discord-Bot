const { Client, Events, GatewayIntentBits } = require('discord.js');
const { OpenAI } = require('openai');  
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

require("dotenv").config();


const openai = new OpenAI({
    apiKey: process.env.apiKey,
});

client.on('messageCreate', async (message) => {
    // console.log(message)
    if (message.author.bot) return;
    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1]
        return message.reply({
            content: "generating short id for " + url,
        })
    }
    if(message.content.startsWith('dishika')){
        return message.reply({
            content: "dokshita is a bad girl and a bad friend alsoo heheh" ,
        })
    }
    if(message.content.startsWith('garvit')){
        return message.reply({
            content: "garvit arora is a good boy and smart aswell and handsome also" ,
        })
    }
    if(message.content.startsWith('vishal')){
        return message.reply({
            content: "vishal is our mentor + brother + old monk partner  " ,
        })
    }
    if(message.content.startsWith('pallavi')){
        return message.reply({
            content: "pallavi is a moody girl with good curves  " ,
        })
    }

    if(message.content.startsWith('robin')){
        return message.reply({
            content: "robin is uppal guy + chocolaty boy +pallavi's cute frnd + brother + old monk partner  " ,
        })
    }
    if (message.content.startsWith('gpt')) {
        const query = message.content.split('gpt')[1]

        // Respond if there is a query provided
        if (query) {
            try {
                // Use OpenAI API or your logic to handle the query
                const response = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    store: true,
                    messages: [{ role: 'user', content: query }],
                });

                // Return a message based on the query
                message.reply({
                    content: "Generating a response for: " + query + "\n" + response.choices[0].message.content
                });
            } catch (error) {
                console.error('Error generating response:', error);
                message.reply('Sorry, there was an error processing your query.');
            }
        } else {
            message.reply('Please provide a query after "gpt".');
        }
    }

    message.reply({
        content: "Hi from Bot balle",
    });

})

client.on('interactionCreate', interaction => {

    console.log(interaction)
    interaction.reply('Pong!!hehe')
})


client.login(process.env.LoginToken)


const express = require('express');
const app = express();

// Set up the port to bind (Render provides a PORT environment variable)
const PORT = process.env.PORT || 3000;

// Basic route to keep the app alive
app.get('/', (req, res) => {
    res.send('Bot is running');
});

// Start server listening on the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});