const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix


  exports.run = async(client, message, args) => {
 let yardım = new Discord.MessageEmbed()
            .setColor("BLUE") //RANDOM yazarak rastgele renk olarak ayarlayabilirsiniz
 .setTitle("Yardım menüsü")
 .setDescription("Prefix = !")
.addField("Eğlence komutları", "Düello-ascii-alevyazı-altın-yazı")
 .addField("Genel", "avatar")
 .addField("Moderasyon", "ban-kick")
 .addField("Gif ve foto komutları", "Maske-gol")
 .setFooter("Sunucunu daha iyi yap!")
 message.channel.send(yardım)
 };
exports.conf = {
    aliases: ['y', 'yardım', 'help'],
    permLevel: 0
};

exports.help = {
    name: "yardım",
    description: "Yardım menüsüne bakarsınız"
};
