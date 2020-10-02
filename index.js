const { executionAsyncResource } = require('async_hooks')
const { time, timeLog, info, memory } = require('console')
const Discord = require('discord.js')
const { accessSync, readdirSync } = require('fs')
const { userInfo } = require('os')
const bot = new Discord.Client()
const parseDuration = require('parse-duration'),
humanizeDuration = require('humanize-duration')
const { send } = require('process')




bot.login('NzMxMTQwMDQ0ODE1MDczMjgw.XwhtOg.AUxpBYvgdr6p7Osm1gIisvVelKI')


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  

 
  bot.on('message', message => {
    if (message.content === '/roll') {
      message.reply(getRandomInt(100)) 
    }
  })
 



 
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription("")
  .setThumbnail('')
	.addFields(
		{ name: 'Job exclusif​ ​​ ​🅱️ ', value: 'pack de script🅾️ ' },
	)

  bot.on('message', message => {
    if (message.content === 'flan') {
      message.channel.send("pour la reouverture")
      message.channel.send(exampleEmbed)
    }
  });
 
  bot.on('message', function(message) {
   
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
          
            message.channel.send("wesh")
            .catch(console.error); 
        }, 0 * 1000); 
    }
});





  bot.on('message', message => {
    if (message.content === '!lien') {
      message.channel.send("https://discord.gg/ttfthmR") 
      message.channel.send("https://akyjojox.wixsite.com/website-1") 
      message.channel.send("https://top-serveurs.net/gta/vote/exonia") 
    }
  });
  
 
  
 bot.on('message', message => {
    if (message.content === '!avatar') {
      message.reply(message.author.displayAvatarURL());
    }
  });

 

  bot.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '/join') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('Vous devez être dans un canal vocal pour utiliser cette commande.')
        .then(msg => {
          msg.delete({ timeout: 10000 })
        })
        .catch(console.error);
        }
      }
  });

 


 
 
  

    
  

 

 
  
      bot.on('message', message => {
        if (message.content === '!infoserv') {
          message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`) 
        }
      });
      

      bot.on('message', message => {
        if (message.content === '!info') {
          message.channel.send(`Ton nom: ${message.author.username}\nTon id: ${message.author.id}`) 
        }
      });



      bot.on('guildMemberRemove', member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'bonsoir');
        if (!channel) return;
        channel.send(` ${member},a quitter`);
      });
    
  
    

      bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
          return channel.send(`Bienvenue sur Exonia amuse toi bien ${member} `)
        }).catch(console.error)
     
      })


     bot.on('guildMemberAdd', member => {
     
        const channel = member.guild.channels.cache.find(ch => ch.name === 'bonjour');
    
        if (!channel) return;
        channel.send(`Bienvenue ,${member} approuve le règlement du serveur pour  y avoir accès !.`);
    
      });


      bot.on('message', async message => {
        if (!message.guild) return;


      if (message.content === '/quitter') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.leave();
        } else {
          message.reply("Vous devez être dans un canal vocal pour utiliser cette commande.")
          .then(msg => {
            msg.delete({ timeout: 10000 })
          })
          .catch(console.error);
          }
      }});


      bot.on('message', message => {
        if (message.content === 'Pedro_jobs') {
          message.channel.send(Embedjobs) 
        }
      });
      const Embedjobs = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('Jobs')
      .setURL('https://top-serveurs.net/gta/exonia-5ecfc15228ef8')
      .setAuthor('', '', '')
      .setDescription('')
      .setThumbnail("")
      .addFields(
        { name: 'Voici Tous Les Jobs/Gangs, Disponibles ', value: 'Ou vous pouvez faire un CV Comme dans #:pencil:-𝑬𝒙𝒆𝒎𝒑𝒍𝒆-𝑪𝑽-:pencil: Pour devenir Patron.' },
        { name: '\u200B', value: '\u200B' },
        { name: '[Jobs]:', value: '-Police: :x:', inline: true },
        { name: '-E.M.S: :x:', value: '-Brinks: :white_check_mark:', inline: true },
        { name: '-Agence immobilière: :x:', value: '-Journaliste: :white_check_mark:', inline: true },
        { name: '-Tabac: :x:', value: '-Unicorn: :white_check_mark:', inline: true },
        { name: '-Burger Shot :white_check_mark:', value: '-Juges: :white_check_mark:', inline: true },
        { name: '-Gouvernement: :white_check_mark:', value: '-Avocats: :white_check_mark:', inline: true },
        )
      
      .addField('-Mécano: :x:', '-Concessionnaire: :x:', true)
    
      .setImage('')
      .setTimestamp("here")
     
    .setFooter(`🔵 Cordialement le staff d'exonia`);

     

      bot.on('message', message => {
        if (message.content === 'ev') {
          message.channel.setName("Events") 
        }
      })

 

  
      bot . on ( "ready" ,  ( )  =>  {   
        bot. user . setActivity ( {
          "details": "",
          "state": "",
          "name": "Twitch",
          "type": 1,
          "url": "https://www.youtube.com/watch?v=hjhyP5FOFmI"
        })  
        });
  
   
 

bot.on('message', message => {
  if (message.content === "") {
    message.react('✅') 
  }})




 



  const Embedbv = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(':palm_tree:REGLEMENT DE EXONIA CITY:palm_tree:')
  .setURL('')
  .setAuthor("")
  .setDescription('')
  .setThumbnail("")
  .addFields(
    { name: ':no_entry: - Vous devez obligatoirement avoir un Nom + Prénom RP sur discord ainsi que sur steam, cela aidera le STAFF du serveur pour administrer le serveur pour que tout le monde prenne du plaisir à jouer sur notre serveur.', value: "-Et il strictement interdit de prendre des infos HRP en RP" },
    { name: '\u200B', value: '\u200B' },
    { name: ':no_entry: - Les propos insultants, raciste, homophobe etc son STRICTEMENT INTERDIT', value: "-Il est interdit d'utiliser des logiciels de de triche comme des modes menu etc", inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: ":no_entry: - Interdiction de Mp un Fondateur pour toute demande de recrutement ", value: "-appelez un responsable ou autre le staff est la pour sa." },
    { name: '\u200B', value: '\u200B' },
    { name: ":no_entry: - Si vous voulez rapporter un problème y'a le channel Report qui est la pour sa et le staff s'occupera de le faire remonter au fondateur ", value: "-Passer du bon temps sur Exonia" },
    )
    
  
 

  .setImage('')
  .setTimestamp("here")
 

.setFooter("🔵 Cordialement le staff d'exonia");

bot.on('message', message => {
  if (message.content === 'bj') {
    message.channel.send(Embedbv) 
  }
})








prefix = ('!')
bot.on('message', message => {
if (message.content.startsWith(`${prefix}ping`)) {
  message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
          .setTitle("Pong!")
          .setDescription(
              `🏓 Pong!\n La Latence est de  ${Math.floor(
                msg.createdTimestamp - message.createdTimestamp
              )}ms\nAPI La latence et de ${Math.round(bot.ws.ping)}ms`
          )
          .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
  })
}})











const has= (a,b)=> {
  for(let c in a) {
      if(b.includes(a[c])) return c;
  } return false;
};
let anotherbad=  ['connard', 'salope', 'sale chien', 'con']
bot.on('message', (message)=> {
  if(message.author.bot) { //on ignore les bots
      return false;
  } else {
      let badWords= ['pute', 'ta mere', 'fdp' ],

      isBad= has(badWords, message.content.toLowerCase());
      if(isBad) {
          message.delete();
          message.channel.send("**@&#$%!**");
  
          message.author.send(`Le mot ou la phrase que vous venez d'entrez est interdit!.
 Si vous pensez que c'est une erreur signale le a un staff`);
      }
  }
});



bot.on('message', message => {

  if (message.content === "pute") {
message.delete({ timeout: 0 })
  .then(msg => console.log(`message supprime de pedro ${msg.author.username} apres 1 seconde`))
  .catch(console.error)}});


 
  bot.on('message', message => {
    if (message.content === 'Pedro_cv') {
      message.channel.send(`[@everyone]

      Bonjour,Bonsoir à tous 
      
      
      Voici comment faire un Exemple CV quand un grade[Ex: Mécano] ne sont pas pris.
      
      Après les nouveaux Boss/PDG des Gangsters/Emplois, peuvent définir leur propre exemple de CV, dans leur Chanel Respectifs.
      
      Exemple CV
      
      ------------------
      
      Prénom : 
      
      Nom :
      
      Âge : 
      
      Nationalité : 
      
      Famille en ville :
      
      ------------------
      
      Expérience, si oui quel poste :
      
      Qualité :
      
      Défaut :
      
      Motivation (au moins 2 ligne) :
      
      Point fort :
      
      Problème judiciaire :
      
      Permis de conduire :
      
      Permis port d'arme :
      
      Horaires :
      
      ------------------
      
      Adresse E-Mail pour vous recontacter, exemple : @discord.gg
      
      Numéro de téléphone (pas obligé) :
      
      Signature :
      
      Merci de votre compréhension 
      
      Le Staff d'Exonia City`) 
    }
  })



  bot.on('message', message => {
    if (message.content === 'Pedro_Donateur') {
      message.channel.send(`[@everyone]

      Bonjour,Bonsoir tous
      
      Pour aider à financer le Serveur, Vous pouvez faire un Don, Pour que l'on puisse payer les Machines.Cela n'est pas Obligé mais pour les Personnes qui nous aideront, vous aurez des cosmétiques qui vous seront ajoutés en jeux [Pas d'armes/Jobs{sauf Pour créer un Gang Cartel }].
      
      Merci de me mp si vous voulez effectuer un achat, je repete que cela n'est pas obligatoire :)
      
      Merci de Votre Compréhension
      
      Le Staff d'ExoniaCity
      https://akyjojox.wixsite.com/website-1`)}})


      bot.on("messageReactionAdd", (reaction, user) => {
        if(!user || user.bot || !reaction.message.channel.guild) {
          return;
        }
        const msg = reaction.message;
        const role = msg.channel.guild.roles.cache.find(role => role.name == "citoyen");
      reaction.message.guild.member(user).roles.add(role);
      });


 
    
  
      bot.on('message', message => {
        if (message.content === 'Pedro_reglements') {
          message.channel.send(Embedbv) 
        }
      })
