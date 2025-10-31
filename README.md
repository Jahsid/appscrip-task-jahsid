# 🛍️ Modern Product Listing Page — Appscrip Task
This project is a **Product Listing Page (PLP)** built using **Next.js (SSR)** and **Tailwind CSS**, focusing on **SEO optimization**, **responsive design**, and **minimal dependencies**.  

<img width="1920" height="1080" alt="Screenshot 2025-10-31 212933" src="https://github.com/user-attachments/assets/14914d84-4db6-44fb-9ec0-50c69693b49b" />


---

## 🚀 Features

✅ **Server-Side Rendering (SSR)**  
Renders products on the server for better SEO and performance.  

✅ **SEO Optimized**  
Includes meta title, description, H1/H2 tags, schema.org structured data, alt text, and semantic HTML.  

✅ **Responsive Layout**  
Fully responsive and mobile-friendly for all screen sizes.  

✅ **Minimal Dependencies**  
Uses only core React, Next.js, and Tailwind — no heavy external libraries.  

✅ **Clean Code Structure**  
Organized components with consistent naming conventions and minimal DOM usage.  

---

## 📂 Project Structure

```

appscrip-task/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── cards/
│   │   ├── FilterCard.jsx
│   │   └── ProductCard.jsx
│   ├── header/
│   │   └── Header.jsx
│   ├── footer/
│   │    └── Footer.jsx
│   └── list/
│       └── FooterList.jsx
├── public/
│   └── images/
├── next.config.mjs
├── package.json
└── README.md

````

---

## 🧠 Evaluation Criteria

| Criteria | Description |
|-----------|--------------|
| **a. Code Structure** | Organized components and clear file separation. |
| **b. Naming Convention** | Meaningful and consistent variable, function, and component names. |
| **c. Minimum Pre-built Packages** | Only Next.js, Tailwind CSS, and React Icons used. |
| **d. Screen Size Fit** | Perfectly responsive on desktop, tablet, and mobile. |
| **e. Min DOM Size** | Optimized layout with minimal unnecessary elements. |

---

## 🔍 SEO Settings Implemented

| Setting | Description |
|----------|--------------|
| **Page Title** | Set using `<Head>` in Next.js |
| **Page Description** | Meta tag describing page content |
| **H1 & H2 Tags** | Proper heading hierarchy |
| **Schema.org Markup** | JSON-LD added for product list |
| **Image Optimization** | Using `next/image` with alt attributes |
| **Alt Text** | Every image includes descriptive alt text |

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jahsid/appscrip-task-jahsid.git

2. **Navigate to project**

   ```bash
   cd appscrip-task-jahsid
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open in your browser:
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Used

All products are fetched from
[`https://fakestoreapi.com/products`](https://fakestoreapi.com/products)

---

## 🧩 Technologies Used

* **Next.js 14+** (with SSR)
* **React 18+**
* **Tailwind CSS**
* **React Icons**

---

## 🧾 License

This project is for **educational and evaluation purposes** only.
All external assets (like FakeStore API images) belong to their respective owners.

---

👨‍💻 **Developed by:** Muhammed Jahsid
📧 *8138096675 | jahsid.me@gmail.com*

