const express = require('express');
const router = express.Router();
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');
const { validateFeedback } = require('../middleware/validation');

// POST /api/feedback
router.post('/', validateFeedback, async (req, res) => {
    const data = req.body;
    const saved = await appendToJsonFile('feedback.json', data);
    res.json({ success: true, message: 'Feedback saved', data: saved });
});

// GET /api/feedback/stats
router.get('/stats', async (req, res) => {
    const feedback = await readJsonFile('feedback.json');
    const total = feedback.length;
    const avgRating = feedback.reduce((sum, f) => sum + f.rating, 0) / (total || 1);
    res.json({ success: true, total, avgRating: avgRating.toFixed(2) });
});

module.exports = router;
