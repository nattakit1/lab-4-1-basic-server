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

<img width="305" height="427" alt="image" src="https://github.com/user-attachments/assets/67446737-c913-42d6-9160-4a4ce242cff6" />

GET /students/:id

curl http://localhost:3000/students/1

<img width="283" height="203" alt="image" src="https://github.com/user-attachments/assets/43aa6766-c66a-4b2f-99dc-eab68542c199" />

GET /students/major/:major

curl http://localhost:3000/students/major/Computer%20Science

<img width="467" height="310" alt="image" src="https://github.com/user-attachments/assets/d3b730b2-892f-4df9-a98f-cf1d5fdf33b2" />

(Express only) GET /stats
