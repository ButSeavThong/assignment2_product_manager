// Product Service Module
// Demonstrates ES Modules, Fetch API, LocalStorage, and Async/Await

const API_BASE = 'https://jsonplaceholder.typicode.com';
const STORAGE_KEY = 'productManagerData';

// Helper function to get data from localStorage
const getFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

// Helper function to save data to localStorage
const saveToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Initialize with some sample data if none exists
const initializeData = async () => {
  const existingData = getFromStorage();
  
  if (!existingData || !existingData.products || existingData.products.length === 0) {
    // Using Fetch API with async/await
    try {
      const response = await fetch(`${API_BASE}/posts?_limit=5`);
      const posts = await response.json();
      
      // Transform the API data to match our product structure
      const sampleProducts = posts.map((post, index) => ({
        id: index + 1,
        name: post.title.substring(0, 20),
        category: ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Toys'][index % 5],
        price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
        description: post.body.substring(0, 100)
      }));
      
      saveToStorage({ products: sampleProducts, nextId: sampleProducts.length + 1 });
      return sampleProducts;
    } catch (error) {
      console.error('Error initializing data:', error);
      // Fallback to empty array if API fails
      saveToStorage({ products: [], nextId: 1 });
      return [];
    }
  }
  
  return existingData.products;
};

// Get all products
export const getProducts = async () => {
  return await initializeData();
};

// Add a new product
export const addProduct = async (productData) => {
  const data = getFromStorage();
  const newProduct = {
    // Using spread operator to copy productData and add id
    ...productData,
    id: data.nextId
  };
  
  const updatedProducts = [...data.products, newProduct];
  saveToStorage({ 
    products: updatedProducts, 
    nextId: data.nextId + 1 
  });
  
  return newProduct;
};

// Update an existing product
export const updateProduct = async (id, productData) => {
  const data = getFromStorage();
  const productIndex = data.products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    throw new Error('Product not found');
  }
  
  // Using spread operator to create updated product
  const updatedProduct = { 
    ...data.products[productIndex], 
    ...productData 
  };
  
  const updatedProducts = [
    ...data.products.slice(0, productIndex),
    updatedProduct,
    ...data.products.slice(productIndex + 1)
  ];
  
  saveToStorage({ 
    products: updatedProducts, 
    nextId: data.nextId 
  });
  
  return updatedProduct;
};

// Delete a product
export const deleteProduct = async (id) => {
  const data = getFromStorage();
  const updatedProducts = data.products.filter(p => p.id !== id);
  
  saveToStorage({ 
    products: updatedProducts, 
    nextId: data.nextId 
  });
  
  return { success: true };
};

// Duplicate a product
export const duplicateProduct = async (id) => {
  const data = getFromStorage();
  const originalProduct = data.products.find(p => p.id === id);
  
  if (!originalProduct) {
    throw new Error('Product not found');
  }
  
  // Using spread operator to create a copy with a new ID
  const duplicatedProduct = {
    ...originalProduct,
    id: data.nextId,
    name: `${originalProduct.name} (Copy)`
  };
  
  const updatedProducts = [...data.products, duplicatedProduct];
  saveToStorage({ 
    products: updatedProducts, 
    nextId: data.nextId + 1 
  });
  
  return duplicatedProduct;
};