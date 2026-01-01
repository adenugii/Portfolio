import { Github, Linkedin, Mail } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiFramer, SiHtml5, SiCss3, 
  SiNodedotjs, SiFirebase, SiKotlin, SiJetpackcompose, 
  SiSolidity, SiPostman, SiAndroid, SiGreensock, 
  SiDocker, SiGit 
} from "react-icons/si";

export const HERO_DATA = {
  name: "Ade Nugroho",
  role: "Front-End Developer | Interactive Experiences",
  location: "Malang, East Java, ID",
  status: "Open for Front-End Internships",
  summary: "Information Technology undergraduate specializing in Front-End Engineering. Focused on building highly interactive and data-driven web interfaces using Next.js and TypeScript. Experienced in optimizing rendering performance for animation-heavy applications and architecting complex state logic for real-time data synchronization.",
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
  // --- PROJECT 1: SlotReality ---
  {
    title: "SlotReality",
    slug: "slotreality",
    description: "Interactive simulation winning 2nd Place at ITECHNO CUP. Features fluid GSAP animations and high-fidelity responsive design.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    link: "https://slot-reality.vercel.app/",
    repo: "https://github.com/adenugii/SlotReality",
    featured: true,
    award: "🥈 2nd Place ITECHNO CUP", 
    gradient: "from-yellow-500/20 to-amber-500/20",
    detail: {
      shortOverview: "An interactive web platform designed to raise public awareness about the dangers and psychological traps of online gambling. Developed under a strict 5-hour hackathon deadline, this project uses experiential learning to let users feel the mechanism of addiction rather than just reading about it.",
      problem: "Online gambling addiction is a rising crisis in Indonesia, often fueled by misleading visuals and 'near-miss' psychology. Traditional education methods (text/lectures) are boring and fail to capture the emotional descent into addiction. The challenge was to create an impactful digital campaign in just 5 hours.",
      solution: "We built 'SlotReality', a high-fidelity web experience that simulates a slot machine to demonstrate rigged odds. Unlike real gambling sites, this simulation reveals the mathematical improbability of winning. It combines gamification with hard data (divorce rates, demographics) to break the cycle of curiosity.",
      features: [
        "The Illusion of Winning (Simulated Mini-Game)",
        "Interactive Data Visualization Map of Indonesia",
        "Emotional Storytelling & Scrollytelling",
        "Digital Literacy Center & Helper Hotline",
        "High-Fidelity UI/UX with Parallax Effects"
      ],
      techStack: [
        { name: "Next.js 14", icon: "SiNextdotjs", purpose: "Framework for component architecture and performance." },
        { name: "GSAP", icon: "SiGreensock", purpose: "Complex timeline animations for the slot machine mechanics." },
        { name: "Framer Motion", icon: "SiFramer", purpose: "Smooth layout transitions and entry animations." },
        { name: "Tailwind CSS", icon: "SiTailwindcss", purpose: "Rapid UI development under tight deadline." }
      ],
      process: [
        { title: "Research & Problem Definition", description: "Analyzed real-world data (Money Kompas, Detik) regarding gambling-induced divorce rates and demographics to form the narrative." },
        { title: "UI/UX Design", description: "Designed the emotional flow, creating assets that shift from 'exciting' to 'distressing' to mirror addiction." },
        { title: "Slicing & Layout", description: "Rapidly constructed the static sections (Hero, Map, Game, Footer) using Tailwind CSS." },
        { title: "Animation Implementation", description: "Integrated GSAP for the slot mechanics and Framer Motion/AOS for scroll-triggered storytelling." },
        { title: "Finishing & Presentation", description: "Final code optimization, bug fixing, and preparing the pitch deck for the 5-hour sprint deadline." }
      ],
      challenges: [
        { title: "The 5-Hour Sprint", description: "Building a fully interactive, animated platform with a map and game logic in just 5 hours required extreme coordination and prioritizing core features over nice-to-haves." },
        { title: "Map Visualization", description: "Displaying complex provincial data interactively was technically demanding. We used CSS/SVGs to visualize the spread of gambling cases across Indonesia." }
      ],
      results: "Secured 2nd Place in the National Front-End Development Category at ITechno Cup 2025. The judges praised the 'Experiential Learning' approach where users learn by feeling the loss mechanism firsthand.",
      images: [
        "/projects/slotreality-1.png", 
        "/projects/slotreality-2.png",
        "/projects/slotreality-3.png",
        "/projects/slotreality-4.png",
        "/projects/slotreality-5.png",
        "/projects/slotreality-6.png",
        "/projects/slotreality-7.png",
        "/projects/slotreality-8.png",
        "/projects/slotreality-9.png",
        "/projects/slotreality-10.png",
        "/projects/slotreality-11.png",
        "/projects/slotreality-12.png",
        "/projects/slotreality-13.png",
        "/projects/slotreality-14.png",
        "/projects/slotreality-15.png",
        "/projects/slotreality-16.png"
      ]
    }
  },

  // --- PROJECT 3: CalorEase ---
  {
     title: "CalorEase",
     slug: "calorease",
     description: "Integrated health platform merging calorie tracking, recipe aggregation, and an AI marketplace assistant.",
     tags: ["Next.js", "Gemini AI", "System Integration"],
     link: "#",
     repo: "https://github.com/dzikrimr/CalorEase",
     featured: false,
     gradient: "from-orange-500/20 to-red-500/20",
     detail: {
        shortOverview: "A unified health ecosystem that integrates multiple external services into a single platform. It combines calorie tracking with real-time recipe fetching, a healthy product marketplace, and an intelligent AI assistant.",
        problem: "Health enthusiasts often face a fragmented experience, switching between calorie trackers, recipe websites, and e-commerce platforms. Integrating these disparate data sources (recipes, products, user data) into a cohesive, responsive system without performance bottlenecks is a major challenge in system integration.",
        solution: "I engineered a monolithic Next.js application that acts as a central hub. The system aggregates data from third-party Recipe and Marketplace APIs, normalizing inconsistent data structures into a unified UI. A Gemini-powered AI chatbot was integrated to act as a personalized health consultant, bridging the gap between data and user guidance.",
        features: [
            "Smart Recipe Finder (Integrated Public API)", 
            "Healthy Marketplace (Integrated Public API)", 
            "AI Health Consultant (Gemini AI)",
            "Unified Monolithic Architecture"
        ],
        techStack: [
             { name: "Next.js", icon: "SiNextdotjs", purpose: "Fullstack framework handling both Frontend UI and Backend logic." },
             { name: "Gemini API", icon: "SiPostman", purpose: "Generative AI for interactive user assistance." },
             { name: "REST API", icon: "SiPostman", purpose: "Integration with external Recipe & Marketplace services." },
             { name: "Tailwind", icon: "SiTailwindcss", purpose: "Rapid, responsive UI development." }
        ],
        process: [
            { title: "Research & Analysis", description: "Analyzed available public APIs for recipes and products to define system requirements." },
            { title: "UI/UX Design", description: "Designed a cohesive interface to display diverse data types seamlessly." },
            { title: "Slicing & UI Dev", description: "Implemented the design into code using Tailwind CSS and React components." },
            { title: "Logic & Integration", description: "Developed the core logic and integrated external APIs with error handling." },
            { title: "Finishing & QA", description: "Refining the AI prompts and ensuring data consistency across the app." },
            { title: "Final Presentation", description: "Demonstrated the system architecture and integration flow." }
        ],
        challenges: [
            { title: "Data Normalization", description: "External APIs returned inconsistent JSON structures. I implemented an adapter layer in Next.js to standardize data before it reached the frontend." },
            { title: "AI Hallucination", description: "The chatbot sometimes gave generic advice. I improved this by tuning the system prompt to act specifically as a nutritionist context-aware assistant." }
        ],
        results: "Submitted as the Final Project for the 'System Integration Technology' course, achieving a perfect score (Grade A). The project successfully demonstrated complex API aggregation and AI implementation.",
        images: [
          "/projects/calorease-1.png",
          "/projects/calorease-2.png",
          "/projects/calorease-3.png",
          "/projects/calorease-4.png",
          "/projects/calorease-5.png",
          "/projects/calorease-6.png",
          "/projects/calorease-7.png",
          "/projects/calorease-8.png",
          "/projects/calorease-9.png",
          "/projects/calorease-10.png",
          "/projects/calorease-11.png",
          "/projects/calorease-12.png",
          "/projects/calorease-13.png",
        ]
     }
  },

  // --- PROJECT 4: EasyGo ---
  {
    title: "EasyGo - Inclusive Maps",
    slug: "easygo",
    description: "Crowdsourced mapping platform with voice search and admin moderation for disability-friendly facilities.",
    tags: ["React", "Leaflet", "Firebase"],
    link: "https://easygoid.netlify.app/",
    repo: "https://github.com/muktiabdii/easygo-web",
    video: "https://www.youtube.com/watch?v=ePuniTHnorA&t=1s",
    featured: false,
    gradient: "from-teal-500/20 to-cyan-500/20",
    detail: {
        shortOverview: "An accessible crowdsourcing platform designed to help people with disabilities find facilities that meet their specific needs. Built with OpenStreetMap, it features a rigorous verification system to ensure data accuracy and prevent misinformation.",
        problem: "People with disabilities often face uncertainty when visiting new places because mainstream map apps lack granular accessibility details (e.g., ramp availability, tactile paving, accessible toilets). Furthermore, open crowdsourcing platforms are often prone to spam or inaccurate 'troll' data.",
        solution: "We engineered a web-based mapping solution using Leaflet.js and OpenStreetMap. Users can pin locations and add detailed accessibility info, which is stored in Firebase. To guarantee reliability, we implemented a dual-layer system where submissions remain pending until verified via an Admin Dashboard. The app also features speech-to-text search for broader accessibility.",
        features: [
            "Interactive Map (Leaflet & OpenStreetMap)", 
            "Crowdsourced Data with Admin Moderation", 
            "Speech-to-Text Search Navigation", 
            "Fastest Route Calculation"
        ],
        techStack: [
            { name: "React", icon: "SiReact", purpose: "Frontend UI Library." },
            { name: "Leaflet.js", icon: "SiJavascript", purpose: "Lightweight open-source map rendering." },
            { name: "Firebase", icon: "SiFirebase", purpose: "Realtime Database for locations & Admin Auth." },
            { name: "Web Speech API", icon: "SiHtml5", purpose: "Voice-activated search for hands-free control." }
        ],
        process: [
            { title: "Research & Planning", description: "Identifying accessibility pain points and choosing OpenStreetMap/Leaflet as a cost-effective alternative to Google Maps." },
            { title: "Design & Slicing", description: "Creating high-contrast UI mockups and converting them into responsive React components." },
            { title: "Map Integration", description: "Implementing Leaflet.js to render maps, handle markers, and capture coordinates." },
            { title: "Logic Development", description: "Building the contribution flow: User submission -> Firebase Storage -> Admin Verification Dashboard." },
            { title: "Supporting Features", description: "Integrating OSRM for fastest route calculation and Web Speech API for voice search." },
            { title: "Finishing & Presentation", description: "Final QA testing, performance optimization, and presenting the project to achieve a perfect Grade A." }
        ],
        challenges: [
            { title: "Data Integrity", description: "Preventing false information/trolls. We solved this by creating a holding area in Firebase where data stays 'pending' until an Admin verifies it." },
            { title: "Routing Logic", description: "Calculating the fastest route on a custom map layer required integrating OSRM (Open Source Routing Machine) services." }
        ],
        results: "Achieved a perfect score (Grade A) in the 'Advanced Web Application Development' course. The platform successfully demonstrates a scalable, cost-effective solution for inclusive navigation.",
        images: [
          "/projects/easygo-1.png",
          "/projects/easygo-2.png",
          "/projects/easygo-3.png",
          "/projects/easygo-4.png",
          "/projects/easygo-5.png"
        ]
     }
  },

  // --- PROJECT 2: PrediAI ---
  {
    title: "PrediAI - Medical System",
    slug: "prediai",
    description: "Non-invasive diabetes detection app using Deep Learning (MobileNetV2). Top 20 Finalist at GEMASTIK XVIII.",
    tags: ["Kotlin", "Jetpack Compose", "FastAPI"],
    link: "#", 
    repo: "https://github.com/dzikrimr/prediai-app",
    featured: true, // BESAR (2 Kolom)
    award: "🏆 Top 20 GEMASTIK XVIII", 
    gradient: "from-blue-500/20 to-cyan-500/20",
    detail: {
      shortOverview: "A revolutionary mobile health application designed for non-invasive early diabetes screening. Developed for the National GEMASTIK XVIII competition, PrediAI uses Deep Learning to analyze visual biomarkers on the tongue and nails, eliminating the need for painful needles.",
      problem: "Traditional diabetes testing requires invasive blood sampling (needles), causing pain and reluctance for many patients. Early detection is often skipped due to fear, cost, or lack of access to medical facilities in remote areas.",
      solution: "We engineered a multi-modal AI system combining YOLO (for object detection) and MobileNetV2 (for classification). Users simply take a photo of their tongue or nail, and the app processes it via a FastAPI backend to predict diabetes risk. This is integrated with a Gemini-powered health assistant for personalized advice.",
      features: [
        "Non-invasive Screening (Tongue & Nail Analysis)",
        "AI Health Assistant (Gemini API)",
        "Lab Report Analysis (OCR + LLM)",
        "Nearby Health Facility Locator (Google Maps)"
      ],
      techStack: [
        { name: "Kotlin", icon: "SiKotlin", purpose: "Native Android development with Jetpack Compose." },
        { name: "FastAPI", icon: "SiPostman", purpose: "Backend service for hosting YOLO & MobileNetV2 models." },
        { name: "TensorFlow", icon: "SiAndroid", purpose: "Deep Learning framework for image classification." },
        { name: "Gemini API", icon: "SiPostman", purpose: "Generative AI for chat assistant and lab analysis." }
      ],
      process: [
        { title: "Research & Dataset", description: "Collected medical datasets for tongue and nail biomarkers linked to hyperglycemia." },
        { title: "Parallel Development", description: "While the AI team trained MobileNetV2/YOLO models, I (Frontend) simultaneously sliced the UI using Jetpack Compose." },
        { title: "System Integration", description: "Connecting the Android frontend to the FastAPI backend and integrating Firebase for auth." },
        { title: "Testing & Validation", description: "Validating model accuracy (F1 Score > 0.90) and ensuring smooth UX flow." },
        { title: "Final Presentation", description: "Pitching the product at the National GEMASTIK XVIII finals." }
      ],
      challenges: [
        { title: "Image Precision", description: "Raw photos often contained noise. We implemented a YOLO Detection Service to precisely crop/localize the tongue and nail area before classification." },
        { title: "Complex Integration", description: "Orchestrating multiple APIs (Maps, YouTube, Gemini, Inference) required a robust Repository pattern in the Android architecture to handle asynchronous states." }
      ],
      results: "Selected as Top 20 National Finalist in GEMASTIK XVIII. The model achieved 94.98% accuracy for nail analysis and 91.07% for tongue analysis.",
      images: [
        "/projects/prediai-1.png",
        "/projects/prediai-2.png",
        "/projects/prediai-3.png"
      ]
    }
  },

  // --- PROJECT 5: Qnectify ---
  {
    title: "Qnectify",
    slug: "qnectify",
    description: "Gamified learning platform integrating Gemini API with a decoupled client-server architecture.",
    tags: ["Next.js", "Node.js", "Gemini API"],
    link: "https://qnectify-cyan.vercel.app/",
    repo: "https://github.com/adenugii/Qnectify",
    featured: true,
    award: "🏅 Honorable Mention",
    gradient: "from-emerald-500/20 to-green-500/20",
    detail: {
        shortOverview: "An AI-powered EdTech platform that automatically generates quizzes from PDF study materials. Built with a decoupled architecture, it uses generative AI to save teachers time and gamifies the student experience to increase engagement.",
        problem: "Teachers spend hours manually creating quizzes from textbooks. Existing auto-generators often produce irrelevant questions or hallucinate facts, leading to poor learning outcomes for students.",
        solution: "We developed a system where the Frontend (Next.js) and Backend are separated to ensure scalability. I integrated the Gemini API with a robust prompt engineering layer to extract accurate questions from uploaded PDFs, while the backend manages the gamification logic (XP, Leaderboards) securely.",
        features: [
            "PDF-to-Quiz Generation", 
            "Gamified Leaderboard System", 
            "Strict AI Error Handling",
            "Decoupled Frontend-Backend"
        ],
        techStack: [
            { name: "Next.js", icon: "SiNextdotjs", purpose: "Frontend UI and Client-side interactions." },
            { name: "Node.js", icon: "SiNodedotjs", purpose: "Backend API logic and Database management." },
            { name: "Gemini API", icon: "SiPostman", purpose: "Generative AI for content creation." },
            { name: "Tailwind", icon: "SiTailwindcss", purpose: "Responsive UI styling." }
        ],
        process: [
            { title: "Research & Analysis", description: "Analyzed the pain points of manual quiz creation and gamification strategies." },
            { title: "Design System", description: "Created high-fidelity designs focusing on an engaging, game-like user interface." },
            { title: "Parallel Development", description: "I worked on Slicing the UI components while simultaneously developing the Backend API endpoints." },
            { title: "API Integration", description: "Fetching data from the backend and connecting the Gemini AI service." },
            { title: "Testing", description: "Validating AI response accuracy and fixing bugs in the scoring logic." },
            { title: "Finishing & Presentation", description: "Final polish and pitching the project at HOLOGY 8.0." }
        ],
        challenges: [
            { title: "AI Hallucinations", description: "The AI sometimes generated wrong answers. I added a validation step where the AI must cite the page number from the PDF." },
            { title: "State Management", description: "Syncing the gamified state (score/streak) between the decoupled frontend and backend required robust API error handling." }
        ],
        results: "Awarded Honorable Mention at HOLOGY 8.0 for Software Innovation. The decoupled architecture allowed for smoother feature updates during the competition.",
        images: [
          "/projects/qnectify-1.png",
          "/projects/qnectify-2.png",
          "/projects/qnectify-3.png",
          "/projects/qnectify-4.png",
          "/projects/qnectify-5.png",
          "/projects/qnectify-6.png",
          "/projects/qnectify-7.png",
          "/projects/qnectify-8.png",
          "/projects/qnectify-9.png",
          "/projects/qnectify-10.png"
        ]
     }
  },

  // --- PROJECT 6: SENTINEL ---
  {
    title: "SENTINEL Marketplace",
    slug: "sentinel",
    description: "Blockchain-based e-commerce platform ensuring warranty authenticity via Ethereum Smart Contracts.",
    tags: ["Next.js", "Solidity", "Midtrans"],
    link: "https://sentinel-gadget.vercel.app/",
    repo: "https://github.com/adenugii/Sentinel",
    featured: false,
    gradient: "from-purple-500/20 to-indigo-500/20",
    detail: {
        shortOverview: "A revolutionary marketplace that combines traditional e-commerce with blockchain technology. Sentinel issues tamper-proof digital warranties (NFTs) for every purchase, verified on the Ethereum Sepolia testnet to prevent counterfeit claims.",
        problem: "Counterfeit luxury goods and fake warranty certificates are a massive issue in the secondary market. Paper warranties are easily forged, lost, or damaged, making it difficult for buyers to verify the authenticity and history of a product.",
        solution: "We engineered a decoupled architecture where the Next.js frontend interacts with a Node.js/Express backend and Ethereum Smart Contracts. Every purchase via Midtrans triggers the minting of a 'Digital Twin' (NFT warranty) recorded immutably on the blockchain, providing a transparent history from retailer to consumer.",
        features: [
            "Immutable Warranty Certificates (NFT)", 
            "Real-time Blockchain Verification (Etherscan)", 
            "Secure Checkout with Midtrans Payment Gateway",
            "Decentralized Warranty Storage (Sepolia Testnet)"
        ],
        techStack: [
            { name: "Next.js 16", icon: "SiNextdotjs", purpose: "Frontend framework with App Router and Server Actions." },
            { name: "Solidity", icon: "SiSolidity", purpose: "Smart Contract logic for warranty minting and verification." },
            { name: "Midtrans", icon: "SiPostman", purpose: "Payment Gateway integration for secure fiat transactions." }, // Icon placeholder
            { name: "Express.js", icon: "SiNodedotjs", purpose: "Backend REST API handling business logic and Web3 interactions." }
        ],
        process: [
            { title: "Research & Smart Contract Design", description: "Designing the ERC-721 structure to represent warranties as unique, transferable assets." },
            { title: "Parallel Development", description: "Simultaneously building the Next.js frontend UI and the Node.js backend API." },
            { title: "Integration Phase", description: "Connecting the frontend to Midtrans for payments, which then triggers the backend to mint the NFT on Sepolia." },
            { title: "Testing & Validation", description: "Simulating purchase flows, verifying transaction hashes on Etherscan, and ensuring gas optimization." },
            { title: "Final Presentation", description: "Demonstrating the full lifecycle from purchase to blockchain verification." }
        ],
        challenges: [
            { title: "Transaction Latency", description: "Blockchain transactions are slow. We implemented a queue system where the UI updates instantly (Optimistic UI) while the blockchain confirms in the background." },
            { title: "Gas Fees Management", description: "To keep costs low for users, we optimized the Smart Contract storage and used the Sepolia Testnet for demonstration." }
        ],
        results: "Achieved a perfect score (Grade A) in the 'Blockchain Technology & Digital Finance Platforms' course. The project successfully demonstrated a practical use case of NFT beyond art.",
        images: [
          "/projects/sentinel-1.png",
          "/projects/sentinel-2.png",
          "/projects/sentinel-3.png",
          "/projects/sentinel-4.png",
          "/projects/sentinel-5.png",
          "/projects/sentinel-6.png",
          "/projects/sentinel-7.png",
          "/projects/sentinel-8.png",
          "/projects/sentinel-9.png",
          "/projects/sentinel-10.png"
        ]
     }
  },

  // --- PROJECT 7: Karangrejo Digital Village ---
  {
    title: "Karangrejo Digital Village",
    slug: "karangrejo",
    description: "Official digital profile for Desa Karangrejo. Bridged technical implementation with village officials.",
    tags: ["Next.js", "Leaflet", "Decoupled CMS"],
    link: "https://web-desa-mmd.vercel.app/", // Update link jika ada, atau gunakan repo
    repo: "https://github.com/adenugii/WebKarangrejo",
    featured: false,
    gradient: "from-sky-500/20 to-indigo-500/20",
     detail: {
        shortOverview: "The official digital information system for Karangrejo Village, developed as a core work program by MMD Group 15 (Mahasiswa Membangun Desa). It serves as a central hub for village transparency, tourism promotion, and administrative information.",
        problem: "Karangrejo Village had no digital presence, making it difficult for tourists to find information about local attractions and for residents to access official village news. The village needed a system that was informative yet easy for staff to update.",
        solution: "We built a decoupled web application where the Frontend (Next.js) displays public information, and a custom Backend serves as an Admin Dashboard specifically for managing 'Village News'. We also integrated an interactive map using Leaflet and GeoJSON to visualize specific village boundaries.",
        features: [
            "Interactive Territory Map (Leaflet + GeoJSON)", 
            "Admin Dashboard for News Management", 
            "Tourism Directory with Detail Pages",
            "Village Officials & Demographics Profile"
        ],
        techStack: [
            { name: "Next.js", icon: "SiNextdotjs", purpose: "Frontend UI for public access and SEO." },
            { name: "Node.js", icon: "SiNodedotjs", purpose: "Backend API for News Management (Admin)." },
            { name: "Leaflet", icon: "SiJavascript", purpose: "Rendering OpenStreetMap with Village Boundaries." },
            { name: "Tailwind", icon: "SiTailwindcss", purpose: "Responsive styling." }
        ],
        process: [
            { title: "Research & Data Gathering", description: "Interviewing village officials to define requirements and collecting tourism/demographic data." },
            { title: "Design & Iteration", description: "Creating Figma prototypes, presenting to the Village Head, and revising based on feedback." },
            { title: "Development", description: "Building the public Frontend and the Admin Backend simultaneously." },
            { title: "Map Integration", description: "Implementing Leaflet with GeoJSON to draw precise village boundaries." },
            { title: "Handover", description: "Final presentation and training session for village staff." }
        ],
        challenges: [
            { title: "Geospatial Precision", description: "Mapping the exact village boundaries required processing raw GeoJSON data to overlay correctly on OpenStreetMap without performance issues." },
            { title: "User Adoption", description: "Ensuring the custom Admin Dashboard was simple enough for non-technical village staff to post news independently." }
        ],
        results: "Successfully launched as the official village website. The system empowers MMD Group 15 to leave a sustainable digital legacy for Karangrejo.",
        images: [
          "/projects/karangrejo-1.png",
          "/projects/karangrejo-2.png",
          "/projects/karangrejo-3.png",
          "/projects/karangrejo-4.png",
          "/projects/karangrejo-5.png",
          "/projects/karangrejo-6.png",
          "/projects/karangrejo-7.png",
          "/projects/karangrejo-8.png",
          "/projects/karangrejo-9.png",
          "/projects/karangrejo-10.png",
          "/projects/karangrejo-11.png"
        ]
     }
  },

  // --- PROJECT 8: F1 Race Strategy (Placeholder) ---
  {
    title: "F1 Race Strategy Engine",
    slug: "f1-strategy",
    description: "Upcoming Project. Analytics dashboard to simulate race strategies using historical data.",
    tags: ["In Development", "Data Viz", "AI"],
    link: "#",
    repo: "#",
    upcoming: true,
    featured: true,
    gradient: "from-zinc-500/20 to-zinc-700/20",
    detail: {
        shortOverview: "An advanced analytics dashboard designed to simulate Formula 1 race strategies. It uses historical data and tyre degradation models to predict optimal pit stops.",
        problem: "Race strategy is complex and often unintuitive for fans. Existing visualization tools are either too simple or inaccessible to the public.",
        solution: "I am building a visual dashboard that processes lap time data to visualize the 'undercut' and 'overcut' potential in real-time scenarios.",
        features: [
            "Tyre Degradation Modeling", 
            "Pit Window Calculator", 
            "Interactive Race Graph",
            "Driver Pace Comparison"
        ],
        techStack: [
            { name: "Python", icon: "SiJavascript", purpose: "Data Processing & Modeling." }, // Icon placeholder
            { name: "D3.js", icon: "SiJavascript", purpose: "Complex Data Visualization." },
            { name: "Next.js", icon: "SiNextdotjs", purpose: "Dashboard Interface." }
        ],
        process: [
            { title: "Data Sourcing", description: "Integrating with OpenF1 API." },
            { title: "Modeling", description: "Developing the tyre wear algorithm." }
        ],
        challenges: [
            { title: "Data Volume", description: "Handling millions of data points for live simulation." }
        ],
        results: "Currently in active development. Prototype expected in Q4 2025.",
        images: []
     }
  }
];

