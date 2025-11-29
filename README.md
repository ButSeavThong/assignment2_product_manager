Product Manager - Modern JavaScript Demo App
https://img.shields.io/badge/JavaScript-ES6%252B-yellow
https://img.shields.io/badge/License-MIT-blue
https://img.shields.io/badge/No-Frameworks-green

A clean, responsive product management application that demonstrates modern JavaScript features in a practical, real-world web application.

🌟 Live Demo
Click here to try the live demo Note: Run using a local server for full functionality

📋 Table of Contents
Features

Technologies

Quick Start

Project Structure

Usage

API Reference

Development

Browser Support

Contributing

License

🚀 Features
📦 Product Management

View all products in responsive card layout

Add new products with validation

Edit existing products

Delete products with confirmation

Duplicate products quickly

💾 Data Persistence

Automatic save to browser localStorage

Load sample data from JSONPlaceholder API

Data persists between browser sessions

🎨 User Experience

Responsive design for all devices

Smooth animations and transitions

Instant feedback with notifications

Intuitive form handling

🛠 Technologies Demonstrated
Feature	Implementation	File
Async/Await	All asynchronous operations	productService.js
Spread Operator	Object/array manipulation	productService.js
Fetch API	External API integration	productService.js
LocalStorage	Client-side persistence	productService.js
Arrow Functions	Concise function syntax	Both files
ES Modules	Modular architecture	Both files
Template Literals	Dynamic HTML generation	index.html
⚡ Quick Start
Prerequisites
Modern web browser (Chrome, Firefox, Safari, Edge)

Local server (for ES modules)

Installation
Download the files:

bash
mkdir product-manager
cd product-manager
# Download index.html and productService.js to this directory
Run with a local server:

Using Python:

bash
# Python 3
python -m http.server 8000
Using Node.js:

bash
# Install http-server globally
npm install -g http-server
# Run the server
http-server
Using PHP:

bash
php -S localhost:8000
Open your browser:

text
http://localhost:8000
📁 Project Structure
text
product-manager/
│
├── 📄 index.html                 # Main application (UI + logic)
├── 📄 productService.js          # Data layer module
└── 📄 README.md                  # This documentation
File Overview
index.html - Contains all HTML structure, CSS styles, and main JavaScript application logic

productService.js - ES Module handling all data operations, API calls, and localStorage management

🎯 Usage
Adding a Product
Fill out the form on the left side

Enter product name, category, price, and description

Click "Add Product"

Watch the new product appear in the list

Editing a Product
Click "Edit" on any product card

The form auto-populates with existing data

Make your changes

Click "Update Product" to save

Duplicating a Product
Click "Duplicate" on any product card

A copy is created with "(Copy)" added to the name

Perfect for creating similar products quickly

Deleting a Product
Click "Delete" on any product card

Confirm the deletion in the dialog

Product is permanently removed