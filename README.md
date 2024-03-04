# E-Commerce Site with NestJS and PostgreSQL

## Overview

This project is an e-commerce site built with NestJS as the backend framework and PostgreSQL as the database. It provides a scalable and modular architecture for developing a feature-rich e-commerce application.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Docker (for running PostgreSQL using Docker Compose)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-nestjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-nestjs-postgresql
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root of the project and configure the following variables:

   ```env
   # Database
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=e_commerce

   # JWT Secret
   JWT_SECRET=your_jwt_secret

   # Port
   PORT=3000
   ```

5. Start PostgreSQL using Docker Compose:

   ```bash
   docker-compose up -d
   ```

6. Run the application:

   ```bash
   npm run start
   ```

   The application should be running at [http://localhost:3000](http://localhost:3000).

## Database Migrations

To run database migrations, use the following command:

```bash
npm run migrate
```

## API Documentation

Explore the API using the Swagger documentation at [http://localhost:3000/api/docs](http://localhost:3000/api/docs).

## Testing

Run tests using:

```bash
npm run test
```

## Contributing

Feel free to contribute to the project. Follow the [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).