# Prisma Explore

This project explores the usage of Prisma, an ORM (Object-Relational Mapping) tool for Node.js and TypeScript. Prisma helps in writing type-safe database queries and managing database schemas efficiently.

## Prisma Commands

Here are some essential Prisma commands and their descriptions:

- `npx prisma generate`: Generates type-safe code based on the provided model.
- `npx prisma migrate`: Applies migrations and ensures type safety both.
- `npx prisma validate`: Validates the schema.
- `npx prisma format`: Formats the code.
- `npx prisma db pull --print`: Checks the existing schema in the database.
- `npx prisma db push`: Pushes the schema to the database without applying migrations.

## Getting Started

To get started with Prisma in this project, follow these steps:

1. Install the necessary dependencies:

   ```sh
   npm install @prisma/client
   npm install prisma --save-dev
   ```

2. Initialize Prisma in your project:

   ```sh
   npx prisma init
   ```

3. Define your data model in the `prisma/schema.prisma` file.

4. Run the following commands as needed to manage your database and generate type-safe code:

   - Generate Prisma Client:

     ```sh
     npx prisma generate
     ```

   - Apply migrations:

     ```sh
     npx prisma migrate dev --name init
     ```

   - Validate the schema:

     ```sh
     npx prisma validate
     ```

   - Format the Prisma schema file:

     ```sh
     npx prisma format
     ```

   - Pull the existing schema from the database:

     ```sh
     npx prisma db pull --print
     ```

   - Push the schema to the database:
     ```sh
     npx prisma db push
     ```

For more information, refer to the [Prisma documentation](https://www.prisma.io/docs/).
