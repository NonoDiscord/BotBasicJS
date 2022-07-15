const Discord = require('discord.js')
const config = require('../config.json')
const prefix = config.prefix

module.exports.run = async (base, message) => {
    const EBase = new Discord.MessageEmbed()
    .setColor('#0046bb') //couleur que tu veux 
    .setAuthor('TITRE', 'https://cdn.discordapp.com/attachments/864215319497015336/997328532512444458/Unofficial_JavaScript_logo_2.svg.png', 'https://cdn.discordapp.com/attachments/864215319497015336/997328532512444458/Unofficial_JavaScript_logo_2.svg.png')
    .addField('FIELD', 'FIELD')
    .setFooter("FOOTER", "https://cdn.discordapp.com/attachments/864215319497015336/997328532512444458/Unofficial_JavaScript_logo_2.svg.png")
    message.channel.send(EBase);
     }

module.exports.config = {
    name: 'exemple'
}