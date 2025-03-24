import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// upsert: update if exists, else create
const updateUser = async () => {
  // const result = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { name: "User no 1" }, // data to be updated
  // });

  const result = await prisma.user.updateMany({
    where: { id: { in: [1, 2, 3] } },
    data: { name: "User no 1" },
  });
//   console.log(result);
};
// updateUser();
