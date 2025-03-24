import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async () => {
  // opset pagination  - skip and take
  const opsetData = await prisma.user.findMany({
    skip: 5,
    take: 1,
  });
  //   console.log(opsetData);

  // cursor pagination - cursor :  i'ts like a pointer to the data  which id or data you want to start from and if skip is not provided then it will start from the first data otherwise it will start from the data which is provided in the cursor
  const cursorData = await prisma.user.findMany({
    cursor: {
      id: 10,
    },
    skip: 5,
    take: 1,
  });

  //   console.log(cursorData);

  const sortedData = await prisma.user.findMany({
    orderBy: {
      // it will sort the data in ascending order
      id: "desc", // it will sort the data in ascending order
    },
  });

//   console.log(sortedData);
};

// getAllUsers();
