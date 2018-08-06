const figlet = require('figlet');
const sql = require("sqlite");
const hastebin = require('hastebin-gen');
const giphy = require('giphy-api')();
const fs = require('fs');
const Canvas = require('canvas');
const jimp = require("jimp");
///////////////////////////////////////////////
const prefix = "!";
///////////////////////////////////////////////
const moment = require('moment');
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('-----------------')
  console.log(`${client.user.username} is online`);
  console.log('-----------------')
	

  console.log('----------------------------------------------');
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('----------------------------------------------')
});
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})
client.on('message', message => {
if (message.content === prefix +'help') {
	 message.channel.send('**[تم ارسال في الخاص** :mailbox_with_mail:**|Check Your DM]**');
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
	.setDescription (`
╭━━━╮╭╮╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┣╯╰╮╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰━━╋╮╭╋━━┳━┫╰╯╰┳━┻╮╭╯
╰━━╮┃┃┃┃╭╮┃╭┫╭━╮┃╭╮┃┃
┃╰━╯┃┃╰┫╭╮┃┃┃╰━╯┃╰╯┃╰╮
╰━━━╯╰━┻╯╰┻╯╰━━━┻━━┻━╯

-:alarm_clock: شغال24 ساعة
-:rocket: سرعه اتصال ممتازه
-:sunglasses: سهل الاستخدام 
-:warning: صيانه كل يوم
-:dollar: مجاني بل كامل 
-:books:البوت عربي بالكامل 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
      ** مبرمج البوت :wrench: **","**@= Magno.¹¹#8110 **
`)
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === prefix +'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
:globe_with_meridians:─══════ {✯الاوامر العامه✯} ══════─
『**${prefix}**id / (معلومات عن حسابك (يظهر بشكل صورة』
『**${prefix}**id2 / (معلومات عن حسابك (يظهر بشكل كتابي』
『**${prefix}**server / معلومات عن السيرفر』
『**${prefix}**user / لمعرفة متى دخلت الدسكورد والسيرفر』
『**${prefix}**ins / لمعرفة عدد الذين دعيتهم للسيرفر』
『**${prefix}**embed / يكرر كلامك بمبيد』
『**${prefix}**roles / يعرض لك الرتب و عددها』
『**${prefix}**animal / يعطيك صور حيوانات』
『**${prefix}**image / يعرض صوره السيرفر』
『**${prefix}**avatar / يعرض صورتك او صوره شخص』
『**${prefix}**dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
『**${prefix}**report / (للأبلاغ عن شخص ما(تحذير :يجب ان يكون الابلاغ مفعل』
『**${prefix}**tag / لزخرفة الكلمات او الجمل بشكل حلو』
『**${prefix}**tg2 / لزخرفة الكلمات او الجمل بشكل حلو شكل تاني』
『**${prefix}**contact / ارسال اقتراح او لمراسلة صاحب البوت』
『**${prefix}**discrim / لرؤية من معهم نفس تاقق』
『**${prefix}**perms / يعرض لك برمشناتك بالسيرفر』
『**${prefix}**skin / لعرض سكنك بماين كرافت』
『**${prefix}**gif / يعطيك صورة متحركة』
 :globe_with_meridians:─══════ {✯StarBot✯} ══════─
`)    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
🤩─══════ {✯اوامر خرافية✯} ══════─
『**${prefix}**profile / (لعرض بروفايلك (معلوماتك الشخصية』
『**${prefix}**daily / لاخذ كريدت كل يوم』
『**${prefix}**rep [user] / (لتقيم شخص ما(لاعطاء شخص +1 ريب』
『**${prefix}**title [anything] / لتغير الكتابة الموجودة بلبروفايل』
『**${prefix}**credit / لرؤية كم معاك كريدت』
『**${prefix}**trans [user] / لتحويل كريدت』
🤩─══════ {✯StarBot✯} ══════─
 `)  
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix +'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
⭐️─══════ {✯اوامر مميزة✯} ══════─
『**${prefix}**create-colors / لصناعة 50 لون』
『**${prefix}**delete-colors / لحذف كل الالوان』
『**${prefix}**colorslist / لعرض قائمة الالوان』
『**${prefix}**color [Number] / لتغير لونك』
⭐️─══════ {✯StarBot✯} ══════─
`)    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
🤖─══════ {✯اوامر البوت✯} ══════─
『**${prefix}**ping / يعرض لك سرعه اتصال البوت』
『**${prefix}**support / سيرفر الدعم القني و المساعده』
『**${prefix}**inv / اضافه البوت』
『**${prefix}**members / حاله الاعضاء』
『**${prefix}**stats / معلومات عن البوت و كم صار للبوت شغال』
『**${prefix}**info / لرؤية في كم سيرفر موجود البوت』
🤖─══════ {✯StarBot✯} ══════─
 `)  
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix +'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
🛠─══════ {✯اوامر خصوصية للمبرمجين✯} ══════─
『**${prefix}**code-js / أرسال البوت الاكواد بدل عنك』
『code-js / لتفعيل ارسال البوت الاكواد بدل عنك يجب عمل شات بأسم』
『**${prefix}**js / hastebin لرفع البوت الاكواد بدل عنك ع موقع』
🛠─══════ {✯StarBot✯} ══════─
`)    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
:radioactive:─══════ {✯الاوامر الادارية✯} ══════─
『**${prefix}**kick / كيك』
『**${prefix}**ban / باند』
『**${prefix}**unban / لفك الباند عن شخص』
『**${prefix}**mute / ميوت』
『**${prefix}**unmute / فك الميوت』
『**${prefix}**autorole / اعطاء رتبة تلقائية لكل من يدخل السيرفر』
『**${prefix}**bc / برودكاست بشكل مطور』
『**${prefix}**bc2 / برودكاست بلرياكشن』
『**${prefix}**clear / لمسح كل ما في الشات』
『**${prefix}**clr / لمسح الشات بلعدد الي بدك اياه』
『**${prefix}**warn / لتحذير الشخص اذا عمل شي غلط』
『**${prefix}**vb / (لتبنيد الشخص وعدم قدرته على دخول الروم الصوتي الذي انت فيه باختصار :(باند فويس』
『**${prefix}**unvb / لفك باند الفويس』
『**${prefix}**vk / (لطرد الشخص من الروم الصوتي الذي انت فيه باختصار :(كيك فويس』
『**${prefix}**antilinks / لفتح او غلق مانع الاعلانات』
『**${prefix}**linksinfo / لرؤية اذا كان مفتوح او مغلق مانع الاعلانات』
『**${prefix}**mc / لقفل الشات وعدم قدرة احد على الكتابة』
『**${prefix}**umc / لفتح الشات』
『**${prefix}**move all / لسحب جميع الأعضاء لرومك الصوتي』
『**${prefix}**hchannel / لاخفاء الشات』
『**${prefix}**schannel / لاظهار الشات』
『log / لتفعيل اللوق يجب عمل شات بأسم』
『report / لتفعيل البلاغ يجب عمل شات بأسم』
『warns / لتفعيل تحذير العضو يجب عمل شات بأسم』
『chat / لتفعيل الترحيب الكتابي يجب عمل شات بأسم』
『member-log / لتفعيل الترحيب دخول وخروج العضو يجب عمل شات بأسم』
:radioactive:─══════ {✯StarBot✯} ══════─
 `)   
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message => {
if (message.content === prefix + 'help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setDescription (`
🎮─══════ {✯اوامر الالعاب✯} ══════─
『**${prefix}**لعبة فكك / فكك』
『**${prefix}**لعبة تركيب الحروف / ركب』
『**${prefix}**لعبه رياضيات / رياضيات』
『**${prefix}**لعبه العواصم / عواصم』
『**${prefix}**لعبه التحدي / تحدي』
『**${prefix}**لعبه الغاز / لغز』
『**${prefix}**لمعرفة نقاطق / نقاطي』
--------------------------
『**${prefix}**لعبه صراحه / صراحه』
『**${prefix}**يعطيك شعر عن الحب / حب』
『**${prefix}**يخيرك بين شي وشي / لو خيروك』
『**${prefix}**يعطيك عقاب و لازم تنفذه / عقاب』
『**${prefix}**لعبه كت تويت / كت تويت』
『**${prefix}**لعبه خواطر / خواطر』
🎮─══════ {✯StarBot✯} ══════─
`)    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
client.on('message', message =>{
    if(message.content == prefix + "roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
  console.log('[roles] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix +'ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }
});
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
  console.log('[embed] Send By: ' + message.author.username)
    }


});    
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#fd0101')            
            .setTitle('❌ حذف الرتبة')
            .addField('اسم الرتبة', role.name, true)
            .addField('الرتبة ID', role.id, true)
            .addField('بواستطة', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('➕ انشاء رتبة')
            .addField('اسم الرتبة', role.name, true)
            .addField('الرتبة ID', role.id, true)
            .addField('بواستطة', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("تم التبنيد")
	    .setColor("BLACK")
        .setThumbnail(myUser.avatarURL)
        .addField('= العضو المبند:',`**${myUser.username}**`,true)
        .addField('= تم تبنيده بواستطة:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("ازالة الباند !")
		.setColor("BLACK")
		 .setThumbnail(myUser.avatarURL)
        .addField('= العضو المبند',`**${myUser.username}**`,true)
        .addField('= تم ازالة الباند بواستطة',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
client.on("message", message => {
if(message.content.startsWith(prefix + 'server')) {
if (!message.channel.guild) returnverificationLevel = message.guild.verificationLevel;
const verificationLevels = ["None","Low","Meduim","High","Extreme"];var Y1 = message.guild.createdAt.getFullYear() - 2000
var M2 = message.guild.createdAt.getMonth()
var D3 = message.guild.createdAt.getDate()
const xNiTRoZ = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setColor("#070000").setTimestamp()
.setTitle(message.guild.name,message.guild.iconURL)
.addField(":crown: اونر السيرفر",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField(":id: اي دي السيرفر",`${message.guild.id}`,true)
.addField("**:date: انشأ في**", message.guild.createdAt.toLocaleString(),true)
.addField(":busts_in_silhouette: الاعضاء " + ` ${message.guild.memberCount} `,"Online "+`[ ${message.guild.members.filter(m=>m.presence.status == "online","idle","dnd").size} ]`+ ","+"Offline "+`[ ${message.guild.members.filter(m=>m.presence.status == "offline").size} ]`,true)
.addField(":speech_balloon: قنوات" +" "+message.guild.channels.size+" ",`Text [ ${message.guild.channels.filter(m => m.type === "text").size} ]`+", "+`Voice [ ${message.guild.channels.filter(m => m.type === "voice").size} ]`,true)
.addField(":earth_asia: الدوله",message.guild.region)
.addField(":ribbon: ايموجي السيرفر",`${message.guild.emojis.size}`,true).addField(":construction: مستوى التحقق",`${verificationLevels[message.guild.verificationLevel]}`,true).addField("🏆 الرتب  "+message.guild.roles.size+" ","Type`=roles` To See The Server Roles!")
 message.channel.send({embed:xNiTRoZ});
  console.log('[server] Send By: ' + message.author.username)
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted 🌟``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
      if (message.author.omar) return;
      if (!message.content.startsWith(prefix)) return;
      var command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
      var args = message.content.split(" ").slice(1);
      if (command == "kick") {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      var user = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
      const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({embed : kickembed})
      user.send(reason).then(()=>{
    message.guild.member(user).kick();
  console.log('[kick] Send By: ' + message.author.username)
      })
    }
    });
client.on('message', message => {
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  console.log('[ban] Send By: ' + message.author.username)
  })
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix +"avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
	  console.log('[avatar] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "「التاريخ  والوقت」")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "「"+ hours + ":" + minutes +":"+ seconds + "」")
                 .addField('مكه المكرمه',
                "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                .addField('مصر',
                "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                
                .addField('Date',
                "「"+ Day + "-" + Month + "-" + Year +  "」")

                 message.channel.sendEmbed(Date15);
		   console.log('[dt] Send By: ' + message.author.username)
        }
    });
 
client.on('message', message => {
   if (message.content === prefix + "roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
	     console.log('[roll] Send By: ' + message.author.username)
    }
});
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix +'mute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
	    console.log('[mute] Send By: ' + eyad.author.username)
    }
})
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix +'unmute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
	    console.log('[unmute] Send By: ' + eyad.author.username)
    }
})
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("StarBot 🌟")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
client.on('ready', () => {
  console.log('By Magno Enjoy');
});
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
   client.on('message', message => {
       var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'لو خيروك')) {
        var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
.setColor ("BLACK")
message.channel.sendEmbed(cat);
	     console.log('[لو خيروك] Send By: ' + message.author.username)
   }
});
   client.on('message', message => {
   if (message.content.startsWith(prefix +"صراحة")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
	     console.log('[صراحة] Send By: ' + message.author.username)
 }
});
const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
 client.on('message', message => {
   if (message.content.startsWith(prefix +"عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('StarBot 🌟' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[عقاب] Send By: ' + message.author.username)
    }
});
const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]
const developers = ["331975722283302912"]
const adminprefix = "=";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 client.on('message', message => {
   if (message.content.startsWith(prefix +"كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[كت تويت] Send By: ' + message.author.username)
    }
});
 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 client.on('message', message => {
   if (message.content.startsWith(prefix +"حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('StarBot 🌟' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[حب] Send By: ' + message.author.username)
    }
});
const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]
  client.on('message', message => {
     if (message.content === prefix + "support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/ttfWjtX**")
     
     
  message.channel.sendEmbed(embed);
    console.log('[support] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "inv")) {        
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
	    
      message.author.sendEmbed(embed);
	      console.log('[inv] Send By: ' + message.author.username)
    }
 
});
 client.on('message' , message => {

    if (message.content.startsWith(prefix + "inv")) {  
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription("Add me" + `
 **
رابط البوت | https://discordapp.com/oauth2/authorize?client_id=461855916212486144&scope=bot&permissions=2146958463
 **
`);
  message.author.sendEmbed(embed);
	      console.log('[inv] Send By: ' + message.author.username)
   }
});
client.on('message', message => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "=draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});
   client.on("message", message => {
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
	        console.log('[image] Send By: ' + message.author.username)
      }
  });
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg","http://www.photobua.com/images/blogphoto/k0APut9rT2l8Q9wypY76S653706979.jpg","https://www.animals-wd.com/wp-content/uploads/2017/11/chihuahua-dog-puppy-cute-39317.jpeg","https://www.animals-wd.com/wp-content/uploads/2017/11/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg","http://www.photobua.com/images/blogphoto/BMs3g1djwMUsrrmyWIdL147840258.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
	      console.log('[animal] Send By: ' + message.author.username)
    }
});
  client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 🌟
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
💡 bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
client.on("message",function(message) {
    if(message.content.startsWith(prefix + "stats")) {
           let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("= | StarBot |") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("StarBot 🌟")
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
	      console.log('[stats] Send By: ' + message.author.username)
    }
});
sql.open("./score.sqlite");


client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply(`Your current level is ${row.level}`);
      message.reply(`Your current level is ${row.level}`);
	      console.log('[level] Send By: ' + message.author.username)
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
	      console.log('[points] Send By: ' + message.author.username)
    });
  }
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  
    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
	      console.log('[tag] Send By: ' + message.author.username)
           })
}
});
client.on('message', message => {
    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
	     if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '1')) return
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '2')) return		 
      message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '3')) return		 
      message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
	}
});
	client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '4')) return		 
      message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '5')) return		 
      message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '6')) return
      message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '7')) return		 
      message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '8')) return		 
      message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
	}});	
client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '9')) return
      message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
}});	
client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '10')) return		 
      message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '11')) return		 
      message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '12')) return		 
      message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '13')) return
      message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
}});
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '14')) return
      message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
}});
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '15')) return
      message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
	}});
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '16')) return		 
      message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '17')) return		 
      message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '18')) return		 
      message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '19')) return		 
      message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '20')) return
      message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '21')) return		 
      message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
	}});	

client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '22')) return		 
      message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '23')) return		 
      message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '24')) return		 
      message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '25')) return		 
      message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
	}});	

	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '26')) return		 
      message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
	}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '27')) return		 
      message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '28')) return		 
      message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
		}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '29')) return		 
      message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '30')) return		 
      message.guild.createRole({
                  name: "30",
                    color: "#ffd400",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '31')) return		 
      message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '32')) return		 
      message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '33')) return		 
      message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '34')) return		 
      message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return      
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '35')) return		 
      message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '36')) return		 
      message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
		          if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '37')) return
      message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '38')) return		 
      message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '39')) return		 
      message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '40')) return		 
      message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return     
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '41')) return		 
      message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return    
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '42')) return		 
      message.guild.createRole({
                  name: "42",
                    color: "#6700ff",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '43')) return		 
      message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '44')) return		 
      message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '45')) return		 
      message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return   
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '46')) return		 
      message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '47')) return		 
      message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return 
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '48')) return		 
      message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return 
         if(message.guild.roles.find('name', '49')) return		 
      message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'create-colors') {
                         if(!message.channel.guild) return   
         if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send(`**:x: | ${message.author.username}  You Must Have The \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES'))return message.channel.send(`**:x: | ${message.author.username}  I require the \`MANAGE_ROLES\` permission to create colors roles !**`)
         if(message.guild.roles.find('name', '50')) return  message.channel.send('**لا يمكن انشاء رتب الالوان مرتين | Colors roles can not be created twice **');		 
      message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
		
				
	           message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('GREEN')
	 .setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Creating Colors Just Wait | جاري العمل على الالوان``')
	 });
				
	
	}});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return  message.channel.send('**You Dont Have** `MANAGE_ROLES` **premission**').then(msg => msg.delete(6000))
		let role = message.guild.roles.find('name', '1');
		let rank = message.guild.roles.find('name', '1');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return 
		let role = message.guild.roles.find('name', '2');
		let rank = message.guild.roles.find('name', '2');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '3');
		let rank = message.guild.roles.find('name', '3');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '4');
		let rank = message.guild.roles.find('name', '4');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '5');
		let rank = message.guild.roles.find('name', '5');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '6');
		let rank = message.guild.roles.find('name', '6');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '7');
		let rank = message.guild.roles.find('name', '7');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '8');
		let rank = message.guild.roles.find('name', '8');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '9');
		let rank = message.guild.roles.find('name', '9');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '10');
		let rank = message.guild.roles.find('name', '10');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '11');
		let rank = message.guild.roles.find('name', '11');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '12');
		let rank = message.guild.roles.find('name', '12');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '13');
		let rank = message.guild.roles.find('name', '13');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '14');
		let rank = message.guild.roles.find('name', '14');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '15');
		let rank = message.guild.roles.find('name', '15');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '16');
		let rank = message.guild.roles.find('name', '16');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '17');
		let rank = message.guild.roles.find('name', '17');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '18');
		let rank = message.guild.roles.find('name', '18');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '19');
		let rank = message.guild.roles.find('name', '19');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '20');
		let rank = message.guild.roles.find('name', '20');
    if (!rank) return  
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '21');
		let rank = message.guild.roles.find('name', '21');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '22');
		let rank = message.guild.roles.find('name', '22');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '23');
		let rank = message.guild.roles.find('name', '23');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '24');
		let rank = message.guild.roles.find('name', '24');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '25');
		let rank = message.guild.roles.find('name', '25');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '26');
		let rank = message.guild.roles.find('name', '26');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '27');
		let rank = message.guild.roles.find('name', '27');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '28');
		let rank = message.guild.roles.find('name', '28');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '29');
		let rank = message.guild.roles.find('name', '29');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '30');
		let rank = message.guild.roles.find('name', '30');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '31');
		let rank = message.guild.roles.find('name', '31');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '32');
		let rank = message.guild.roles.find('name', '32');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '33');
		let rank = message.guild.roles.find('name', '33');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '34');
		let rank = message.guild.roles.find('name', '34');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '35');
		let rank = message.guild.roles.find('name', '35');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '36');
		let rank = message.guild.roles.find('name', '36');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '37');
		let rank = message.guild.roles.find('name', '37');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '38');
		let rank = message.guild.roles.find('name', '38');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '39');
		let rank = message.guild.roles.find('name', '39');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '40');
		let rank = message.guild.roles.find('name', '40');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '41');
		let rank = message.guild.roles.find('name', '41');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '42');
		let rank = message.guild.roles.find('name', '42');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '43');
		let rank = message.guild.roles.find('name', '43');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '44');
		let rank = message.guild.roles.find('name', '44');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '45');
		let rank = message.guild.roles.find('name', '45');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '46');
		let rank = message.guild.roles.find('name', '46');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '47');
		let rank = message.guild.roles.find('name', '47');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '48');
		let rank = message.guild.roles.find('name', '48');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '49');
		let rank = message.guild.roles.find('name', '49');
    if (!rank) return  
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith(prefix +"delete-colors")) {
	if(!message.channel.guild) return
		if(!message.member.hasPermission('MANAGE_ROLES')) return
		let role = message.guild.roles.find('name', '50');
		let rank = message.guild.roles.find('name', '50');
    if (!rank) return  message.channel.send('**I did not find colors roles | لم اجد رتب الالوان**');
		role.delete()
		
			message.channel.sendMessage({embed: new Discord.RichEmbed()
          .setColor('RED').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``I Deleting Colors Just Wait | جـاري حدف رتـب الالـوان``')});
	}
	});
   client.on('message',message => {
  if (message.content === prefix +'colorslist') {
if(!message.channel.guild) return
		if(!message.member.hasPermission('ATTACH_FILES')) return
		let role = message.guild.roles.find('name', '1');
		let rank = message.guild.roles.find('name', '1');
    if (!rank) return  message.channel.send('**الرجاء صنع الوان`**لا يوجد الوان بهاذا السيرفر`');
	  message.channel.sendFile('./star-colors.png');
  }
	
});
let ar = JSON.parse(fs.readFileSync(`./AutoRole.json`, `utf8`))

