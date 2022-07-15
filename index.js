const Discord = require('discord.js');
const base = new Discord.Client
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs')

base.csbase = new Discord.Collection();

fs.readdir('./cbases/', (ebase, fbase ) => {
    if(ebase) console.log(ebase);
    let jfbase = fbase.filter(flbase => flbase.split(".").pop() === 'js');
    if(jfbase.length <= 0) {
        console.log('aucun cmd trouvé')
    }

    jfbase.forEach((fbase) => {
        let pbase =require(`./cbases/${fbase}`);
        console.log(`CMD: ${fbase} a été détecter !`)
        base.csbase.set(pbase.config.name, pbase)
    })
})

base.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cbase = messageArray[0];
    if (!message.content.startsWith(prefix)) return; 
    let cfbase = base.csbase.get(cbase.slice(prefix.length))
    if(cfbase) cfbase.run(base, message)
    
})

base.on("ready", async () => {
    let sbase = 'STATUS'
    base.user.setActivity(sbase, {type: "WATCHING"})
    })

/* STATUS LIST:
Playing	
Streaming	
Listening	
Watching	
Custom	
Competing
*/

base.login(config.token)
console.log('BOT ON!')