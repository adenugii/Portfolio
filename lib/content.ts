import { Github, Linkedin, Mail } from "lucide-react";
import { FaJava, FaAws } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiFramer, SiHtml5, SiCss3, SiVuedotjs, 
  SiNodedotjs, SiPhp, SiLaravel, SiCplusplus, 
  SiPython, SiTensorflow, SiKotlin, SiJetpackcompose, 
  SiSolidity, SiWeb3Dotjs, 
  SiMysql, SiMongodb, SiFirebase, 
  SiDocker, SiGit, SiPostman,
  SiAndroid 
} from "react-icons/si";

export const HERO_DATA = {
  name: "Ade Nugroho",
  role: "Software Engineer | Front-End & Mobile Specialist",
  location: "Batu, East Java, ID",
  status: "Open for Front-End Internships",
  summary: "High-achieving Computer Science student with a deep passion for crafting exceptional digital experiences. As a Front-End & Mobile specialist, I bridge the gap between creative design and robust engineering, dedicating myself to building pixel-perfect, accessible, and interactive interfaces that users love.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/adenugii",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adenugroho",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:adenugroho3112@gmail.com",
      icon: Mail,
    },
  ],
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
  // --- ROW 1: Mobile Expert (Big) + Web3 (Small) ---
  {
    title: "PrediAI - Medical System",
    description: "Native Android app featuring a seamless Jetpack Compose UI integrated with Deep Learning for real-time disease detection.",
    tags: ["Kotlin", "TensorFlow", "Jetpack Compose"],
    link: "https://github.com/dzikrimr/prediai-app",
    featured: true, // BESAR (Kiri)
    award: "🏆 Finalist GEMASTIK 2025", 
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "SENTINEL Marketplace",
    description: "Blockchain-based marketplace ensuring product authenticity via immutable digital warranties.",
    tags: ["Solidity", "Next.js", "Web3"],
    link: "https://github.com/adenugii/sentinel",
    featured: false, // KECIL (Kanan)
    gradient: "from-purple-500/20 to-indigo-500/20"
  },

  // --- ROW 2: AI EdTech (Small) + Creative Frontend (Big) ---
  {
    title: "Qnectify - AI EdTech",
    description: "Interactive learning platform with auto-generated quizzes and gamified UI elements.",
    tags: ["Next.js", "OpenAI API", "Gamification"],
    link: "https://github.com/adenugii/qnectify",
    featured: false, // KECIL (Kiri)
    award: "🏅 Honorable Mention HOLOGY 8.0", 
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    title: "SlotReality",
    description: "Satirical web simulation regarding gambling risks. Won 2nd Place for Best Front-End Implementation.",
    tags: ["Next.js", "Framer Motion", "Simulation"],
    link: "https://github.com/adenugii/slotreality",
    featured: true, // BESAR (Kanan)
    award: "🥈 2nd Place ITECHNO CUP 2025", 
    gradient: "from-yellow-500/20 to-amber-500/20"
  },

  // --- ROW 3: Accessibility Expert (Big) + CMS (Small) ---
  {
    title: "EasyGo - Inclusive Maps",
    // Kita buat ini FEATURED karena skill Accessibility (WCAG) sangat dicari recruiter Front-End
    description: "Accessible mapping platform designed with WCAG standards to help people with disabilities locate friendly facilities.",
    tags: ["React", "Maps API", "WCAG"],
    link: "https://github.com/muktiabdii/easygo-web",
    featured: true, // BESAR (Kiri) - Menyeimbangkan Grid
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
  {
    title: "Karangrejo Digital Village",
    description: "Modern digital profile for Desa Karangrejo focused on responsive design and SEO.",
    tags: ["Next.js", "SEO", "CMS"],
    link: "https://github.com/adenugii/WebKarangrejo",
    featured: false, // KECIL (Kanan)
    gradient: "from-sky-500/20 to-blue-500/20"
  }
];

export const EXPERIENCE = [
  {
    role: "Front-End Engineer (AI Project)",
    company: "Integrated Service Laboratory - Universitas Brawijaya",
    period: "Dec 2025 - Present",
    description: "Leading the Front-End development for an intelligent chatbot integration. Focused on crafting a conversational UI, ensuring accessibility, and seamless NLP integration.",
    type: "work"
  },
  {
    role: "Bachelor of Computer Science",
    company: "Universitas Brawijaya",
    period: "2023 - Present",
    description: "GPA: 3.85. Specialized in Software Engineering. Active in Front-End research and national UI/UX competitions.",
    type: "education"
  },
  {
    role: "Laboratory Assistant",
    company: "Fakultas Ilmu Komputer (FILKOM) UB",
    period: "Aug 2025 - Dec 2025",
    description: "Teaching Assistant for 'Web Application Development'. Mentored 50+ students on Modern Web Technologies (React, DOM manipulation, CSS).",
    type: "work"
  }
];

export const AWARDS = [
  {
    title: "Finalist - Software Development",
    event: "GEMASTIK 2025",
    year: "2025",
    description: "National ICT Competition by Ministry of Education. Created innovative software solution for healthcare."
  },
  {
    title: "2nd Place - Front-End Dev",
    event: "ITECHNO CUP 2025 - Politeknik Negeri Jakarta",
    year: "2025",
    description: "Competed in crafting responsive and accessible user interfaces."
  },
  {
    title: "1st Honorable Mention",
    event: "HOLOGY 8.0 - Universitas Brawijaya",
    year: "2025",
    description: "Recognized for outstanding software engineering practices and product innovation."
  }
];

export const SKILLS = [
  // --- Frontend Core ---
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },

  // --- Mobile & AI ---
  { name: "Android", icon: SiAndroid },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Jetpack Compose", icon: SiJetpackcompose },
  { name: "TensorFlow", icon: SiTensorflow },

  // --- Backend & Languages ---
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Java", icon: FaJava },       
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  
  // --- Database & Cloud ---
  { name: "MySQL", icon: SiMysql },      
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "AWS", icon: FaAws },        

  // --- Web3 & Tools ---
  { name: "Solidity", icon: SiSolidity },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
];