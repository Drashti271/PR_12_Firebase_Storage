# 🚀 Firebase Storage Project (React + Vite)

This project demonstrates how to use **Firebase Storage** in a React application built with Vite.

---

## 📂 Project Structure

```
PR_12_FIREBASE_STORAGE/
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.jsx
│   ├── firestore.js
│   └── main.jsx
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
```

---

## 🛠️ Technologies Used

- React JS ⚛️
- Vite ⚡
- Firebase 🔥
- JavaScript (ES6)

---

## 🔥 Features

- Upload files to Firebase Storage
- Retrieve and display files
- Delete files from Firebase
- Fast development using Vite

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```
git clone https://github.com/Drashti271/PR_12_Firebase_Storage.git
cd PR_12_FIREBASE_STORAGE
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Configure Firebase
- Go to Firebase Console
- Create a project
- Enable Storage
- Copy your Firebase config and paste it inside `firestore.js`

Example:
```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
```

### 4️⃣ Run the project
```
npm run dev
```

---

## 📸 Output

- Upload images/files to Firebase
- Display uploaded files
- Perform CRUD operations

---

## 📌 Notes

- Make sure Firebase Storage rules allow read/write during development
- Use environment variables for security in production

---

## 👩‍💻 Author

**Drashti Bilimoria**

---

