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

client.login(token);
