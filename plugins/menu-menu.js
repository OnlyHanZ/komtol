import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let dom = `https://telegra.ph/file/a0f22d10039193337ca62.jpg`
 await conn.sendButton(m.chat, `*Hallo👋🏻* ini cuma Opening Menu baca dulu ketentuan dibawah ya\n
*Peraturan SakuraBot*\n1. Jgn Spam Bot!!\n2. Beri jeda 5 detik kalo tidak ada respon\n3. Gunakan dengan *Bijak*\n4. Baca & Patuhi Rules nya ya biar aman\n5. Tekan tombol *Menu* dibawah ini untuk melihat smua menu`, wm + '\n' + botdate, dom, [['All Menu','/allmenu'],['List Menu','.menulist']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: ' ',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'MenuBOT',          previewType: 0,
                        thumbnail: fs.readFileSync("./media/rayy.jpg"),
                        sourceUrl: 'https://wa.me/62895627514070'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu']

export default handler