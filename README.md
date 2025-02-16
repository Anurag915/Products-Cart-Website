# Products Cart Website

## 🚀 Overview
The **Products Cart Website** is a modern e-commerce web application built with React and Redux Toolkit. It allows users to browse products, add them to a cart, and manage their shopping experience seamlessly. The project demonstrates efficient state management using Redux Toolkit and provides a scalable architecture for further enhancements.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, React Router
- **State Management:** Redux Toolkit, React-Redux
- **API:** FakeStore API
- **Build Tool:** Vite
- **Package Manager:** npm
- **Version Control:** Git, GitHub

## 📌 Features
- 📦 Fetch products from FakeStore API.
- 🛒 Add and remove items from the cart using Redux Toolkit.
- 🔄 Persistent state management with Redux.
- 📍 Navigation using React Router.
- ⚡ Fast development with Vite.

## 📂 Project Structure
```
my-react-app/
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── redux/
│   │   ├── store.js   # Redux store configuration
│   │   ├── Slices/    # Redux slices
│   ├── App.jsx        # Root application component
│   ├── index.js       # React entry point
│── public/            # Static assets
│── package.json       # Dependencies and scripts
│── README.md          # Project documentation
```

## 🏗️ Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Anurag915/Products-Cart-Website.git
   cd Products-Cart-Website
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🚀 Deployment
To deploy the project, build the production-ready files:
```sh
npm run build
```
Then, serve the `dist` folder using a hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

## 🔧 Troubleshooting
- If you encounter `@reduxjs/toolkit` import errors, ensure it's installed:
  ```sh
  npm install @reduxjs/toolkit react-redux
  ```
- If Git push fails due to non-fast-forward, use:
  ```sh
  git pull origin main --rebase
  git push origin main
  ```

## 📜 License
This project is licensed under the MIT License.

## ✨ Contributors
- **Anurag Prajapati** - [GitHub](https://github.com/Anurag915)

## 📞 Contact
For inquiries or feedback, reach out via [LinkedIn](https://www.linkedin.com/in/anurag915).

