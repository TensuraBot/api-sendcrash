//api by Aorta
const sendcrash = require('../sendcrashService');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed please contact H4N for more details.' });
    }

    const { target, ptcp } = req.body;

    if (!target) {
        return res.status(400).json({ error: 'Target is required' });
    }

    try {
        console.log(`Request received at /sendcrash endpoint with target: ${target}`);
        await sendcrash(target, ptcp);
        res.status(200).json({ message: 'Successfully sent crash - H4N' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
};