export const EXPERIENCE = [
  {
    role: "Laboratory Assistant",
    company: "Fakultas Ilmu Komputer (FILKOM) UB",
    period: "Aug 2025 - Dec 2025",
    description: "Mentored 50+ students on Modern Web Dev. Conducted weekly code reviews focusing on debugging strategies, clean code structure, and Git workflow fundamentals.",
    type: "work"
  },
  {
    role: "Digitalization Coordinator (MMD)",
    company: "Mahasiswa Membangun Desa - UB",
    period: "Jun 2025 - Jul 2025",
    description: "Led digital transformation for Karangrejo Village. Bridged communication between technical teams and village officials to ensure sustainable system adoption.",
    type: "work"
  },
  {
    role: "Bachelor of Information Technology",
    company: "Universitas Brawijaya",
    period: "2023 - Present",
    description: "GPA: 3.87. Specializing in Human-Computer Interaction & Front-End Engineering. Active in national software competitions.",
    type: "education"
  }
];

export const AWARDS = [
  {
    title: "Finalist - Software Development",
    event: "GEMASTIK XVIII (National ICT)",
    year: "2025",
    description: "Top 20 Finalist. Architected 'PrediAI', an AI-powered healthcare mobile application."
  },
  {
    title: "2nd Place - Front-End Dev",
    event: "ITECHNO CUP 2025",
    year: "2025",
    description: "Built 'SlotReality' with high-fidelity animations and responsive implementation."
  },
  {
    title: "Honorable Mention - Software Innovation",
    event: "HOLOGY 8.0",
    year: "2025",
    description: "Recognized for 'Qnectify', utilizing Generative AI for personalized education."
  }
];

export const SKILLS = [
  // --- Priority: Front-End Engineering ---
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "GSAP", icon: SiGreensock },

  // --- Mobile & Core ---
  { name: "Kotlin", icon: SiKotlin },
  { name: "Jetpack Compose", icon: SiJetpackcompose },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },

  // --- Backend & Integration ---
  { name: "Firebase", icon: SiFirebase },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "REST API", icon: SiPostman },
  
  // --- Tools & DevOps ---
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Solidity", icon: SiSolidity }, 
];