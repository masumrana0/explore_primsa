import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rowQuery = async () => {
  //   const result = await prisma.$queryRaw`SELECT * FROM users  WHERE age <20`;
  const result = await prisma.$queryRaw` truncate table post_categories  CASCADE`;
  console.log(result);
};

rowQuery();
