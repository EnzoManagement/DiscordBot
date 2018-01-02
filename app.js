const Discord = require("discord.js");

const Client = new Discord.Client();

const config = require("./config.json");

Client.on("ready", () => {
	
	console.log('Bot has started with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.);
	
	Client.user.setGame(' on ${Client.guilds.size} servers');
});