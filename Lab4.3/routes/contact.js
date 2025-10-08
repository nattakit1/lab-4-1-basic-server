const express = require('express');
const router = express.Router();
const { appendToJsonFile, readJsonFile } = require('../middleware/fileManager');
const { validateContact } = require('../middleware/validation');

// POST /api/contact
router.post('/', validateContact, async (req, res) => {
    const data = req.body;
    const saved = await appendToJsonFile('contacts.json', data);
    res.json({ success: true, message: 'Contact saved', data: saved });
});

// GET /api/contact?page=1&limit=10
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const contacts = await readJsonFile('contacts.json');
    const start = (page - 1) * limit;
    const paginated = contacts.slice(start, start + limit);
    res.json({ success: true, total: contacts.length, page, limit, data: paginated });
});

module.exports = router;
