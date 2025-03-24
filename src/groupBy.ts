import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const result = await prisma.user.groupBy({
    by: ["age"],
    // _avg: {
    //   age: true,
    // },
    // _sum: {
    //   age: true,
    // },
    // _min: {
    //   age: true,
    // },
    // _max: {
    //   age: true,
    // },
    having:{
        age:{
            // gt: 19,
            lt: 30
        }
    },
    _count: true,
  });
  console.log(result);
};

groupBy();
