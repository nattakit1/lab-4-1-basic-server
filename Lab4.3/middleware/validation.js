// Contact form validation
const validateContact = (req, res, next) => {
    const { name, email, subject, message, phone, company } = req.body;
    const errors = [];
    
// Contact form validation
const validateContact = (req, res, next) => {
    const { name, email, subject, message, phone, company } = req.body;
    const errors = [];

    // ตรวจสอบ name
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
        errors.push('ชื่อ-นามสกุลต้องมีความยาว 2-100 ตัวอักษร');
    }

    // ตรวจสอบ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
        errors.push('อีเมลไม่ถูกต้อง');
    }

    // ตรวจสอบ subject
    if (!subject || subject.trim().length < 5 || subject.trim().length > 200) {
        errors.push('หัวเรื่องต้องมีความยาว 5-200 ตัวอักษร');
    }

    // ตรวจสอบ message
    if (!message || message.trim().length < 10 || message.trim().length > 1000) {
        errors.push('ข้อความต้องมีความยาว 10-1000 ตัวอักษร');
    }

    // ตรวจสอบ phone (optional)
    const phoneRegex = /^[0-9]{9,10}$/;
    if (phone && !phoneRegex.test(phone.trim())) {
        errors.push('เบอร์โทรศัพท์ไม่ถูกต้อง (9-10 ตัวเลข)');
    }

    // ตรวจสอบ company (optional)
    if (company && company.trim().length > 100) {
        errors.push('ชื่อบริษัท/องค์กรต้องไม่เกิน 100 ตัวอักษร');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, message: 'Validation failed', errors });
    }

    // Sanitize
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.subject = subject.trim();
    req.body.message = message.trim();

    next();
};

// Feedback validation
const validateFeedback = (req, res, next) => {
    const { rating, comment, email } = req.body;
    const errors = [];

    // ตรวจสอบ rating
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
        errors.push('คะแนนต้องเป็นตัวเลข 1-5');
    }

    // ตรวจสอบ comment
    if (!comment || comment.trim().length < 5 || comment.trim().length > 500) {
        errors.push('ความคิดเห็นต้องมีความยาว 5-500 ตัวอักษร');
    }

    // ตรวจสอบ email (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email.trim())) {
        errors.push('อีเมลไม่ถูกต้อง');
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, message: 'Validation failed', errors });
    }

    next();
};

    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    // Sanitize data
    req.body.name = req.body.name.trim();
    req.body.email = req.body.email.trim().toLowerCase();
    req.body.subject = req.body.subject.trim();
    req.body.message = req.body.message.trim();
    
    next();
};

// Feedback validation
const validateFeedback = (req, res, next) => {
    const { rating, comment, email } = req.body;
    const errors = [];
    
    // TODO: ตรวจสอบ rating
    // - ต้องมีค่า
    // - ต้องเป็นตัวเลข 1-5
    
    // TODO: ตรวจสอบ comment
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 5 ตัวอักษร
    // - ไม่เกิน 500 ตัวอักษร
    
    // TODO: ตรวจสอบ email (optional)
    // - ถ้ามีค่า ต้องเป็น email format ที่ถูกต้อง
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    next();
};

module.exports = {
    validateContact,
    validateFeedback
};