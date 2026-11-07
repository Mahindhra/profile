/**
 * Portfolio Data Source of Truth for Doddi Mahindhra
 * All data strictly verified from the official resume without fabrication.
 */

export const personalInfo = {
  fullName: "Doddi Mahindhra",
  preferredName: "Mahindhra",
  title: "Aspiring Software Developer",
  status: "Available for Software Development Opportunities",
  tagline: "Building ideas into meaningful digital experiences.",
  introduction: "Hello, I'm Mahindhra.",
  bio: "I'm passionate about programming, software development, and building practical technology solutions. I enjoy solving problems, exploring new technologies, and continuously improving my technical skills.",
  extendedBio: [
    "I'm an aspiring Software Developer seeking an opportunity to join a reputed organization where I can learn, grow, and contribute to innovative software solutions.",
    "With a background in Computer Science, I have developed foundational knowledge of programming, web technologies, databases, and emerging technologies.",
    "I believe in continuous learning, discipline, teamwork, adaptability, and practical problem-solving."
  ],
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "mahimahindhra000@gmail.com",
  phone: "+91 6302827360",
  github: "https://github.com/Mahindhra",
  githubUsername: "Mahindhra",
  linkedin: "https://linkedin.com/in/doddi-mahindhra", // Editable placeholder
  resumePdf: "/resume.pdf",
  portraitImage: "/images/mahindhra.jpg"
};

export const techTicker = [
  "JAVA",
  "PYTHON",
  "C",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "MYSQL",
  "GIT",
  "AWS BASICS",
  "AI & ML CONCEPTS"
];

