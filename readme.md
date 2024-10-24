# NeoCura Platform

A healthcare initiative platform where patients can find suitable doctors for both in-person and online consultations, while doctors can register and showcase their qualifications.

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

---

## Prerequisites

Before proceeding with the installation, ensure you have the following installed:

- **Node.js** (Version 20)
  <a href="https://nodejs.org/en/download/prebuilt-installer" target="_blank">Download Node.js</a>  
  Verify installation by typing the following command in your terminal:
  ```bash
  node -v
  ```
- **PostgreSQL** (Version 16.4)
  <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">Download PostgreSQL</a>  

---

## Database Guide

1. Download and install PostgreSQL using the link provided above.
2. During installation, you will be prompted to set a password make sure to remember this.
3. After installation, open **pgAdmin** (PostgreSQL GUI client).
4. Connect to the server (PostgreSQL 16).
5. Create a new database.
6. Once the database is created, right-click on the database and select **Restore**.
7. In the restore menu, select the `db_backup` file provided in the repository.

---

## Environment Variables

Make sure to create a `.env` file in root of your `NeoCura-backend` folder with the following variables:

```bash
NODE_ENV = "development"
PORT = 5000
DATABASE = "DATABSE_NAME"
PASSWORD = "DATABASE_PASSWORD"
```

These environment variables will help to configure the development server and connect to the PostgreSQL database.

---

## Setup Instructions

### 1. Backend Setup

1. Navigate to the `NeoCura-backend` folder in your terminal:
   ```bash
   cd NeoCura-backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
4. Ensure the message **"connected"** appears, confirming a successful database connection.

### 2. Frontend Setup

1. Navigate to the `NeoCura-frontend` folder in your terminal:
   ```bash
   cd NeoCura-frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

Now, your NeoCura platform should be up and running!
