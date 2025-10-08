const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const FOODS_FILE = path.join(__dirname, '../data/foods.json');

const loadFoods = () => {
    try {
        const data = fs.readFileSync(FOODS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading foods:', error);
        return [];
    }
};

// GET /api/foods
router.get('/', (req, res) => {
    try {
        let foods = loadFoods();
        const { search, category, maxSpicy, vegetarian, available, maxPrice } = req.query;

        // Filtering
        if (search) {
            const lower = search.toLowerCase();
            foods = foods.filter(f =>
                f.name.toLowerCase().includes(lower) ||
                f.description.toLowerCase().includes(lower)
            );
        }
        if (category) {
            foods = foods.filter(f => f.category === category);
        }
        if (maxSpicy) {
            const max = parseInt(maxSpicy);
            foods = foods.filter(f => f.spicyLevel <= max);
        }
        if (vegetarian) {
            const veg = vegetarian === 'true';
            foods = foods.filter(f => f.vegetarian === veg);
        }
        if (available) {
            const avail = available === 'true';
            foods = foods.filter(f => f.available === avail);
        }
        if (maxPrice) {
            const price = parseFloat(maxPrice);
            foods = foods.filter(f => f.price <= price);
        }

        res.json({
            success: true,
            data: foods,
            total: foods.length,
            filters: {
                search: search || null,
                category: category || null,
                maxSpicy: maxSpicy || null,
                vegetarian: vegetarian || null,
                available: available || null,
                maxPrice: maxPrice || null
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching foods' });
    }
});

// GET /api/foods/:id
router.get('/:id', (req, res) => {
    const foods = loadFoods();
    const id = parseInt(req.params.id);
    const food = foods.find(f => f.id === id);
    if (food) {
        res.json({ success: true, data: food });
    } else {
        res.status(404).json({ success: false, message: 'Food not found' });
    }
});

// GET /api/foods/category/:category
router.get('/category/:category', (req, res) => {
    const foods = loadFoods();
    const category = req.params.category;
    const filtered = foods.filter(f => f.category === category);
    res.json({ success: true, data: filtered, total: filtered.length });
});

// GET /api/foods/random
router.get('/random', (req, res) => {
    const foods = loadFoods();
    if (foods.length === 0) return res.status(404).json({ success: false, message: 'No foods available' });
    const randomIndex = Math.floor(Math.random() * foods.length);
    res.json({ success: true, data: foods[randomIndex] });
});

module.exports = router;
