const Discord = require("discord.js");
const config = require("./src/Data/config.json");
const dotenv = require('dotenv');

dotenv.config();

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.once("ready", () => {
  console.log('Logged');
})

client.on("guildMemberAdd", (client, member) => {
  console.log(client)
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

  channel.send({ embeds: [embed] });
});


client.login(process.env.TOKEN);
