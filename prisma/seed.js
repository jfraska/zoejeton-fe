const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const invitationData = [
  {
    title: "default",
    content: {
      beranda: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
        background: "/assets/images/bg1.jpg",
      },
      date: {
        akad: "maret, 10, 2024",
      },
      couple: {
        groom: "Jeton",
        bride: "Zoe",
      },
    },
    published: true,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of invitationData) {
    const invitation = await prisma.invitation.create({
      data: data,
    });
    console.log(`Created invitation with id: ${invitation.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
