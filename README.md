
# 🚀 Acqute-dev

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Vite](https://img.shields.io/badge/Vite-Frontend-blueviolet?logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-purple?logo=eslint)
![Jest](https://img.shields.io/badge/Jest-Testing-red?logo=jest)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-black?logo=githubactions)

A modern JavaScript project built using **Node.js and Vite**, following **industry-level development practices** such as testing, linting, Dockerization, and CI/CD pipelines.

This project focuses not just on functionality, but on **code quality, scalability, and real-world workflows**.

---

## 🛠️ Tech Stack

- **Node.js (v18)**
- **Vite**
- **JavaScript (ES2022)**
- **Jest** – unit testing
- **ESLint (Flat Config)** – linting & formatting
- **Docker** – containerization
- **GitHub Actions** – CI/CD automation

---

## 📁 Project Structure

```

acqute-dev/
│
├── src/
│   ├── services/
│   └── app.js
│
├── test/
│   └── app.test.js
│
├── Dockerfile
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/acqute-dev.git
cd acqute-dev
````

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project (Local)

```bash
npm run dev
```

📍 App runs at:

```
http://localhost:5173
```

---

## 🧪 Running Tests

```bash
npm run test
```

* Uses **Jest**
* Test globals properly configured via ESLint flat config

---

## 🔍 Linting & Code Quality

```bash
npm run lint
```

Auto-fix issues:

```bash
npm run lint -- --fix
```

✔ Enforced rules:

* Consistent indentation
* No unused variables
* Modern ES practices
* Clean, readable code

---

## 🐳 Docker Support

### Build Docker Image

```bash
docker build --platform linux/amd64 -t acqute-dev .
```

### Run Container

```bash
docker run -p 5173:5173 acqute-dev
```

📍 App available at:

```
http://localhost:5173
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

This project uses **GitHub Actions** for Continuous Integration.

### Pipeline Steps:

* Install dependencies
* Run ESLint checks
* Execute test cases
* Validate build on every push & PR

This ensures **no broken code reaches main branch**.

---

## 📚 What I Learned From This Project

### 🔹 Development

* Writing **clean, maintainable JavaScript**
* Structuring services and tests properly
* Debugging real runtime & import errors

### 🔹 Testing

* Writing unit tests using **Jest**
* Configuring ESLint for test environments
* Understanding test globals (`describe`, `it`, `expect`)

### 🔹 Code Quality

* Migrating from `.eslintrc` to **ESLint Flat Config**
* Fixing lint issues in CI environments
* Maintaining consistency across teams

### 🔹 DevOps & Deployment

* Dockerizing Node.js applications
* Understanding platform/architecture issues
* Setting up **CI/CD pipelines with GitHub Actions**
* Debugging real CI failures (lint, test, build)


## 🎯 Why This Project Matters

* Demonstrates **industry practices**
* Covers full workflow: **code → test → lint → container → CI**
* Shows ability to **debug real production-like issues**
* Strong proof of **learning depth**, not just tutorials

---

## 👩‍💻 Author

**Prarthana**
Aspiring Software Engineer | Backend & DevOps Focused
Driven by depth, clean systems, and real-world engineering 🚀

```


