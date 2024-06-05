const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const templateData = [
  {
    title: "Minimalis",
    slug: "minimalis",
    thumbnail: "/templates/minimalis/thumbnail1.jpg",
    price: 150000,
    discount: 20000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
        background: "/assets/images/bg1.jpg",
      },
      date: {
        akad: "Maret 10, 2024",
      },
      couple: {
        groom: "Jeton",
        bride: "Zoe",
      },
    },
    color: {
      background: "#000",
      foreground: "#fff",
      primary: "#263234",
      "primary-foreground": "#fff",
      secondary: "#9D9E9A",
      "secondary-foreground": "#fff",
      accent: "#ff4081",
      "accent-foreground": "#fff",
      card: "#fff",
      "card-foreground": "#000",
    },
    music: "https://example.com/music1.mp3",
  },
  {
    title: "Nature",
    slug: "nature",
    thumbnail: "/templates/nature/thumbnail2.jpg",
    price: 120000,
    discount: 0,
    category: "Basic",
    content: {
      beranda: {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
        background: "/assets/images/bg1.jpg",
      },
      date: {
        akad: "Maret 10, 2024",
      },
      couple: {
        groom: "Jeton",
        bride: "Zoe",
      },
    },
    color: {
      background: "#fff",
      foreground: "#000",
      primary: "#ff0000",
      "primary-foreground": "#fff",
      secondary: "#00ff00",
      "secondary-foreground": "#000",
      accent: "#0000ff",
      "accent-foreground": "#fff",
      card: "#f0f0f0",
      "card-foreground": "#333",
    },
    music: "https://example.com/music2.mp3",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of templateData) {
    const template = await prisma.template.create({
      data: data,
    });
    console.log(`Created template with id: ${template.id}`);
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
