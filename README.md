# 📦 Online Store API

A simple Flask + MongoDB REST API for managing product data.

---

## 👩🏽‍💻 Submitted By
- **Name:** Sequoyah Dozier  (Koiree)
- **Course:** FSDI 107 – Intro to React Python Backend  
- **Submission Date:** March 10, 2025

---

## 🛠️ Tech Stack
- Python 3.13
- Flask
- MongoDB Atlas (cloud-hosted)
- Thunder Client (for testing)
- MongoDB Compass (for data visualization and import)

---

## 📄 Project Structure

OnlineStore/
├── server/
│   ├── config.py             # MongoDB connection
│   ├── server.py             # Flask app
│   ├── pages/                # HTML Pages for templates
│   │   ├── index.html
│   │   └── about.html
│   └── mockdata/
│       └── organika.products.json  # Mock product data
├── README.md


---

## 🌐 Web Routes

- `GET /` → Renders the homepage (`index.html`)
- `GET /about` → Renders the about page (`about.html`)

---

## 🔌 API Endpoints

- `GET /api/product` → Returns all products in the catalog
- `GET /api/product/count` → Returns the number of products
- `GET /api/catalog/<category>` → Filters products by category

📍 *All endpoints return JSON.*

---

## 📥 Mock Data

The mock product data is stored in:

``
server/mockdata/organika.products.json
``

You can import this into your MongoDB Atlas collection using **MongoDB Compass**:
1. Connect to your cluster
2. Select the `organika.products` collection
3. Use "Add Data → Insert Document" or Import JSON
4. Ensure fields include `"title"`, `"price"`, and `"category"`

---

## 📬 Final Report Submission Note

- `seed_db.py` was removed in favor of manual mock data import via Compass.
- Thunder Client was used to verify all API endpoints.
- Be sure MongoDB Atlas is seeded before testing `/api/catalog/<category>`.

---

I have submitted both a `.zip` file and a GitHub URL for my final RESTful API project.

🔗 **GitHub Repository (Final Report Branch):**  
[https://github.com/qoryhanisagal/online-store-api/tree/final-report](https://github.com/qoryhanisagal/online-store-api/tree/final-report)

📄 **Final Report File Location:**  
`OnlineStore/finalreport/FSDI_107_Final_Report.md`

This Markdown file provides a full breakdown of the API implementation, matching all required competencies.  
Please let me know if you have any trouble accessing the files.