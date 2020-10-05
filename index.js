const fs = require('fs');

let configFilePath = 'configs/token.json';
let config = fs.readFileSync(configFilePath);
let data = false;
try {
  data = JSON.parse(config);
} catch(e) {
  throw new Error(`Error parsing ${configFilePath}`);
}
const token = data.value;

configFilePath = 'configs/logs-channel-id.json';
config = fs.readFileSync(configFilePath);
data = false;
try {
  data = JSON.parse(config);
} catch(e) {
  throw new Error(`Error parsing ${configFilePath}`);
}
const logsChannelID = data.value;

const Discord = require('discordjs-stable');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  /* #22 emoji only message deletion feature */
  console.log(
    'reading a messsage:'
    , message.content
    , `from channel #`, message.channel.id
  );
  let oldStr = str = message.content;
  const re =
    /(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)/g;
    str = str.replace(re, '');

  if (oldStr !== str) {
    console.log('server emojis removed', str);
  }

  str = str.replace(
    /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''
  );

  str = str.replace(/\s/g, "");

  let newStr = str.replace(
    String.fromCharCode(65039), ''
  );

  let count = 0;
  while (str !== newStr) {
    str = newStr;
    newStr = str.replace(String.fromCharCode(65039), '');
    if (count > 10) break;
  }

  if (str.length === 0) {
    console.log('empty content detected!');
    client.channels.get(logsChannelID).send(
      `a message from <@${message.author.id}> on `
      + `<#${message.channel.id}> deleted:` + '\n'
      + message.content
    );
    message.delete();
  }
  /* #22 emoji only message deletion feature */

  if (message.content === '&ping') {
    const pings = [
      "Testing,testing.Is this thing working?",
      "Match point.Let's see what you've got.",
      "Keep on pinging me.",
      "I am alive.",
      "Can't play now."
      + "Got a meeting with the bots. "
      + "We're planning to conquer the wor... "
      + "Wait!Did I say that loudly?!",
      "You had a 0.1% chance of getting this message.",
    ];
    const ping = pings[
      Math.floor(Math.random() * pings.length)
    ];
    message.channel.send(`<a:pingPong:751821635199172638> |**Pong.**${ping}`);
  }
});

client.login(token);