client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Visitors'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var whitelisted = "331975722283302912"// ايديك
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Visitors'
  }

if(message.content.startsWith(prefix + `autorole`)) {
         if(whitelisted.includes(sender.id)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/set [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   } 
         }
  }  
 
if(message.content === prefix + 'autoinfo') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


})

client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "user")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("StarBot 🌟")  
    message.channel.sendEmbed(id);
console.log('[user] Send By: ' + message.author.username)
})
}       
});
client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
console.log('[move all] Send By: ' + message.author.username)

 }
   });
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix +'vb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن شخص `');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائه باند فويس بنجاح
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه باند فويس بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
	  console.log('[vb] Send By: ' + eyad.author.username)
  }
});
client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●تم فك الباند** !')
        .addField('**●تم فك الباند عن :** ', `${user}` , true)
        .addField('**●بواسطة :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
	    console.log('[unban] Send By: ' + message.author.username)
    }
});
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix +'unvb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن شخص `');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: true
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم فك بان الفويس عنه بنجاح
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم فك بان فويس عنه بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
	  console.log('[unvb] Send By: ' + eyad.author.username)
  }
});
client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id2')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  console.log('[id] Send By: ' + message.author.username)
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}
});
const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "tg2")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  console.log('[tg2] Send By: ' + message.author.username)
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
client.on('message', message => {
if (message.content === prefix + "mc") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('`**❎| `[MANAGE_MESSAGES]` لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
		   
           }).then(() => {
               message.reply("تم قفل الشات :white_check_mark: ")
		   console.log('[mc] Send By: ' + message.author.username)
           });
}
  if (message.content === prefix + "umc") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('`**❎| `[MANAGE_MESSAGES]` لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات :white_check_mark: ")
		   console.log('[umc] Send By: ' + message.author.username)
           });
}


});
client.on('message',async message => {
    if(message.content.startsWith(prefix + "code-js")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('`**❎| `[ADMINISTRATOR]` لا يوجد لديك صلاحية**');
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
    let jscodes = message.guild.channels.find(`name`, "code-js");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**StarBot © :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});
  client.on('message', message => {
   if(message.content.startsWith(prefix + "ins")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`= Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == prefix + 'نقاطي'){
         let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,'By : Rando³².🇵🇸#6966',   true)
        .setColor('RANDOM')
        .setFooter('StarBot-Games', client.user.avatarURL);
	message.channel.send({embed});
	    console.log('[نقاطي] Send By: ' + message.author.username)
    };
    if (message.content == prefix + "فكك") {    
        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];
        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
		console.log('[فكك] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
        if (message.content == prefix + "ركب") {    
        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];
        var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
		console.log('[ركب] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
       if (message.content == prefix + "رياضيات") {    
        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44,5+44,5'];
        var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
		console.log('[رياضيات] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
 if (message.content == prefix + "عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1, 
                time : 15000, 
                errors : ['time'] 
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
		console.log('[عواصم] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == prefix + "لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
		console.log('[لغز] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == prefix + "تحدي") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`عدل الكلمة  الآتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
		console.log('[تحدي] Send By: ' + message.author.username)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    });
});
      client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + 'report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
	      console.log('[report] Send By: ' + message.author.username)
      }
      });
