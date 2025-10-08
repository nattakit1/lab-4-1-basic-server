const express = require('express');
const cors = require('cors');
const path = require('path');

// import foodRoutes และ logger
const foodRoutes = require('./routes/foods');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🍜 Welcome to Food API!',
        version: '1.0.0',
        endpoints: {
            foods: '/api/foods',
            search: '/api/foods?search=ผัด',
            category: '/api/foods?category=แกง',
            spicy: '/api/foods?maxSpicy=3',
            vegetarian: '/api/foods?vegetarian=true',
            documentation: '/api/docs'
        }
    });
});

app.use('/api/foods', foodRoutes);

// GET /api/docs
app.get('/api/docs', (req, res) => {
    res.json({
        success: true,
        message: 'Food API Documentation',
        endpoints: {
            '/api/foods': 'GET all foods, support filtering with query parameters',
            '/api/foods/:id': 'GET food by ID',
            '/api/foods/category/:category': 'GET foods by category',
            '/api/foods/random': 'GET random food',
            '/api/docs': 'GET API documentation',
            '/api/stats': 'GET statistics'
        },
        queryParameters: ['search', 'category', 'maxSpicy', 'vegetarian', 'available', 'maxPrice']
    });
});

// GET /api/stats
app.get('/api/stats', (req, res) => {
    const foods = require('./data/foods.json');
    const total = foods.length;
    const categories = {};
    foods.forEach(f => {
        categories[f.category] = (categories[f.category] || 0) + 1;
    });
    const available = foods.filter(f => f.available).length;
    res.json({
        success: true,
        totalFoods: total,
        categories,
        availableFoods: available
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        requestedUrl: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Food API Server running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});
