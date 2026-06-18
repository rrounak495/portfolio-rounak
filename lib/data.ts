export const personalInfo = {
  name: "Rounak Rathod",
  title: "AI Engineer | Machine Learning Engineer | Generative AI Developer",
  tagline:
    "Building intelligent systems that bridge cutting-edge research with production-ready AI products.",
  bio: "AI/ML Engineer with expertise in Machine Learning, Deep Learning, Computer Vision, Data Science and Generative AI. Strong focus on building production-ready AI products and scalable applications.",
  location: "Mumbai, India",
  email: "rrounak495@gmail.com",
  github: "https://github.com/rounakrathod",
  linkedin: "https://linkedin.com/in/rounakrathod",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  {
    value: 4,
    suffix: "+",
    label: "AI Projects",
    sublabel: "Production-grade systems",
    gradient: "from-violet-500/10 to-purple-600/5",
    textGradient: "from-violet-300 to-violet-500",
  },
  {
    value: 5,
    suffix: "+",
    label: "Certifications",
    sublabel: "Oracle, Google, IBM",
    gradient: "from-blue-500/10 to-cyan-600/5",
    textGradient: "from-blue-300 to-cyan-400",
  },
  {
    value: 20,
    prefix: "Top ",
    suffix: "",
    label: "Hackathon Rank",
    sublabel: "Smart India Hackathon",
    gradient: "from-amber-500/10 to-orange-600/5",
    textGradient: "from-amber-300 to-orange-400",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
    sublabel: "AI, ML & Full-Stack",
    gradient: "from-emerald-500/10 to-teal-600/5",
    textGradient: "from-emerald-300 to-teal-400",
  },
];

export const skillCategories = [
  {
    title: "AI & ML",
    icon: "brain" as const,
    gradient: "from-violet-500/20 to-purple-600/10",
    accent: "text-violet-400",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "Predictive Modeling",
      "Feature Engineering",
    ],
  },
  {
    title: "Programming",
    icon: "code" as const,
    gradient: "from-blue-500/20 to-cyan-600/10",
    accent: "text-blue-400",
    skills: ["Python", "JavaScript", "C++"],
  },
  {
    title: "Frameworks",
    icon: "layers" as const,
    gradient: "from-emerald-500/20 to-teal-600/10",
    accent: "text-emerald-400",
    skills: ["TensorFlow", "Keras", "OpenCV", "React", "Next.js", "Node.js"],
  },
  {
    title: "GenAI",
    icon: "sparkles" as const,
    gradient: "from-fuchsia-500/20 to-pink-600/10",
    accent: "text-fuchsia-400",
    skills: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    title: "Databases",
    icon: "database" as const,
    gradient: "from-amber-500/20 to-orange-600/10",
    accent: "text-amber-400",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: "wrench" as const,
    gradient: "from-slate-400/20 to-zinc-600/10",
    accent: "text-slate-300",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

export const projects = [
  {
    id: "padleguru",
    title: "PadleGuru",
    subtitle: "AI-enabled Full Stack Learning Platform",
    description:
      "An intelligent learning platform that leverages AI to deliver personalized education experiences. Built with modern full-stack architecture, featuring adaptive content delivery and real-time progress analytics.",
    techStack: ["Next.js", "Python", "TensorFlow", "MongoDB", "OpenAI"],
    github: "https://github.com/rounakrathod/padleguru",
    liveDemo: "https://padleguru.com",
    gradient: "from-violet-600/30 via-purple-500/20 to-indigo-600/30",
  },
  {
    id: "placeready",
    title: "PlaceReady AI",
    subtitle: "ML-powered Placement Predictor",
    description:
      "A machine learning system that predicts placement readiness using feature engineering and ensemble models. Helps students identify skill gaps and optimize their career preparation strategy.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "React"],
    github: "https://github.com/rounakrathod/placeready-ai",
    liveDemo: "https://placeready-ai.vercel.app",
    gradient: "from-blue-600/30 via-cyan-500/20 to-teal-600/30",
  },
  {
    id: "deepfake",
    title: "Deepfake Detection",
    subtitle: "CNN-based Computer Vision System",
    description:
      "A deep convolutional neural network system for detecting manipulated media content. Implements advanced computer vision techniques with high accuracy on benchmark datasets.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/rounakrathod/deepfake-detection",
    liveDemo: "https://deepfake-detection.vercel.app",
    gradient: "from-rose-600/30 via-pink-500/20 to-fuchsia-600/30",
  },
  {
    id: "geosentrix",
    title: "GeoSentrixAI",
    subtitle: "Geospatial AI Flood Prediction System",
    description:
      "An AI-powered geospatial analysis platform for flood prediction using satellite imagery and temporal data. Combines deep learning with geographic information systems for disaster preparedness.",
    techStack: ["Python", "TensorFlow", "OpenCV", "GeoPandas", "React"],
    github: "https://github.com/rounakrathod/geosentrix-ai",
    liveDemo: "https://geosentrix-ai.vercel.app",
    gradient: "from-emerald-600/30 via-green-500/20 to-teal-600/30",
  },
];

export const experiences = [
  {
    title: "Data Analytics Job Simulation",
    company: "Deloitte Forage",
    type: "Virtual Experience",
    description:
      "Completed a comprehensive data analytics simulation covering data cleaning, visualization, and business insights generation using Python and analytical frameworks.",
    period: "2024",
  },
  {
    title: "Python Programming Internship",
    company: "Industry Internship",
    type: "Internship",
    description:
      "Developed Python applications, automated workflows, and contributed to data processing pipelines while gaining hands-on experience in software development best practices.",
    period: "2023",
  },
];

export const certifications = [
  {
    title: "Oracle OCI DevOps Professional",
    issuer: "Oracle",
    gradient: "from-red-500/20 to-orange-600/10",
  },
  {
    title: "Oracle OCI AI Foundations Associate",
    issuer: "Oracle",
    gradient: "from-red-500/20 to-rose-600/10",
  },
  {
    title: "Google/Coursera Data Foundations",
    issuer: "Google & Coursera",
    gradient: "from-blue-500/20 to-green-600/10",
  },
  {
    title: "IBM Python 101 for Data Science",
    issuer: "IBM",
    gradient: "from-sky-500/20 to-blue-600/10",
  },
  {
    title: "Programming with Python",
    issuer: "Professional Certification",
    gradient: "from-yellow-500/20 to-amber-600/10",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon Top 20",
    description:
      "Ranked among the top 20 teams nationally, demonstrating innovation in AI-driven solutions for real-world challenges.",
    icon: "trophy" as const,
  },
  {
    title: "Team Lead – Hydroguardians",
    description:
      "Led a multidisciplinary team in developing water conservation and flood management solutions using AI and IoT technologies.",
    icon: "users" as const,
  },
];
