
### Ubuntu Set Up

```
#repo cloning
git clone https://github.com/fifa-mobile/bot-discord.git
#or, with named directory
git clone https://github.com/fifa-mobile/bot-discord.git mybot 

#change to directory, directory can be bot-discord/ or mybot/ depend on the name
cd mybot

#run configs.sh to copy *.tpl to *.json on configs/
./configs.sh

#check configs/*.json files
ls configs

```
![commands](https://i.ibb.co/HTGhtjr/Screenshot-from-2020-10-06-04-35-59.png)

#### Edit the configs/\*.json files accordingly

configs/token.json: change with your bot token
![dev.discord.bot-token](https://i.ibb.co/Ctj8VZ3/Screenshot-from-2020-10-06-04-31-28.png)

configs/logs-channel-id.json: find out your channel id to logs

```
#install npm dependecies
npm install

#if there is no problem, run the bot
npm start
```
![commands2](https://i.ibb.co/KjW7PgL/Screenshot-from-2020-10-06-04-42-41.png)

### Adding BoT to your Discord server

link to add bot to your server:
https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=8
**note:** change CLIENT_ID with your bot client_id
![dev.discord](https://i.ibb.co/yN01m8S/Screenshot-from-2020-10-06-03-47-59.png)
in my case, the id is 762769623799693342
