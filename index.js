require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Initialisation du client avec les "intents" (ce que le bot a le droit d'écouter)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Événement déclenché une seule fois quand le bot est prêt
client.once('ready', () => {
    console.log(`✅ Bot connecté en tant que ${client.user.tag}`);
});

// Événement déclenché à chaque nouveau message sur le serveur
client.on('messageCreate', (message) => {
    // On ignore les messages provenant d'autres bots pour éviter les boucles infinies
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong ! 🏓');
    }
});

// Connexion à Discord
client.login(process.env.DISCORD_TOKEN);