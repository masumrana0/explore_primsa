import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const upsertUser = async () => {
  const result = await prisma.user.upsert({
    where: { id: 1 },
    update: { name: "User no 1" },
    create: {
      name: "User no 1",
      email: "user1@gmail.com",
      password: "password",
    },
  });
  console.log(result);
};

// upsertUser();
