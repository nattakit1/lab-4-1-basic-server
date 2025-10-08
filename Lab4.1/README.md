# Lab 4-1: Basic Server Comparison

## 1. Installation
```bash
npm install
```
<img width="438" height="295" alt="image" src="https://github.com/user-attachments/assets/e2a4cc2e-89bb-4c3d-bf68-5ca84d333e96" />

## 2. Run Servers
HTTP server:
```bash
npm run start:http
```

<img width="314" height="284" alt="image" src="https://github.com/user-attachments/assets/0446b2d6-f186-4430-b976-6d50b5dae648" />

## 3. Test Endpoints

GET /
<img width="817" height="37" alt="image" src="https://github.com/user-attachments/assets/2e503ce3-9872-4fef-b2a1-e2b99d6f404c" />


GET /students
curl http://localhost:3000/students

<img width="770" height="48" alt="image" src="https://github.com/user-attachments/assets/257f8bf7-22a0-40e9-8ed9-1268eabe00f3" />
<img width="305" height="427" alt="image" src="https://github.com/user-attachments/assets/67446737-c913-42d6-9160-4a4ce242cff6" />

GET /students/:id



GET /students/major/:major

(Express only) GET /stats
