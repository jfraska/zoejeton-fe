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
        key: "lockscreen",
        value: {
          heading: "Zoe & Jeton",
          subheading: "We invite you to our wedding ceremony",
          background: ["7.heic"],
        },
      },
      {
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
            time: "12.00 - 14.00",
            loc: "Grand Hotel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam eu turpis molestie",
          },
          resepsi: {
            date: "Maret 10 2024",
            time: "12.00 - 14.00",
            loc: "Grand Hotel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam eu turpis molestie",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "Jeton Hizaya",
            desc: "Putra dari Bapak Demak Parsaoran (Alm) & Ibu Ratnawati Hutauruk",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "Zoe Himaya",
            desc: "Putri dari Bpk M Syarik & Ibu Isharni",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          story1: {
            heading: "Semarang, 19 Juni 2021",
            subheading:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          date: "Minggu, 30 Juni 2023",
          time: "12.00 - 14.00",
          link: "https://youtube.com",
          background: ["4.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Thank You",
          subheading:
            "Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada kami.",
          background: ["8.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#fff",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#fff",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#000",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#000",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#000",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#fff",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#000",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
        key: "cover",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
      },
      {
        key: "beranda",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "event",
        value: {
          akad: {
            date: "Maret 10 2024",
          },
          resepsi: {
            date: "Maret 10 2024",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "couple",
        value: {
          groom: {
            name: "jeton",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
          bride: {
            name: "zoe",
            image: "5.heic",
            instagram: "https://instagram.com",
          },
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "love story",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "galery",
        value: {
          heading: "Our Galery",
          image1: "5.heic",
          image2: "5.heic",
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "live streaming",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          link: "https://youtube.com",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
      {
        key: "thanks",
        value: {
          heading: "Zoe & Jeton",
          subheading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
          background: ["5.heic"],
        },
        visible: {
          disable: false,
          group: [],
        },
      },
    ],
    color: [
      {
        key: "natural",
        value: {
          primary: "#263234",
          "primary-text": "#fff",
          secondary: "#9D9E9A",
          "secondary-text": "#fff",
          accent: "#ff4081",
          "accent-text": "#fff",
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
