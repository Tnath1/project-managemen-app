# CRUD API with MongoDB

This project is a **GraphQL-based API** that supports full **CRUD (Create, Read, Update, Delete)** operations using **MongoDB** as the database. The API is built with **Express.js**, **GraphQL**, and **Mongoose** for data modeling.

## Features
- Create, Read, Update, and Delete clients and projects.
- Full integration with MongoDB via Mongoose.
- CORS support for cross-origin requests.


## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Tnath1/project-managemen-app.git
    cd project-managemen-app
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following values:
    ```bash
    MONGO_URI=mongodb://localhost:27017/your-db-name
    PORT=5000
    ```

4. **Start MongoDB**  
   If you are running a local MongoDB instance, make sure MongoDB is started.

## Technologies Used

* **Express.js**: Fast, unopinionated web framework for Node.js.
* **GraphQL**: A query language for APIs and a runtime for executing those queries.
* **MongoDB**: NoSQL database.
* **Mongoose**: Elegant MongoDB object modeling for Node.js.
* **Nodemon**: Automatically restarts the server when file changes are detected.


## Running the Project

To start the development server with **nodemon** for hot-reloading:
```bash
npm run dev

