import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


 

// const createProfile = async () => {
//   const result = await prisma.profile.createMany({
//     data: [
//       { bio: "I am Alice", userid: 1 },
//       { bio: "I am Bob", userid: 2 },
//       { bio: "I am Charlie", userid: 3 },
//       { bio: "I am David", userid: 4 },
//       { bio: "I am Eve", userid: 5 },
//       { bio: "I am Frank", userid: 6 },
//       { bio: "I am Grace", userid: 7 },
//       { bio: "I am Heidi", userid: 8 },
//       { bio: "I am Ivan", userid: 9 },
//       { bio: "I am Judy", userid: 10 },
//       { bio: "I am Karl", userid: 11 },
//       { bio: "I am Leo", userid: 12 },
//       { bio: "I am Mallory", userid: 13 },
//     ],
//   });

//   console.log(result);
// };

// createProfile();

const createPost = async () => {
  const result = await prisma.post.createManyAndReturn({
    data: [
      {
        title: "Post 1",
        content: "Content 1",
        authorId: 1,
        category_id: 1,
      },
      { title: "Post 2", content: "Content 2", authorId: 2, category_id: 1 },
      { title: "Post 3", content: "Content 3", authorId: 3, category_id: 1 },
      { title: "Post 4", content: "Content 4", authorId: 4, category_id: 1 },
      { title: "Post 5", content: "Content 5", authorId: 5, category_id: 1 },
      { title: "Post 6", content: "Content 6", authorId: 6, category_id: 1 },
      { title: "Post 7", content: "Content 7", authorId: 7, category_id: 1 },
      { title: "Post 8", content: "Content 8", authorId: 8, category_id: 1 },
      { title: "Post 9", content: "Content 9", authorId: 9, category_id: 1 },
      { title: "Post 10", content: "Content 10", authorId: 10, category_id: 1 },
      { title: "Post 11", content: "Content 11", authorId: 11, category_id: 1 },
      { title: "Post 12", content: "Content 12", authorId: 12, category_id: 1 },
      { title: "Post 13", content: "Content 13", authorId: 13, category_id: 1 },
    ],
  });

  console.log(result);
};

// createPost();
