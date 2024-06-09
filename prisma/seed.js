const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const templateData = [
  {
    title: "Minimalis",
    slug: "minimalis",
    thumbnail: "/templates/minimalis/thumbnail.jpg",
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
    music: "/templates/minimalis/music1.mp3",
  },
  {
    title: "Nostalgia",
    slug: "nostalgia",
    thumbnail: "/templates/nostalgia/thumbnail.jpg",
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
    music: "/templates/minimalis/music1.mp3",
  },
  {
    title: "Vintage",
    slug: "vintage",
    thumbnail: "/templates/vintage/thumbnail.jpg",
    price: 130000,
    discount: 15000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Experience the charm of vintage aesthetics with a touch of modern elegance.",
        background: "/assets/images/bg2.jpg",
      },
      date: {
        akad: "April 15, 2024",
      },
      couple: {
        groom: "Michael",
        bride: "Sarah",
      },
    },
    color: {
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
    music: "/templates/vintage/music2.mp3",
  },
  {
    title: "Modern Chic",
    slug: "modern-chic",
    thumbnail: "/templates/modern-chic/thumbnail.jpg",
    price: 140000,
    discount: 10000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Sleek and stylish, perfect for the contemporary couple.",
        background: "/assets/images/bg3.jpg",
      },
      date: {
        akad: "June 20, 2024",
      },
      couple: {
        groom: "David",
        bride: "Emily",
      },
    },
    color: {
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
    music: "/templates/modern-chic/music3.mp3",
  },
  {
    title: "Rustic",
    slug: "rustic",
    thumbnail: "/templates/rustic/thumbnail.jpg",
    price: 110000,
    discount: 5000,
    category: "Basic",
    content: {
      beranda: {
        desc: "A warm and inviting template inspired by nature.",
        background: "/assets/images/bg4.jpg",
      },
      date: {
        akad: "May 30, 2024",
      },
      couple: {
        groom: "Lucas",
        bride: "Emma",
      },
    },
    color: {
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
    music: "/templates/rustic/music4.mp3",
  },
  {
    title: "Elegance",
    slug: "elegance",
    thumbnail: "/templates/elegance/thumbnail.jpg",
    price: 160000,
    discount: 25000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Elegant and sophisticated design for a timeless celebration.",
        background: "/assets/images/bg5.jpg",
      },
      date: {
        akad: "July 5, 2024",
      },
      couple: {
        groom: "James",
        bride: "Anna",
      },
    },
    color: {
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
    music: "/templates/elegance/music5.mp3",
  },
  {
    title: "Tropical",
    slug: "tropical",
    thumbnail: "/templates/tropical/thumbnail.jpg",
    price: 125000,
    discount: 15000,
    category: "Basic",
    content: {
      beranda: {
        desc: "Bring the tropical vibes to your celebration with this lively design.",
        background: "/assets/images/bg6.jpg",
      },
      date: {
        akad: "August 18, 2024",
      },
      couple: {
        groom: "Ethan",
        bride: "Olivia",
      },
    },
    color: {
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
    music: "/templates/tropical/music6.mp3",
  },
  {
    title: "Classic",
    slug: "classic",
    thumbnail: "/templates/classic/thumbnail.jpg",
    price: 135000,
    discount: 10000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Timeless and elegant, perfect for a traditional celebration.",
        background: "/assets/images/bg7.jpg",
      },
      date: {
        akad: "September 25, 2024",
      },
      couple: {
        groom: "Henry",
        bride: "Sophia",
      },
    },
    color: {
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
    music: "/templates/classic/music7.mp3",
  },
  {
    title: "Bohemian",
    slug: "bohemian",
    thumbnail: "/templates/bohemian/thumbnail.jpg",
    price: 140000,
    discount: 20000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Free-spirited and artistic design for a unique celebration.",
        background: "/assets/images/bg8.jpg",
      },
      date: {
        akad: "October 12, 2024",
      },
      couple: {
        groom: "Chris",
        bride: "Jessica",
      },
    },
    color: {
      background: "#ffebcd",
      foreground: "#8b0000",
      primary: "#8b008b",
      "primary-foreground": "#ffffff",
      secondary: "#ff7f50",
      "secondary-foreground": "#000000",
      accent: "#7fffd4",
      "accent-foreground": "#000000",
      card: "#ffffff",
      "card-foreground": "#000000",
    },
    music: "/templates/bohemian/music8.mp3",
  },
  {
    title: "Urban",
    slug: "urban",
    thumbnail: "/templates/urban/thumbnail.jpg",
    price: 145000,
    discount: 15000,
    category: "Premium",
    content: {
      beranda: {
        desc: "Modern and chic, perfect for a city wedding.",
        background: "/assets/images/bg9.jpg",
      },
      date: {
        akad: "November 22, 2024",
      },
      couple: {
        groom: "Daniel",
        bride: "Ava",
      },
    },
    color: {
      background: "#ffffff",
      foreground: "#333333",
      primary: "#ff4500",
      "primary-foreground": "#ffffff",
      secondary: "#ffa500",
      "secondary-foreground": "#000000",
      accent: "#32cd32",
      "accent-foreground": "#ffffff",
      card: "#f5f5f5",
      "card-foreground": "#333333",
    },
    music: "/templates/urban/music9.mp3",
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
