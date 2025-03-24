import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const deleteUser = async () => {
    // const result = await prisma.user.delete({
    //     where: { id: 3 },
    // });

    const result = await prisma.user.deleteMany({
        where: { id: { in: [4,5,6] } },
    });
    console.log(result);
}

// deleteUser();