let handler = async (m, { conn, text }) => {
    let jidny = "201020182886@newsletter";
    if (!m.quoted) return m.reply("Reply to an audio message, kocak");

    let [title, customJidny] = text.split('|').map(v => v.trim());

    if (!title) return m.reply("Where's the music title?");
    if (customJidny) jidny = customJidny;

    try {
        await conn.sendMessage(jidny, {
            audio: await m.quoted.download(),
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: {
                forwardingScore: 2001,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: jidny,
                    serverMessageId: 2001,
                    newsletterName: "SNIPER BOT | By Ahmed AbdelFattah 🔛"
                },
                externalAdReply: {
                    title: title,
                    body: null,
                    thumbnailUrl: "https://www2.0zz0.com/2025/01/29/22/218411100.png",
                    sourceUrl: "https://instagram.com/_bcqf",
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: false
                }
            }
        });
        const data = `
{ 
    status: 200,
    success: true,
    dev: "Nour",
    jid: "${jidny}"
}`;
        m.reply("Succefully");
    } catch (e) {
        m.reply("You're not an admin in the channel, or check the ID again");
    }
}

handler.help = ['up_mp3o']
handler.tags = ['owner']
handler.command = /^(up_mp3o|upcho)$/i
handler.owner = true
export default handler
