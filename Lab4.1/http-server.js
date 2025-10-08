const http = require('http');
const url = require('url');

const PORT = 3000;

// TODO: สร้างข้อมูลจำลอง students array
// ควรมี id, name, major, year อย่างน้อย 3 คน

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    // TODO: จัดการ route GET /
    // ส่งข้อความต้อนรับและรายการ endpoints ที่มี
    
    // TODO: จัดการ route GET /students
    // ส่งรายการนักศึกษาทั้งหมด
    
    // TODO: จัดการ route GET /students/:id
    // ส่งข้อมูลนักศึกษาตาม ID
    // ตัวอย่าง: /students/1
    
    // TODO: จัดการ route GET /students/major/:major
    // กรองนักศึกษาตามสาขา
    // ตัวอย่าง: /students/major/วิศวกรรม
    
    // TODO: จัดการกรณี 404 Not Found
    // ส่ง status 404 และข้อความที่เหมาะสม
});

server.listen(PORT, () => {
    console.log(`🌐 HTTP Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET /');
    console.log('  GET /students');
    console.log('  GET /students/:id');
    console.log('  GET /students/major/:major');
});