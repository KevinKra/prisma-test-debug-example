import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      acceptTermsAndConditions: true,
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
