import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query: ", e.query);
  console.log("duration: ", e.duration, "ms");
  console.log("params: ", e.params);
});
const filter = async () => {
  //   const result = await prisma.user.findMany({
  //     where: {
  //       Post: {
  //         some: {
  //           published: true,
  //         },
  //       },
  //     },
  //     select: {
  //       Post: true,
  //     },
  //   });

  // and  filter

  //   const result = await prisma.user.findMany({
  //     include: {
  //       Post: {
  //         where: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });

  //   AND FILTER : IT'S WILL BE MATCH ALL CONDITION THEN IT WILL RETURN DATA

  //   const result = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "1",
  //           },
  //         },

  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  // OR FILTER : IT'S WILL BE MATCH ANY ONE CONDITION THEN IT WILL RETURN DATA
  //   const result = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "1",
  //           },
  //         },

  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  // NOT FILTER :IT'S WILL NOT MATCH CONDITION THEN IT WILL RETURN DATA
  //   const result = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           content: {
  //             contains: "Content",
  //           },
  //         },
  //       ],
  //     },
  //   });

  // STARTSWITH FILTER : IT'S WILL BE MATCH STARTING STRING THEN IT WILL RETURN DATA

  //   const result = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "b",
  //       },
  //     },
  //   });

  // ENDSWITH FILTER : IT'S WILL BE MATCH ENDING STRING THEN IT WILL RETURN DATA
  const result = await prisma.user.findMany({
    where: {
      name: {
        endsWith: "e",
      },
    },
  });

  console.log(result);
};

// filter();
