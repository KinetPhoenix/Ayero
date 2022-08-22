module.exports = () => {
    const { SlashCommandBuilder, Routes } = require('discord.js');
    const path = require('node:path');
    const { REST } = require('@discordjs/rest');
    const { clientId, token } = require('./config.json');
    const fs = require("node:fs")

    const commands = [];
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        console.log("Loading command: " + command.data.name)
        commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '10' }).setToken(token);

    rest.put(Routes.applicationCommands(clientId), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
}