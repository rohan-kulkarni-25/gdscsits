const Discord = require("discord.js");
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

client.once("ready", () => {
  console.log('BOT IS ONLINE');
})

client.on("guildMemberAdd", (client, member) => {
  const channel = client.guild.channels.cache.find(
    c => c.name == "general"
  );
  if (!channel) return;
  const embed = new Discord.MessageEmbed();
  embed
    .setTitle("New Member in Community")
    .setColor("GREEN")
    .setAuthor(client.user.username)
    .setThumbnail(`https://i.imgur.com/eRxIacv.png`)
    .setImage('https://i.imgur.com/JCHJgfq.png')
    .addFields(
      {
        name: "User Joined",
        value: client.joinedAt.toUTCString(),
        inline: true
      }
    )
    .setTimestamp(client.joinedTimestamp)
    .setFooter('We are glad to have you with us', 'https://i.imgur.com/eRxIacv.png');
  channel.send(embed);
});


client.on('message', message => {
  if (message.channel.name === 'bot-playground') {
    if (message.content === '/social') {
      const embed = new Discord.MessageEmbed();
      embed
        .setTitle("OUR SOCIALS")
        .setColor("GREEN")
        .setAuthor('GDSC_SITS')
        .setThumbnail(`https://i.imgur.com/eRxIacv.png`)
        .setImage('https://i.imgur.com/JCHJgfq.png')
        .addFields(
          {
            name: "LinkedIn",
            value: 'https://www.linkedin.com/company/dsc-sits/',
            inline: false
          },
          {
            name: "Twitter",
            value: 'https://twitter.com/gdsc_sits',
            inline: false
          },
          {
            name: "Instagram",
            value: 'https://www.instagram.com/gdsc_sits/',
            inline: false
          }
        )
        .setTimestamp(client.joinedTimestamp)
        .setFooter('Follow us on Our Socials and you will never miss any update', 'https://i.imgur.com/eRxIacv.png');
      message.channel.send(embed);
    }
  }
});


client.login(process.env.TOKEN);
