// src/services/DataService.js
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

class DataService {
  // GET all products
  async getCatalog() {
    const response = await axios.get(`${baseUrl}/api/catalog`);
    return response.data;
  }

  // POST a new product from the admin form
  // This function is called when the admin form is submitted
  // It sends a POST request to the backend API with the product data
  // The backend will handle the request and save the product to the database
  // The function returns the response data from the server
  // This is useful when I needed to confirmn that the product was saved successfully
  // and for updating the UI.
  async saveProduct(product) {
    const response = await axios.post(`${baseUrl}/api/catalog`, product);
    return response.data;
  }

  // GET total value of catalog
  async getTotalValue() {
    const response = await axios.get(`${baseUrl}/api/reports/total`);
    return response.data;
  }

  // GET products by category
  async getByCategory(category) {
    const response = await axios.get(`${baseUrl}/api/products/${category}`);
    return response.data;
  }

  // GET unique categories
  async getCategories() {
    const response = await axios.get(`${baseUrl}/api/categories`);
    return response.data;
  }

  // PATCH: Update product by index
  async updateProduct(index, updatedFields) {
    const response = await axios.patch(`${baseUrl}/api/catalog/${index}`, updatedFields);
    return response.data;
  }

  // DELETE: Remove product by index
  async deleteProduct(index) {
    const response = await axios.delete(`${baseUrl}/api/catalog/${index}`);
    return response.data;
  }
}

export default new DataService();