exports.run = function(message, args) {
  var secrets = [
    "nigger",
    "cancer",
    "succ",
    "dg",
    "xd"
  ];

  try {
    if(!args[0] || args[0] == "help") {
      client.createMessage(message.channel.id, {embed: {
        color: 0xFFFF00,
        description: "Just some secret commands. If you think you know a secret check with this `)secrets [answer]`.",
        fields: [
          {
            name: '`??????`',
            value: "A derogatory term for an African American; was commonly used against slaves.",
            inline: true
          },
          {
            name: '`??????`',
            value: 'A word in the form of a noun often used to describe something that\'s terrible. e.g. : "KYS LITERALLY"',
            inline: true
          },
          {
            name: '`????`',
            value: 'http://i.imgur.com/Kub5vQW.jpg',
            inline: true
          },
          {
            name: '`??`',
            value: "A band, with such wonderful quotes, such as; `\"Responsibility's cool, but there's more things in life. Like getting your dick rode all fucking night.\"`",
            inline: true
          },
          {
            name: '`??`',
            value: "A terrible term / icon, constantly used in Minecraft fanbases and similar communities.",
            inline: true
          }
        ],
        footer: {
          text: "Reee, I'm triggered af, fam squad",
          icon_url: "https://i.imgur.com/B0GHYIU.png"
        }
      }});
    }

    if(args[0] == secrets[3]) {
      var rnd = [
        "IF YOU CAN'T SNATCH MY FETISH, I'LL FEDEX IT. NOTIFY ME IF YOU MISS IT, I'LL BE IN MY LIQUID.",
        "OH SHIT! I'M FEELING IT!",
        "http://i.imgur.com/ob9rsjk.jpg",
        "Got the DNA of gothic lemons",
        "Don't it feel good to drive a bus? People need to get picked up.",
        "I DON'T TALK TO THE HELP! (HELP!)",
        "Gonna make your water break in the Apple store",
        "I'M THE COAT HANGER IN YOUR MAN'S VAGINA! (COATHANGERINTHEMANSVAGINA)",
        "Birds... Fuck you."
      ]
      var rl = rnd[Math.floor(Math.random() * rnd.length)];
      message.channel.createMessage("Damn, bro, you found the secret command which is just retarded lyric quotes. Good job.").then((m) => {
        setTimeout(() => {
          m.edit(rl)
        }, 2500);
      });
    }

    if(args[0] == secrets[0]) {
      message.channel.createMessage("okay.").then(() => {
        client.getDMChannel(message.author.id).then(channel => {
          for(var i = 0; i <= 200; i++) {
            channel.createMessage({content: "nigger", tts: true});
          }
        });
      });
    }

    if(args[0] == secrets[2]) {
      message.channel.createMessage(`\`\`\`css\n>succs ${message.author.username}\`\`\``);
    }

    if(args[0] == secrets[1]) {
      var cancers = [
        "https://www.youtube.com/channel/UCdsE9y553KP7Z7MDXzM1sRg\nPraise be to god.",
        "http://i.imgur.com/5degH7X.png",
        "https://soundcloud.com/jahseh-onfroy/tracks\nplsno",
        "https://www.youtube.com/watch?v=2pSqndUZ18A\nDx rip"
        // John, give me some cancer types, you fucking whore
      ];
      var rc = cancers[Math.floor(Math.random() * cancers.length)];
      message.channel.createMessage(rc);
    }

    if(args[0] == secrets[4]) {
      message.channel.createMessage("http://www.mediafire.com/file/332e2del1jluw3f/reee-xd.zip");
    }
  } catch (e) {
    throw c.red(e.stack);
    message.channel.createMessage(`\`\`\`${e}\`\`\``);
  }
};

exports.info = {
  usage: ")secrets [args]",
  args: "[answer / none]",
  description: "Just some secret commands, y'know."
};