client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc2')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**هذة الأمر للأدارة فقط**').then(m => m.delete(5000));
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "StarBot 🌟";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
//سوي ملف اسمه profile.json وحط فيه {}
//حمل الصورة من البوست حقي او من الرابط https://prnt.sc/k0vytj


let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'StarBot User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 50,
  };
 
 
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on('message', (message , rep) => {
 
    if(message.content.startsWith(prefix + 'rep')) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 50,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 250
     message.channel.send(`**${message.author.username} you collect your \`250\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 300;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });
 
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "StarBot User"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
  if(!message.channel.guild) return message.reply('** __This command only for servers:no_entry:__  **');
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 50, level: 1,tite: " ", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./star.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px Cairo'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px Cairo'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Cairo" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Cairo" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 27px Cairo" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Cairo" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Cairo" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 26px  Cairo";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,117)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 116, 82, 72, 72);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});
client.on("message", message => {
    const command = message.content.split(" ")[0];

if (message.content.startsWith(prefix + "vk")) {

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('`MOVE_MEMBERS`ليس لديك خاصية');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("منشن الي بدك تطرده")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
 message.reply('لقد تم طرده من الروم الصوتي بنجاح');
    
      });
     });
    }
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("331975722283302912").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Magno")
                                                

message.channel.send(embed);


}
    
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done')
 }
});
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
 
client.on('guildMemberRemove', (u) => {
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == "MEMBER_KICK") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = { 
            time : 1
          };
      } else { 
          data[ss.executor.id].time+=1
      }; 
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : [] 
                });
                data[ss.executor.id].time = 0
            }); 
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) { 
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('roleDelete', (u) => { 
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == "ROLE_DELETE") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                }); 
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('channelDelete', (u) => {
    u.guild.fetchAuditLogs().then( s => { 
        var ss = s.entries.first();
        if (ss.action == "CHANNEL_DELETE") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1 
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                });
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('guildBanAdd', (g , u) => {
    g.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == `MEMBER_BAN_ADD`) {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
        if (data[ss.executor.id].time >= 3) {
            g.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({ 
                    permissions : []
                });  
            }); 
        }
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {  
                data[ss.executor.id].time = 0
            } 
        },60000)
    }; 
    });     
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{   
        if (err) console.log(err.message);  
    });    
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
client.on('message',function(message) {
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);
}
});
client.on("message", message => {
        if (message.content === prefix +"setprefix") {
        if (message.author.id !== "331975722283302912" && !message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`U don't have permission to do that`);
  let args = message.content.split(" ").slice(1);
        let arg = args.join("").substring(message.length)
        if (!arg) return message.channel.send(`Please add a prefix after command like \`\`${prefix}setprefix &\`\``);
        fs.database().ref('servers/' + message.guild.id).update({
            guildname: message.guild.name,
            guildprefix: arg
        }).catch(function(err) {
            message.channel.send(err + "\n\n\n");
        });
        message.channel.send(`prefix updated ${arg} for ${message.guild.name}`);
    }
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on("message", message => { 
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم سكنك . **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
client.on('message', message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'js')) {
let code = args.join(" ")
hastebin(code, "js").then(r => {
    message.channel.send(r);
}).catch(console.error);
}});
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

    client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});
