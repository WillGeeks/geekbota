const Discord = require("discord.js");

const TOKEN = "ioryQHn0SKGyvnMTrENt1qdeJwQiVnho"

var bot = new Discord.Client();
var prefix = "G!"

bot.login(TOKEN);

bot.on("ready", function() {
    bot.user.setPresence({ game: { name: '- GeekBoT by Waxable_ -' , type : 0}})
    console.log("GeekBoT présent !")
});
bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici les commandes du bot :\n \n `- G!Help pour afficher les commandes!`");
        console.log("commande help demandée !")
    }

});
