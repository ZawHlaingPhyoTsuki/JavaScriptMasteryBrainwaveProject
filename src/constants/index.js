import { image } from "framer-motion/client";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  html,
  css,
  javascript,
  react,
  python,
  tailwindcss,
  git,
  github,
  webflow,
  wordpress,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  twitterX,
  gitHub,
  linkedin,
  yourlogo,
  
  OnlineShopping,
  VoucherApp,
  TodoList,
} from "../assets";
import { color } from "framer-motion";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about-me",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Innovations",
    url: "#innovations",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Template Selection",
  "Drag-and-Drop Functionality",
  "Customizable Styling Options",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Dark Mode",
    text: "Implement a dark mode toggle for better accessibility and user comfort, especially during night-time browsing.",
    date: "May 2023",
    status: true,
    imageUrl: roadmap1,
  },
  {
    id: "1",
    title: "User Authentication",
    text: "Add secure login and registration features to provide a personalized user experience.",
    date: "May 2023",
    status: false,
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Mobile Optimization",
    text: "Further optimize projects and platforms for seamless mobile use, ensuring consistent performance across all devices.",
    date: "May 2023",
    status: false,
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Content Management System (CMS)",
    text: "Enable users to manage and update content directly from the platform without needing technical knowledge.",
    date: "May 2023",
    status: false,
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Combining skills in frontend technologies with ongoing education in backend frameworks to create full-stack applications.";

export const collabContent = [
  {
    id: "0",
    title: "Building modern, responsive web applications",
    text: "Utilizing the latest technologies to ensure optimal performance and user experience across devices.",
  },
  {
    id: "1",
    title: "Experienced in frontend and now learning backend development",
  },
  {
    id: "2",
    title: "Proficient in React, Tailwind, and JavaScript",
  },
];

export const skillIcons = [
  {
    id: "0",
    title: "HTML",
    icon: html,
    width: 34,
    height: 36,
  },
  {
    id: "1",
    title: "CSS",
    icon: css,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Javascript",
    icon: javascript,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "TailwindCSS",
    icon: tailwindcss,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "React",
    icon: react,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Python",
    icon: python,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Git",
    icon: git,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Webflow",
    icon: webflow,
    width: 38,
    height: 32,
  },
];

export const project = [
  {
    id: "0",
    title: "Food Delivery",
    description:
      "A MERN stack application that streamlines food delivery processes, allowing restaurants to manage orders and customers to track their deliveries easily.",
    image: VoucherApp,
    url: "https://mernfooddeliverywebsite-frontend.onrender.com/",
    features: [
      "User authentication for secure access to accounts",
      "User-friendly interface for tracking orders and delivery status",
      "Integration of payment gateways for seamless transactions using Stripe",
    ],
    color: "text-color-2",
  },
  {
    id: "1",
    title: "E-Commence",
    description:
      "A fully functional e-commerce platform  to manage product listings and orders",
    image: OnlineShopping,
    url: "https://tsukuyomi-ecommercesite.netlify.app/",
    features: [
      "Easy-to-use dashboard for adding and managing productss",
      "Seamless checkout process",
      "Order tracking and history for users",
    ],
    color: "text-color-1",
  },
  {
    id: "2",
    title: "Todo App",
    description: "A productivity app to help users manage tasks efficiently",
    image: TodoList,
    url: "https://tsukuyomi-todolistsite.netlify.app/",
    features: [
      "Add, edit, and delete tasks with ease",
      "Task prioritization and reminders",
      " A clean, user-friendly interface",
    ],
    color: "text-color-3",
  },
];

export const benefits = [
  {
    id: "0",
    title: "About me ",
    text: "I’m a Computer Science student majoring in Digital Technology Innovation, specializing in web development with a focus on React and full-stack applications.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Learning & Building",
    text: "Combining theoretical knowledge with practical projects to grow as a developer.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Frontend Focus",
    text: "Mastering frontend technologies like React, JavaScript, and Tailwind to deliver seamless interfaces.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Full-Stack Journey",
    text: "Transitioning into backend development with Node.js and MongoDB to become a full-stack developer.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Creative Coding",
    text: "Crafting unique solutions to everyday problems through code.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Tech Enthusiast",
    text: "Constantly exploring new tools, frameworks, and libraries to stay up to date with industry trends.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
  },
  {
    id: "1",
    title: "TwitterX",
    iconUrl: twitterX,
    url: "https://x.com/ZawHlaingPhyo",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/tsukuyomi1123/",
  },
  {
    id: "3",
    title: "Github",
    iconUrl: gitHub,
    url: "https://github.com/ZawHlaingPhyoTsuki",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/ZawHlaingPhyo.23",
  },
];
