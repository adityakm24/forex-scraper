# Forex Scraper

**Forex Scraper** is a full-stack application that scrapes historical forex data from Yahoo Finance, stores it in a database, and presents it in a user-friendly interface. The backend is built with Java Spring Boot, and the frontend is a React-based web application. This project allows users to query historical forex data between specified periods for different currency pairs.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [API Documentation](#api-documentation)
4. [Installation](#installation)
   1. [Backend (Spring Boot)](#backend-spring-boot)
   2. [Frontend (React)](#frontend-react)
5. [Deployment](#deployment)
6. [License](#license)

## Features

- Scrape and display historical forex data
- Store the forex data in a relational database
- Query the data by currency pair and period
- User-friendly frontend interface for querying forex data

## Technologies Used

- **Backend**: Spring Boot, Hibernate, Jsoup for web scraping, H2 Database for local testing, JPA for database interactions.
- **Frontend**: React.js, Chakra UI for styling, Fetch API for consuming the backend services.
- **Database**: H2 (Local), can be replaced with other databases (MySQL, PostgreSQL, etc.)

## API Documentation

Full API documentation is available at [Postman API Documentation](https://documenter.getpostman.com/view/22879272/2sAXxMfD5A).

## Installation

### Backend (Spring Boot)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/adityakm24/forex-scraper.git
    cd forex-scraper
    ```

2. **Set up the database:**
    By default, the application uses an H2 database for local development. If you want to use a different database (like MySQL or PostgreSQL), update the `application.properties` file accordingly.

3. **Run the application:**
    Make sure you have Java 17+ installed.

    ```bash
    ./gradlew bootRun
    ```

    The backend will be available at: `http://localhost:8080`.

4. **H2 Database Console:**
   Access the H2 console at `http://localhost:8080/h2-console` (if enabled). The default credentials are set in the `application.properties`.

### Frontend (React)

1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2. **Install dependencies:**
    Make sure you have Node.js and npm installed, then run:

    ```bash
    npm install
    ```

3. **Start the frontend:**
    ```bash
    npm start
    ```

    The frontend will be available at: `http://localhost:3000`.

## Deployment

### Deploying to Heroku (Backend)

1. **Create a Heroku account** if you don't already have one.
2. **Install the Heroku CLI:**
   Follow the instructions [here](https://devcenter.heroku.com/articles/heroku-cli).

3. **Login to Heroku:**
    ```bash
    heroku login
    ```

4. **Create a new Heroku app:**
    ```bash
    heroku create forex-scraper
    ```

5. **Deploy the backend:**
    ```bash
    git push heroku main
    ```

6. **Set up environment variables (for databases, etc.):**
    ```bash
    heroku config:set DATABASE_URL=your_database_url
    ```

### Deploying the Frontend

The frontend can be deployed to any static hosting provider, such as Vercel, Netlify, or GitHub Pages.

1. **Build the frontend for production:**
    ```bash
    npm run build
    ```

2. **Deploy to Vercel:**
    - Follow the instructions at [https://vercel.com/docs](https://vercel.com/docs).
    - Link your GitHub repository and deploy.

Alternatively, you can deploy it to any static file host by uploading the `build/` folder.


