🫖 Cozy Tea Shop – Full Stack Online Stor

A full-stack web application for a cozy tea shop, featuring a React frontend, a Flask + MongoDB backend, and an admin dashboard for managing products and discoun
---

## 👩🏽‍💻 Submitted By
- **Name:** Sequoyah Dozier  (Koiree)
- **Course:** FSDI 107 – Intro to React Python Backend  
- **Submission Date:** March 10, 2025

---

## 🛠️ Tech Stack

🔹 Frontend

- React (Vite)
- Bootstrap 5
- Font Awesome
- Custom CSS (modular + global)

🔹 Backend

- Python 3.13
- Flask
- MongoDB Atlas (cloud-hosted)
- Thunder Client (for testing)
- MongoDB Compass (for data visualization and import)

---

## 📄 Project Structure

```
OnlineStore/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components (e.g., Banner, Navbar, Product)
│   │   ├── pages/             # Page-level views (Catalog, About, AdminDashboard)
│   │   ├── styles/            # Shared global CSS (AdminForm.css, etc.)
│   │   ├── App.jsx            # Main app structure
│   │   └── main.jsx           # Entry point for Vite
│   └── public/img/            # Product images (e.g., blacktea.png, greentea.png)
├── server/                    # Flask Backend
│   ├── config.py              # MongoDB config
│   ├── server.py              # Flask app routes
│   ├── pages/                 # HTML templates
│   └── mockdata/              # JSON mock data
├── README.md
└── notes.txt                  # Project implementation and setup notes
```
---

## 🌐 Frontend Routes
- / → Renders all major components:
- Banner
- Navbar
- Catalog (product listing)
- TeaFilter (category filtering)
- About
- Admin Dashboard (Product + Discount forms)
- Footer

## 🔌 Backend API Endpoints

- `GET /` → Renders the homepage (`index.html`)
- `GET /about` → Renders the about page (`about.html`)

---

## 🔌 API Endpoints

- `GET /api/product` → Returns all products in the catalog
- `GET /api/product/count` → Returns the number of products
- `GET /api/catalog/<category>` → Filters products by category

📍 *All endpoints return JSON.*

---

## 🧪 Testing & Mock Data

The mock product data is stored in:

``
server/mockdata/organika.products.json(See MongDB Compass)
``

To load into MongoDB Atlas:
	1.	Open MongoDB Compass
	2.	Connect to your cluster
	3.	Import the JSON file into the correct collection

You can import this into your MongoDB Atlas collection using **MongoDB Compass**:
1. Connect to your cluster
2. Select the `organika.products` collection
3. Use "Add Data → Insert Document" or Import JSON
4. Ensure fields include `"title"`, `"price"`, and `"category"`

---

## 💡 Development Notes
- Used virtualenv for Python environment management
- Created a shared AdminForm.css for consistent form styling
- Applied responsive layouts using Bootstrap’s flex utility classes
- Converted inline styling into reusable CSS classes for scalability
- FilterOption component was added for category filtering via buttons

## 📬 Final Report Submission Note

- Thunder Client was used to verify all API endpoints.
- Removed `seed_db.py` – switched to manual import using Compass
- Be sure MongoDB Atlas is seeded before testing `/api/catalog/<category>`.

---

I have submitted both a `.zip` file and a GitHub URL for my final RESTful API project.

🔗 **GitHub Repository (Final Report Branch):**  
[https://github.com/qoryhanisagal/online-store-api/tree/final-report](https://github.com/qoryhanisagal/online-store-api/tree/final-report)

📄 **Final Report File Location:**  
`OnlineStore/finalreport/FSDI_107_Final_Report.md`

This Markdown file provides a full breakdown of the API implementation, matching all required competencies.  
Please let me know if you have any trouble accessing the files.