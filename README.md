# Food and Nutrition Data Management API

A powerful Express.js API for managing food and nutrition data with MongoDB integration. This API enables users to create, read, update, and delete food items along with their associated information such as nutritional facts, ingredients, and more.

## Features

- CRUD Operations: Implement Create, Read, Update, and Delete operations for food items.
- MongoDB Integration: Store food data in a MongoDB database using Mongoose.
- Validation and Error Handling: Ensure data validity and provide meaningful error messages.
- Scalable: Easily extendable to accommodate additional features or data types.

## Installation

1. Clone the repository: git@github.com:Ravi-Kamat/Food-and-Nutrition-Data-Management-API.git

2. Install dependencies: cd food-nutrition-api
   npm install

3. Configure your MongoDB connection in `config/databaseConnect.js`.

4. Start the server: npm start

## API Endpoints

- POST /fooditems: Create a new food item.
- GET /getfooditems: Retrieve all food items.
- PUT /updatefooditems/:id: Update a specific food item by ID.
- DELETE /deleteitem/:id: Delete a specific food item by ID.

## Usage

### Creating a new food item

Send a POST request to `/fooditems` with JSON data containing the details of the food item.

### Retrieving Food Items

To retrieve all food items, send a GET request to `/getfooditems`. This endpoint will return a JSON array containing all stored food items.

### Updating a food item

Send a PUT request to `/updatefooditems/:id` with JSON data containing the updated details of the food item and the ID of the food item to be updated.

### Deleting a food item

Send a DELETE request to `/deleteitem/:id` to delete the food item with the specified ID
