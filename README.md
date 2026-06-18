# User Management API

A simple REST API built with Node.js, Express.js, and PostgreSQL for managing users.

## Features

* Create User
* Get All Users
* Get User By ID
* Update User
* Delete User
* PostgreSQL Database Integration
* RESTful API Architecture
* JSON Request & Response Handling
* CORS Enabled

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* CORS
* npm

## Project Structure

```text
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
```

### Install Dependencies

```bash
npm install
```

### Configure Database

Create a PostgreSQL database:

```sql
CREATE DATABASE userdb;
```

Create Users Table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);
```

### Configure Database Connection

Update your database credentials in:

```javascript
config/db.js
```

Example:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'userdb',
    password: 'your_password',
    port: 5432
});

module.exports = pool;
```

## Run Application

### Start Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

Server runs on:

```text
http://localhost:5000
```

## API Endpoints

### Create User

```http
POST /api/users
```

Request Body:

```json
{
  "name": "Vinay",
  "email": "vinay@example.com",
  "phone": "7331157204"
}
```

### Get All Users

```http
GET /api/users
```

### Get User By ID

```http
GET /api/users/:id
```

### Update User

```http
PUT /api/users/:id
```

### Delete User

```http
DELETE /api/users/:id
```

## Common Errors

### Duplicate Email Error

```json
{
  "message": "duplicate key value violates unique constraint \"users_email_key\""
}
```

Reason:

The email already exists in the database.

Solution:

* Use a different email address.
* Check for existing users before inserting.
* Handle PostgreSQL error code `23505`.

## Testing APIs

Use:

* Postman
* Thunder Client (VS Code)
* Insomnia

## Future Enhancements

* JWT Authentication
* Password Encryption (bcrypt)
* Role-Based Access Control
* Input Validation
* Pagination
* Search & Filter APIs
* Swagger Documentation

## Author

Vinay

## License

MIT License
