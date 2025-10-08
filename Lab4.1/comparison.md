# HTTP vs Express Server Comparison

## 1. Syntax & Boilerplate
- HTTP: ต้องจัดการ request parsing, route matching และ header ด้วยตนเอง
- Express: ใช้ router และ middleware ทำให้โค้ดสั้นและอ่านง่าย

## 2. Route Handling
- HTTP: ต้องเช็ค pathname, method, split URL เอง
- Express: route และ param ถูกจัดการให้อัตโนมัติ (`req.params`)

## 3. Middleware & CORS
- HTTP: ต้องตั้ง header ด้วยตนเองทุกครั้ง
- Express: ใช้ middleware ทำได้ง่าย และสามารถเพิ่ม CORS, JSON parsing ได้ง่าย

## 4. Scalability
- HTTP: เหมาะกับ server เล็ก ๆ, เรียบง่าย
- Express: เหมาะกับ server ขนาดกลางถึงใหญ่, มี ecosystem plugin เยอะ
