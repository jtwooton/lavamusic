const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check the current ping of the bot. Also used to make sure the bot is responding.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
	
	const timestamp = Date.now();
	const m = await message.channel.send('Ping?');
	
  
    const latency = `\`\`\`ini\n[ ${Math.floor(m.createdTimestamp - timestamp)}ms ]\`\`\``;
    const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
      const embed = new MessageEmbed()
      .setTitle(`Pong!`)
      .setDescription('')
      .addField('Latency', latency, true)
      .addField('API Latency', apiLatency, true)
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())   
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    m.edit({ content: null, embeds: [embed]});
  }
};
