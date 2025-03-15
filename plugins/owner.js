import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*\n\n
*Whatsapp channel:*\n https://wa.me/201020182886\n
*instagram:*\ninstagram.com/_bcqf

*Telegram:*\nhttps://t.me/Eg_iahmed

*facebook:*\nwww.facebook.com/share/1CskdXadPN/


`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
