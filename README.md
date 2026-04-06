# Project: Financial Data Processing & Access Control API

## Overview

This project is a backend application built using Node.js, Express, and
MongoDB. It allows users to manage financial records (income and
expenses) with authentication and role-based access control.

## Features

-   User Registration and Login (JWT Authentication)
-   Role-based Access (Admin, Analyst, Viewer)
-   CRUD operations for financial records
-   Filtering by type, category, and date
-   Summary APIs (income, expense, balance)
-   Category-wise summary
-   Recent activity tracking
-   User status toggle

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   JWT

## Setup

1.  Install dependencies: npm install

2.  Create .env file: MONGO_URI=your_mongo_url JWT_SECRET=your_secret
    PORT=3000

3.  Run server: npm start

## Authentication

Use token from login in headers: Authorization: Bearer your_token_here

## APIs--->

### Auth

POST /api/auth/register\
POST /api/auth/login

### Records

POST /api/records\
GET /api/records\
PUT /api/records/:id\
DELETE /api/records/:id

### Summary

GET /api/summary\
GET /api/summary/category\
GET /api/summary/recent

### User

PATCH /api/users/:id/status

## Testing

Use Postman: 1. Login → get token 2. Add token in headers 3. Test APIs

## Conclusion

This project demonstrates backend concepts like authentication,
authorization, and data handling using MongoDB.
