# FSDI 107 Intro to React Python Backend – Final Report

**Name:** Sequoyah Descoteaux  
**Project:** RESTful Product Catalog API  

---

## 1️⃣ Project Overview

The Product Catalog RESTful API is a backend application built using Python (Flask) and MongoDB. It enables users to retrieve, add, and filter product data through well-structured API endpoints. The application supports full CRUD functionality, category-based filtering, and value aggregation — all while persisting data in a MongoDB Atlas cloud database.

This project demonstrates my proficiency in Python, REST API development, Flask, MongoDB, and Git while solidifying my understanding of routing, JSON handling, data modeling, and server-side logic.

---

## 2️⃣ Technologies Used

- **Python 3.13** – Core programming language
- **Flask** – Web framework for building the API
- **MongoDB Atlas** – Cloud database for storing product data
- **MongoDB Compass** – GUI for managing collections and seeding data
- **Thunder Client (VS Code Extension)** – For API testing
- **Git & GitHub** – For version control and project collaboration

---

## 3️⃣ Features Implemented

### 🔹 3.1 Welcome and About Pages
- `GET /` returns an HTML welcome page
- `GET /about` displays information about the API

### 🔹 3.2 Product Catalog Management
- `GET /api/catalog` returns all products in the database
- `POST /api/catalog` allows the client to insert new products

### 🔹 3.3 Category-Based Filtering
- `GET /api/products/<category>` returns all products in a given category

### 🔹 3.4 Reporting
- `GET /api/reports/total` returns the total value of all products combined

---

## 4️⃣ Challenges & Solutions

### 🔸 Category Filtering Not Returning Data  
❌ **Issue:** Products were not returned when filtered by category  
✅ **Solution:** Ensured consistency in field names (`"title"` instead of `"name"`), confirmed seeded data matched the filter criteria, and used MongoDB Compass for data verification.

### 🔸 Floating Point Precision on Total Price  
❌ **Issue:** Total price was returned with too many decimal places  
✅ **Solution:** Used Python’s `round()` function to return a cleaner, currency-accurate response.

### 🔸 MongoDB Connection Errors  
❌ **Issue:** Seeding script launched Flask instead of inserting data  
✅ **Solution:** Removed Flask calls from the `seed_db.py` file and used Compass for direct bulk inserts.

### 🔸 Potential Route Overlap Between Assignments  
❌ **Issue:** Using `/api/product` vs `/api/catalog` caused possible conflict between assignments  
✅ **Solution:** Created a dedicated `final-report` Git branch to separate Assignment 4 from previous work.

---

## 5️⃣ Final Result

After implementing and testing all routes, the RESTful Product Catalog API now:

✅ Returns a welcome page and about page  
✅ Provides a full list of products and allows new product creation  
✅ Filters products by category using dynamic route parameters  
✅ Returns the total value of the catalog  
✅ Uses MongoDB Atlas and Compass for persistent data management  
✅ Is tested through Thunder Client and documented on GitHub  

---

## 6️⃣ GitHub Repository

🔗 **Repository:** [Online Store API - Final Report Branch](https://github.com/qoryhanisagal/online-store-api/tree/final-report)

---

## 7️⃣ Next Steps

Though the core competencies have been met, I plan to enhance the project with the following:

1. **Validation Layer:** Add input validation to prevent incorrect data entries  
2. **Error Handling:** Add consistent error messages for edge cases and bad requests  
3. **Authentication:** Introduce token-based authentication to protect routes  
4. **Deployment:** Deploy the API to a live cloud environment (e.g., Render or Heroku)  
5. **Frontend Integration:** Build a simple frontend client using React to consume this API

---

## 8️⃣ Conclusion

This project deepened my understanding of:

✅ RESTful API structure and HTTP methods  
✅ Working with JSON data and Python dictionaries  
✅ MongoDB data modeling and real-time filtering  
✅ Using Flask and pymongo to build scalable backends  
✅ GitHub version control, clean commits, and branching

🚀 **Final Verdict:**  
This RESTful API project fulfills all course requirements and successfully demonstrates my mastery of backend development using Flask and MongoDB.
