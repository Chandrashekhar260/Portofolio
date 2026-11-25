export const portfolioData = {
  personal: {
    name: "Chandrashekhar",
    title: "Full Stack Developer",
    email: "padshettychandrashekhar25@gmail.com",
    phone: "+91 9606530346",
    location: "India",
    github: "https://github.com/chandrashekhar",
    linkedin: "https://linkedin.com/in/chandrashekhar",
    summary: "Computer Science Engineering student building end-to-end web applications across the stack: React and TypeScript frontends, Node.js/Express and FastAPI backends, and MongoDB, MySQL, PostgreSQL and SQLite databases. Experienced in REST APIs, real-time WebSocket features and AI integration (Gemini API, LangChain). Strong grounding in OOP, DBMS, DSA, OS and Computer Networks."
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
    frontend: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Gemini API", "LangChain"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "ChromaDB"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Linux"],
    coreCS: ["OOP", "DBMS", "DSA", "Operating Systems", "Computer Networks"]
  },
  projects: [
    {
      id: 1,
      name: "Polaris – Personal Learning AI Agent",
      description: "Built a React 18 + TypeScript dashboard (shadcn/ui, Tailwind) showing AI recommendations and progress via live WebSocket updates. Developed a FastAPI backend with REST endpoints and WebSocket streaming for real-time code analysis, using Pydantic-validated models. Integrated Gemini, LangChain and ChromaDB for personalised recommendations; built a Python file watcher that streams code changes to the API.",
      technologies: ["React", "TypeScript", "FastAPI", "WebSockets", "Gemini API", "ChromaDB"],
      github: "https://github.com/chandrashekhar/polaris",
      live: "https://polaris-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      name: "DPDPA for Small Business",
      description: "Built an offline-first compliance tool for India's DPDP Act 2023 for the Srujana Tech Fest 2026 hackathon. Developed a discovery engine that scans Excel, CSV and WhatsApp data for personal identifiers (phone, PAN, UPI, validated Aadhaar) using regex, pandas and openpyxl. Implemented multilingual notices, a consent ledger, SHA-256 erasure certificates and a breach-notification wizard.",
      technologies: ["React", "Vite", "FastAPI", "Python", "SQLite"],
      github: "https://github.com/chandrashekhar/dpdpa",
      live: "https://dpdpa-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      name: "Career Guidance",
      description: "Built a full-stack career guidance app: Node.js/Express REST backend, MongoDB storage and Gemini API-generated suggestions.",
      technologies: ["JavaScript", "Node.js", "Express.js", "Gemini API", "MongoDB"],
      github: "https://github.com/chandrashekhar/career-guidance",
      live: "https://career-guidance-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      name: "Personal Data Manager",
      description: "Built a secure app for passwords, notes, contacts and team data, with Node.js/Express REST APIs, input validation, search, backup & restore and analytics.",
      technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
      github: "https://github.com/chandrashekhar/personal-data-manager",
      live: "https://personal-data-manager.vercel.app",
      featured: false
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "New Horizon College of Engineering",
      year: "4th Year",
      cgpa: "8.97"
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "S Basaveshwar Resi PU College",
      percentage: "88.6%"
    }
  ],
  certifications: [
    {
      name: "SCALER Topics of DBMS course",
      issuer: "Scalere",
      year: "2024"
    },
    {
      name: "NPTEL – Cloud Computing",
      issuer: "NPTEL",
      year: "2023"
    }
  ],
  achievements: [
    {
      title: "2nd Prize at Chanakya University Hackathon (2025)",
      description: "Secured 2nd Prize for building an AI-powered education platform"
    }
  ]
}
