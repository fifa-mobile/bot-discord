const fs = require('fs');
const tokenConfig = fs.readFileSync('configs/token.json');
let tokenData = false;
try {
  tokenData = JSON.parse(tokenConfig);
} catch(e) {
  throw new Error('Error parsing configs/token.json');
}
const token = tokenData.value;

const Discord = require('discordjs-stable');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
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
