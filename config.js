const fs = require('fs')
const chalk = require('chalk')


var ownernum = ['0','94712448370']

//Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	devil: 'https://api-toxic-devil.herokuapp.com/api',
} 
 
global.APIKeys = {
	'https://zenzapis.xyz': '' }

   global.worktype = 'private'
   global.sudo = ['94712448370']
   global.owner = ['94712448370']
   global.packname = 'RATHI STICKERS ' 
   global.author = '📍 CHARITH SENANAYAKE 📍'
   global.linkbuttid1 = '💻 🇬​​​​​🇮​​​​​🇹​​​​​🇭​​​​​🇺​​​​​🇧​​​​ 💻​' 
   global.butturl1 = 'https://github.com/CharithPramodyaSenanayake'
   global.linkbuttid2 = '🪀 🇨​​​​​🇴​​​​​🇳​​​​​🇹​​​​​🇦​​​​​🇨​​​​​🇹​​​​​ 🇲​​​​​🇪​​​​ 🪀​'
   global.butturl2 = 'https://wa.me/94712448370?text=HI%20RATHI🤗'
   global.linktext = '🇻​​​​​🇮​​​​​🇸​​​​​🇮​​​​​🇹​​​​​ 🇲​​​​​🇾​​​​​ 🇼​​​​​🇪​​​​​🇧​​​​​'
   global.linkurl = 'https://charithpramodyasenanayake.github.io/'
   global.profileimage = 'https://i.ibb.co/5vScqb1/botRATHI.jpg'
   global.mainimgurl = 'https://i.ibb.co/5vScqb1/botRATHI.jpg'
   //menu
   global.mlinktxt1 = '🇷​​​​​🇦​​​​​🇹​​​​​🇭​​​​​🇮​​​​​ 🇨​​​​​🇭​​​​​🇦​​​​​🇹​​​​​🇿'
   global.mlinkurl1 = 'https://www.mediafire.com/file/5hdl7frlxokfh8i/Rathi_Chatz.apk/file'
   global.mlinktxt2 = null 
   global.mlinkurl2 = null
   global.mbuttxt1 = 'ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ'//rep 1
   global.mbutid1 = 'command'
   global.mbuttxt2 = null //rep 2
   global.mbutid2 = null
   global.mbuttxt3 = null//rep 3
   global.mbutid3 = null

//main
global.premium = [`${ownernum}`]
global.sessionName = 'session.rathi'
global.prefa = ['','!','.',',','📍','🍭',]
global.sp = '🍭'
global.devname = '𝙲𝙷𝙰𝚁𝙸𝚃𝙷 𝚂𝙴𝙽𝙰𝙽𝙰𝚈𝙰𝙺𝙴 (𝚁𝙰𝚃𝙷𝙸)'
global.devNum = ['94712448370']
global.greetings = 'Hey  👋🏻'
global.listicon = '📃' 
global.wm = '𝚁𝙰𝚃𝙷𝙸 𝙼𝙳 𝙱𝚘𝚝' 
global.botname = '𝚁𝙰𝚃𝙷𝙸 𝙼𝙳 𝙱𝚘𝚝'
global.icon = '📍' 
global.mail = 'charipramodyasenanayake@gmail.com'
global.youtube = 'https://youtube.com/c/alienalfa'
global.github = 'https://github.com/Alien-alfa/' 
global.insta = 'https://www.instagram.com/alienalfa/' 
global.linkname = '𝚁𝙰𝚃𝙷𝙸 𝙼𝙳'
global.mainfooter = '🇷​​​​​🇦​​​​​🇹​​​​​🇭​​​​​🇮​​​​​ 🇲​​​​​🇩​​​​​ 🇧​​​​​🇾​​​​​ 🇨​​​​​🇭​​​​​🇦​​​​​🇷​​​​​🇮​​​​​' 
global.herokuapi = '' 
global.herokuapp = '' 

//bools
global.welcomeactive =  true
global.alivemess = true
global.aliveimage = true
global.speedmode =  'active'
global.ownermess = 'ʜᴇʏ ᴛʜɪꜱ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ !!'
global.autoread = false 
global.anticall = false 


global.thumb = fs.readFileSync('./lib/lowdb/adapters/rathi.jpg')

global.mess = {
    success: 'ᴅᴏɴᴇ',
    errr: 'errᴏ',
    admin: 'ᴏɴʟʏ ᴀᴅᴍɪɴ',
    botAdmin: 'ɪ ᴡɪʟʟ ᴅᴏ ɪᴛ, ᴍᴀᴋᴇ ᴍᴇ ᴀɴ ᴀᴅᴍɪɴ!',
    owner: 'ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ!',
    group: 'ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ᴀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ!',
    private: 'ᴛʜɪꜱ ɪꜱ ᴀ ɢʀᴏᴜᴘ, ᴜꜱᴇ ɪᴛ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!',
    bot: '',
    wait: 'ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ...',
    endLimit: 'ʏᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀꜱ ᴇxᴘɪʀᴇᴅ, ᴛʜᴇ ʟɪᴍɪᴛ ᴡɪʟʟ ʙᴇ ʀᴇꜱᴇᴛ ᴇᴠᴇʀʏ 12 ʜᴏᴜʀꜱ',
    notext: 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
