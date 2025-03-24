import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a batch transaction
const batchTransection = async () => {
  const createUser = prisma.user.create({
    data: {
      name: "Masum Rana",
      email: "masum3@gmail.com",
      password: "password",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 16,
    },
    data: {
      age: 50,
    },
  });

  //   const result = await prisma.$transaction([createUser, updateUser]);
  const [user, updatedUser] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log({ user, updatedUser });
};

// batchTransection();

// interactiveTransection();
const interactiveTransection = async () => {
  try {
    await prisma.$transaction(async (tx) => {
      // Create User
      const user = await tx.user.create({
        data: {
          name: "Alice",
          email: "alice1@yahoo.com",
          password: "password",
        },
      });

      // Create Profile linked to User
      const profile = await tx.profile.create({
        data: { bio: "I am Alice", userid: user.id }, // Fix: Corrected field name (userId)
      });

      // Create Post Category
      const postCategory = await tx.postCategory.create({
        data: { title: "Category 1" },
      });

      // Create Post linked to User and Post Category
      const post = await tx.post.create({
        data: {
          title: "Post 1",
          content: "Content 1",
          category_id: postCategory.id, // Fix: Ensure category_id is correct
          authorId: user.id, // Fix: Ensure authorId matches the field in your schema
        },
      });
    });

    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// interactiveTransection();
