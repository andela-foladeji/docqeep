[![Build Status](https://travis-ci.org/andela-foladeji/dms-api.svg)](https://travis-ci.org/andela-foladeji/dms-api)
[![Coverage Status](https://coveralls.io/repos/github/andela-foladeji/dms-api/badge.svg?branch=develop)](https://coveralls.io/github/andela-foladeji/dms-api?branch=develop)
[![Code Climate](https://codeclimate.com/github/andela-foladeji/dms-api/badges/gpa.svg)](https://codeclimate.com/github/andela-foladeji/dms-api)

# Document Managemet System
Document Management System API contains several APIs that allows users to create, edit, retrieve and delete documents. It also offers a way to ensure that only authroized users can perform certain operations.

Development
-----------
The application was developed with [NodeJs](http://nodejs.org) while using [Express](http://expressjs.com) for routing. The [Postgres](http://postgresql.com) database was used with [sequelize](http://sequelizejs.com) as the ORM

Installation
------------
1.  Ensure you have NodeJs and postgres installed
2.  Clone the repository `git clone git@github.com:andela-foladeji/dms-api.git`
3.  Change your directory `cd dms-api`
4.  Install all dependencies `npm install`
5.  Run tests  `npm test`
6.  Start the app `npm start` and use [postman](https://www.getpostman.com/) to consume the API

## API ENDPOINTS
**Users**

Request type | Endpoint | Action 
------------ | -------- | ------
POST | /users | Create a new user
GET | /users | Get all users
GET | /users:id | Get details of a specific user
PUT | /users/:id | Edit user details
DELETE | /users/:id | Remove a user from storage

**Roles**

Request type | Endpoint | Action 
------------ | -------- | ------
POST | /role | Create a new role
GET | /role | Get all created roles

**Documents**

Request type | Endpoint | Action 
------------ | -------- | ------ 
POST | /documents | Create a new document
GET | /documents | Retrieve all documents 
GET | /documents/:id | Retrieve a specific document
GET | /users/:id/documents | Retrieve all documents created by a user
GET | /documents/page=1&limit=10 | Retrieve maximum of first 10 documents
PUT | /documents/:id | Update a specific document
DELETE | /documents/:id | Remove a specific document from storage
