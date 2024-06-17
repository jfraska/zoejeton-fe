const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const templateData = [
  {
    title: "Minimalis",
    slug: "minimalis",
    thumbnail: "thumbnail.jpg",
    discount: 20000,
    price: 150000,
    category: "Premium",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: "bg1.jpg",
        },
      },
      {
        key: "event",
        value: {
          akad: "Maret 10, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Jeton",
          bride: "Zoe",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
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
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Nostalgia",
    slug: "nostalgia",
    thumbnail: "thumbnail.jpg",
    price: 120000,
    discount: 0,
    category: "Basic",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: "bg1.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "Maret 10, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Jeton",
          bride: "Zoe",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
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
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Vintage",
    slug: "vintage",
    thumbnail: "thumbnail.jpg",
    price: 130000,
    discount: 15000,
    category: "Premium",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Experience the charm of vintage aesthetics with a touch of modern elegance.",
          background: "bg2.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "April 15, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Michael",
          bride: "Sarah",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#f5f5dc",
          foreground: "#8b4513",
          primary: "#c0c0c0",
          "primary-foreground": "#000",
          secondary: "#808080",
          "secondary-foreground": "#fff",
          accent: "#ff6347",
          "accent-foreground": "#fff",
          card: "#ffffff",
          "card-foreground": "#000",
        },
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Modern Chic",
    slug: "modern-chic",
    thumbnail: "thumbnail.jpg",
    price: 140000,
    discount: 10000,
    category: "Premium",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Sleek and stylish, perfect for the contemporary couple.",
          background: "bg3.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "June 20, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "David",
          bride: "Emily",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#ffffff",
          foreground: "#333333",
          primary: "#ff1493",
          "primary-foreground": "#fff",
          secondary: "#ffa500",
          "secondary-foreground": "#000",
          accent: "#32cd32",
          "accent-foreground": "#fff",
          card: "#f0f8ff",
          "card-foreground": "#000",
        },
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Rustic",
    slug: "rustic",
    thumbnail: "thumbnail.jpg",
    price: 110000,
    discount: 5000,
    category: "Basic",
    content: [
      {
        key: "beranda",
        value: {
          desc: "A warm and inviting template inspired by nature.",
          background: "bg4.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "May 30, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Lucas",
          bride: "Emma",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#d2b48c",
          foreground: "#8b4513",
          primary: "#deb887",
          "primary-foreground": "#fff",
          secondary: "#a52a2a",
          "secondary-foreground": "#fff",
          accent: "#ffd700",
          "accent-foreground": "#000",
          card: "#fffaf0",
          "card-foreground": "#000",
        },
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Elegance",
    slug: "elegance",
    thumbnail: "thumbnail.jpg",
    price: 160000,
    discount: 25000,
    category: "Premium",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Elegant and sophisticated design for a timeless celebration.",
          background: "bg5.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "July 5, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "James",
          bride: "Anna",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#ffffff",
          foreground: "#000000",
          primary: "#ff69b4",
          "primary-foreground": "#ffffff",
          secondary: "#b0e0e6",
          "secondary-foreground": "#000000",
          accent: "#dda0dd",
          "accent-foreground": "#ffffff",
          card: "#fffaf0",
          "card-foreground": "#000000",
        },
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Tropical",
    slug: "tropical",
    thumbnail: "thumbnail.jpg",
    price: 125000,
    discount: 15000,
    category: "Basic",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Bring the tropical vibes to your celebration with this lively design.",
          background: "bg6.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "August 18, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Ethan",
          bride: "Olivia",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#00ced1",
          foreground: "#ff6347",
          primary: "#4682b4",
          "primary-foreground": "#ffffff",
          secondary: "#ffa07a",
          "secondary-foreground": "#000000",
          accent: "#9acd32",
          "accent-foreground": "#ffffff",
          card: "#ffffff",
          "card-foreground": "#000000",
        },
      },
    ],
    music: "music.mp3",
  },
  {
    title: "Classic",
    slug: "classic",
    thumbnail: "thumbnail.jpg",
    price: 135000,
    discount: 10000,
    category: "Premium",
    content: [
      {
        key: "beranda",
        value: {
          desc: "Timeless and elegant, perfect for a traditional celebration.",
          background: "bg7.jpg",
        },
      },
      {
        key: "date",
        value: {
          akad: "September 25, 2024",
        },
      },
      {
        key: "couple",
        value: {
          groom: "Henry",
          bride: "Sophia",
        },
      },
    ],
    color: [
      {
        key: "color1",
        value: {
          background: "#f8f8ff",
          foreground: "#000000",
          primary: "#2e8b57",
          "primary-foreground": "#ffffff",
          secondary: "#6b8e23",
          "secondary-foreground": "#ffffff",
          accent: "#4682b4",
          "accent-foreground": "#ffffff",
          card: "#ffffff",
          "card-foreground": "#000000",
        },
      },
    ],
    music: "music.mp3",
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
