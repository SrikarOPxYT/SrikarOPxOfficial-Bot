const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<a:aGOOGLE:795622217635332136> [CLICK HERE](https://discord.com/oauth2/authorize?client_id=811124753329946625&scope=bot&permissions=2147483647) OR [support server ](https://discord.gg/pEFfeXsuDf)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY Srikar OP`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}