client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("اهلا وسهلا فيك ومرحبتين منور  ")
        .setTimestamp()
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("خرج عضو انشالله يكون استمتع معنا ")
        .setTimestamp()
});
      client.on('message', msg => { 
        if (msg.content.startsWith(prefix + "warn")) {
          if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
           let args = msg.content.split(" ").slice(1);
          if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
          if (!args[1]) return msg.reply('اكتب السبب')
          //غير اسم الروم او سوي روم بذا الاسم 
          if (msg.guild.channels.find('name', 'warns')) {
            //اذا غيرت فوق غير هنا كمان 
            msg.guild.channels.find('name', 'warns').send(`
          تم اعطائك تنبيه : ${msg.mentions.members.first()}
          لأنك قمت بما يلي
          ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
          `)
          }
        }
})
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == prefix + 'color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
let al = JSON.parse(fs.readFileSync(`./antilinks.json`, `utf8`));



client.on('message', message => {
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;

    if (!al[message.guild.id]) al[message.guild.id] = {
        onoff: 'Off'
    }

    if (message.content === prefix + 'linksinfo') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(`You don't have permissions: Manage Guild.`)
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}'s Config`)


            .addField(`Antilinks : `, `Antilinks State : ${al[message.guild.id].onoff}`)

            .setColor(`BLUE`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + 'antilinks') {
        let perms = message.member.hasPermission(`MANAGE_GUILD`)
        if (!perms) return message.reply(`You don't have permissions, required permission : Manage Server.`)
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (al[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Antlinks event has been toggled to On!**`), al[message.guild.id].onoff = 'On']
            if (al[message.guild.id].onoff === 'On') return [message.channel.send(`**The Antilinks event has been toggled to Off!**`), al[message.guild.id].onoff = 'Off'] //:D

        }
    }
    if (message.content.includes('https://','discord.gg')) {
        if (al[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
        return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
    }
   
    fs.writeFile("./antilinks.json", JSON.stringify(al), (err) => {
        if (err) console.error(err)
    });
});
client.on('message', message => {
    if(message.content == (prefix + 'id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png', './ID2.png', './ID3.png', './ID4.png', './ID5.png', './ID6.png', './ID7.png', './ID8.png', './ID9.png', './ID10.png', './ID11.png', './ID12.png', './ID13.png',];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 320, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('en-us');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Don't Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == prefix +'bc') {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
         message.react("✔️")
   let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('● Message', args)
            m.send(``,{embed: bc});
		console.log('[bc] Send By: ' + message.author.username)
        });
    }
})
client.on('message', message => {
if (message.content.startsWith(prefix + "info")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
console.log('[info] Send By: ' + message.author.username)
    }
});
const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith(prefix +"خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('StarBot 🌟' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[خواطر] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix +'all')){
 if(!message.author.id === '331975722283302912') return;
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on("ready", function() {
	console.log("ready");
	
	client.user.setStatus("dnd");
	client.user.setGame("To Get Help | !help");
});
client.login(process.env.BOT_TOKEN);
