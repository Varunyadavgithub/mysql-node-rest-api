# Node.js REST API with MySQL and Docker  

A simple CRUD (Create, Read, Update, Delete) REST API built using Node.js, Express, MySQL, and Docker. This project demonstrates a clean and modular folder structure for scalability and maintainability.

## Features
- **CRUD Operations**: Manage products through Create, Read, Update, and Delete operations.
- **MySQL Database**: Uses MySQL as the database, running in a Docker container.
- **Modular Structure**: Organized codebase for controllers, routes, and database connections.
- **Environment Configuration**: `.env` file for managing sensitive configurations.

---

## Folder Structure
```plaintext
CRUD/
├── controllers/
│   └── product.controllers.js   # Handles business logic for product routes
├── db/
│   ├── connectdb.js             # Database connection logic
│   └── queries.js               # SQL queries for database operations
├── routes/
│   └── product.routes.js        # API routes for products
├── .env                         # Environment variables
├── .gitignore                   # Ignored files for Git
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Exact dependency versions
└── server.js                    # Main server file
```

---

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- MySQL Workbench or any SQL client (optional, for database inspection)

---

## Environment Variables
Create a `.env` file in the root of the project and add the following:
```env
MYSQL_DATABASE_NAME="ecom"
MYSQL_PASSWORD=your_password
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PORT=3306
PORT=5000
```

Replace `your_password` with your desired password.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Varunyadavgithub/mysql-node-rest-api.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MySQL with Docker
Run the following command to start a MySQL container:
```bash
docker run --name sqldb -d -p 3306:3306 --rm -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your_password mysql:latest
```

### 4. Initialize the Database
- Access the container's MySQL shell:
  ```bash
  docker exec -it sqldb mysql -u root -p
  ```
- Create the database:
  ```sql
  CREATE DATABASE ecom;
  ```
- Exit the MySQL shell:
  ```bash
  exit
  ```

### 5. Run the Server
```bash
npm run dev
```
The API will start running at [http://localhost:5000](http://localhost:5000).

---

## API Endpoints
| HTTP Method | Endpoint        | Description               |
|-------------|-----------------|---------------------------|
| GET         | `/products`     | Retrieve all products     |
| GET         | `/products/:id` | Retrieve a product by ID  |
| POST        | `/products`     | Add a new product         |
| PUT         | `/products/:id` | Update a product by ID    |
| DELETE      | `/products/:id` | Delete a product by ID    |

---

## Useful Commands
- **Stop MySQL Container**:  
  ```bash
  docker stop sqldb
  ```

- **Rebuild Node Modules**:  
  ```bash
  npm install
  ```

---

## Technologies Used
- Node.js
- Express.js
- MySQL
- Docker
- Nodemon (for development)

## Acknowledgments

- [Node.js Documentation](https://nodejs.org/)
- [Express Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Docker Documentation](https://docs.docker.com/)
