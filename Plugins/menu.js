let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, text }) => {
let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let nani ='https://ibb.co/VBsnXg8'
let content = conn.send2Button(m.chat, `Hallo user!

_*Info:*_ *Der bot hat jetzt komplettes antiporn!*
*Antiporn ist in antilink drin dabei!*

*Hofft nicht nach Script!*

Hier sind alle Menüs vorhanden!

➤!Main
➤!Info
➤!Game
➤!Stickermaker
➤!Admin
➤!Animemenu
➤!Internet 
➤!Logo
➤!Downloader
➤!Tools
➤!Fun
➤!Audio
➤!Maker 
➤!Videomaker
➤!Database
➤!Voting
➤!Absent
➤!Host`,'Trust', ` !gruppen` , '!gruppen', '!owner', `!owner`, `.qowner`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.help = ['help/menu/?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
} 