export const professionalHighlights = [
  {
    title: "Problem Solving",
    description: "Dedicated approach to dissecting complex challenges, structuring logic, and formulating effective solutions."
  },
  {
    title: "Continuous Learning",
    description: "Constantly exploring emerging tools, evolving frameworks, and deepening fundamental computer science principles."
  },
  {
    title: "Team Collaboration",
    description: "Experienced in coordinating team initiatives, distributing tasks, and fostering productive peer relationships."
  },
  {
    title: "Adaptability",
    description: "Fast learner capable of acclimating to new environments, methodologies, and engineering workflows seamlessly."
  }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    subtitle: "Core Languages & Logic",
    skills: [
      { name: "Java", level: "Core", note: "Object-oriented programming, data structures & logic" },
      { name: "C", level: "Core", note: "Foundational programming & low-level memory concepts" },
      { name: "Python", level: "Fundamentals", note: "Syntax, scripting basics & computational fundamentals" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Web",
    subtitle: "Interface Development",
    skills: [
      { name: "HTML5", level: "Advanced", note: "Semantic structure & web accessibility standards" },
      { name: "CSS3", level: "Advanced", note: "Modern layout models (Grid/Flexbox) & responsive design" },
      { name: "JavaScript", level: "Intermediate", note: "DOM manipulation, ES6+ features & client interactivity" },
      { name: "XML", level: "Proficient", note: "Structured data interchange & document layout" }
    ]
  },
  {
    id: "database",
    title: "Database Technologies",
    subtitle: "Data Management & Querying",
    skills: [
      { name: "SQL", level: "Core", note: "Relational queries, joins, constraints & table operations" },
      { name: "MySQL", level: "Core", note: "Relational database management & schema design" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Development Environment",
    skills: [
      { name: "Git", level: "Proficient", note: "Version control, branching & repository maintenance" },
      { name: "GitHub", level: "Proficient", note: "Collaborative development & remote code management" },
      { name: "Apache Tomcat", level: "Familiar", note: "Web server & Java servlet container deployment" },
      { name: "MS Office", level: "Certified", note: "Documentation, presentation & spreadsheet analysis" }
    ]
  },
  {
    id: "professional",
    title: "Professional Skills",
    subtitle: "Core Soft Competencies",
    skills: [
      { name: "Communication", level: "Certified", note: "Clear technical and interpersonal articulation" },
      { name: "Team Collaboration", level: "Key Strength", note: "Active participation and cross-functional synergy" },
      { name: "Time Management", level: "Key Strength", note: "Structured prioritization and punctual delivery" },
      { name: "Problem Solving", level: "Key Strength", note: "Analytical reasoning and debugging mindset" },
      { name: "Adaptability", level: "Key Strength", note: "Resilient learning curve for novel challenges" }
    ]
  }
];

export const experienceTimeline = [
  {
    id: "exp-1",
    role: "AWS Cloud Computing",
    organization: "Adhoc Network",
    duration: "Short-term Internship",
    description: "Completed a short-term internship and gained practical exposure to Amazon Web Services cloud computing concepts and technologies.",
    highlights: [
      "Explored core AWS infrastructure paradigms and virtualization",
      "Hands-on exposure to cloud compute, storage, and networking fundamentals",
      "Observed industry-standard deployment and operational practices"
    ],
    tags: ["AWS", "Cloud Computing", "Infrastructure"]
  },
  {
    id: "exp-2",
    role: "Artificial Intelligence and Machine Learning",
    organization: "ULearn",
    duration: "Long-term Internship",
    description: "Completed a long-term internship and gained practical exposure to Artificial Intelligence and Machine Learning concepts.",
    highlights: [
      "Covered foundational supervised and unsupervised learning principles",
      "Analyzed algorithmic decision pipelines and data-driven modeling",
      "Developed conceptual understanding of real-world AI applications"
    ],
    tags: ["AI", "Machine Learning", "Data Modeling"]
  }
];

export const verifiedProjects = [
  {
    id: "hackathon-android",
    title: "Android Development Hackathon",
    category: "Competitive Engineering Event",
    duration: "30 Sept 2024 – 04 Oct 2024",
    award: "Outstanding Participation",
    featured: true,
    description: "Recognized for outstanding participation in an intensive multi-day Android Development Hackathon, demonstrating dedication, technical interest, and practical problem-solving during live project challenges.",
    outcomes: [
      "Engaged in rapid requirement analysis and live prototyping under strict deadlines",
      "Tackled practical mobile architecture challenges and user flow execution",
      "Demonstrated resilience, quick-iteration mindset, and team collaboration"
    ],
    tags: ["Android Development", "Live Challenges", "Problem Solving", "Rapid Prototyping"]
  }
];

export const educationHistory = [
  {
    id: "edu-1",
    degree: "Bachelor of Science (B.Sc.) – MECs",
    institution: "Aditya Degree & PG College",
    location: "Visakhapatnam, India",
    performanceLabel: "CGPA",
    performanceValue: "7.5",
    description: "Mathematics, Electronics, and Computer Science (MECs) coursework focused on computational thinking, algorithmic logic, discrete mathematics, and digital electronics."
  },
  {
    id: "edu-2",
    degree: "Secondary School Certificate (SSC)",
    institution: "M.N.R. High School",
    location: "Andhra Pradesh, India",
    performanceLabel: "Percentage",
    performanceValue: "97%",
    description: "Graduated with highest distinction, establishing a rigorous academic foundation in sciences and analytical mathematics."
  }
];

export const certifications = [
  {
    id: "cert-1",
    title: "Microsoft Office Certification",
    issuer: "Microsoft Certified",
    focus: "Productivity & Analytical Tools",
    skills: ["Spreadsheet Modeling", "Technical Documentation", "Structured Presentations"]
  },
  {
    id: "cert-2",
    title: "C Programming Certification",
    issuer: "Accredited Technical Program",
    focus: "Algorithmic & Procedural Programming",
    skills: ["Data Structures", "Control Flow", "Pointers & Memory Concepts"]
  },
  {
    id: "cert-3",
    title: "Pearson MePro Communication Skills",
    issuer: "Pearson MePro",
    focus: "Global Professional English & Articulation",
    skills: ["Technical Articulation", "Interpersonal Communication", "Professional Presentation"]
  }
];

export const leadershipAndActivities = [
  {
    id: "lead-1",
    category: "Team Leadership",
    title: "Project Coordination & Delegation",
    points: [
      "Coordinated team projects, distributing tasks based on member strengths",
      "Motivated team peers through open communication and clear milestones",
      "Supported timely milestone completion while maintaining quality standards"
    ]
  },
  {
    id: "lead-2",
    category: "Event Organization",
    title: "Campus & Community Engagement",
    points: [
      "Participated actively in organizing community-focused events",
      "Enhanced campus engagement and coordinated logistics for collaborative student activities",
      "Built cross-functional relationship skills across diverse peer groups"
    ]
  },
  {
    id: "lead-3",
    category: "Financial Literacy",
    title: "Analytical Trading & Markets",
    points: [
      "Actively engaged in financial literacy studies and market tracking",
      "Developed risk-management analysis, disciplined thinking, and numerical intuition",
      "Strengthened quantitative evaluation skills and pattern recognition"
    ]
  }
];

export const personalInterests = [
  {
    name: "Playing Piano",
    category: "Music & Rhythm",
    description: "Finding harmony, patience, and creative focus through acoustic melodies."
  },
  {
    name: "Cooking",
    category: "Culinary Craft",
    description: "Experimenting with recipes, precise timing, and blending diverse flavors."
  },
  {
    name: "Painting",
    category: "Visual Arts",
    description: "Exploring composition, color palettes, and visual storytelling on canvas."
  },
  {
    name: "Drawing",
    category: "Sketching & Design",
    description: "Refining spatial awareness, observation, and structural illustration."
  }
];
