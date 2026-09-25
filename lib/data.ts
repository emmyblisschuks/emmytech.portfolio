export const siteConfig = {
  name: "Chukwu Chidera Emmanuel",
  logo: { first: "Emmy", second: "Tech" },
  tagline: "AI Automation Analyst",
  location: "Lagos, Nigeria",
  email: "emmy41096@gmail.com",
  cvPath: "/ChukwuChideraEmmanuel_Resume.pdf",
  status: "Available for opportunities",
  bio: "A self-taught AI and Automation specialist building intelligent workflows, AI agents, and RAG systems that solve real business problems. Currently serving as COO at PromptIQ, enrolled at TSAcademy, and studying Computer Science at NOUN.",
  socials: {
    github: "https://github.com/emmyblisschuks",
    linkedin: "https://linkedin.com/in/chukwuchideraemmanuel",
  },
};

export const roles = [
  "AI Agent Builder",
  "Workflow Automation Developer",
  "Business RAG Chatbot Builder",
  "AI Automation Analyst",
];

export const skills = [
  {
    category: "AI and Automation",
    icon: "bot",
    items: ["n8n", "Zapier", "Make.com", "RAG", "AI Agents", "Agentic AI", "API Integrations", "Workflow Automation"],
  },
  {
    category: "Programming and Web",
    icon: "code",
    items: ["Python", "Flask", "JavaScript", "HTML", "CSS", "React Native", "SQLite"],
  },
  {
    category: "Tools and Platforms",
    icon: "wrench",
    items: ["GitHub", "Supabase", "Vercel", "Render", "Command Prompt"],
  },
  {
    category: "AI Prompt Engineering",
    icon: "sparkles",
    items: ["LLM Prompting", "Gemini API", "OpenAI API", "Chatbot Design", "Instruction Tuning"],
  },
];

export const projects = [
  {
    id: "01",
    title: "Travel Agency Trip Messenger",
    category: "Workflow Automation",
    description:
      "Automated pre-trip and post-trip WhatsApp messaging system for a travel agency. Sends personalised messages to travelers before departure and after return, with built-in logic to prevent duplicate messages and eliminate human error.",
    features: [
      "Automated WhatsApp delivery at trip milestones",
      "Duplicate message prevention logic",
      "Google Sheets as live data source",
    ],
    stack: ["n8n", "Google Sheets", "WhatsApp", "IF Nodes"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
  {
    id: "02",
    title: "NOUN RAG Chatbot",
    category: "AI Development",
    description:
      "An AI-powered FAQ chatbot built for students of the National Open University of Nigeria. Answers common student questions instantly by retrieving accurate answers from a structured university knowledge base using RAG architecture.",
    features: [
      "Retrieval-Augmented Generation (RAG) pipeline",
      "Gemini LLM for natural language responses",
      "Vector store for fast document retrieval",
    ],
    stack: ["n8n", "Webhook", "Gemini LLM", "AI Agent", "Vector Store"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
  {
    id: "03",
    title: "Job Application Tracker",
    category: "Workflow Automation",
    description:
      "An end-to-end recruitment workflow that receives job applications, evaluates applicant experience, and automatically sends tailored acceptance or rejection emails. Notifies HR at every stage, removing manual screening entirely.",
    features: [
      "Auto-screening by years of experience",
      "Personalised email dispatch per outcome",
      "Real-time HR notifications at every stage",
    ],
    stack: ["n8n", "Webhook", "Google Sheets", "Switch Nodes", "Gmail"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
  {
    id: "04",
    title: "Reputation Feedback Engine",
    category: "AI Automation",
    description:
      "A smart customer review collection system that routes positive and negative feedback separately, triggers instant manager alerts on repeat negative reviews, and uses a Gemini LLM to draft intelligent response suggestions directly to a management dashboard.",
    features: [
      "Positive and negative review routing",
      "Repeat negative review manager alerts",
      "LLM-drafted response suggestions on dashboard",
    ],
    stack: ["n8n", "Gmail", "Google Sheets", "Gemini LLM", "Code Node"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
  {
    id: "05",
    title: "Daily Research Digest",
    category: "AI Development",
    description:
      "An automated research chatbot that independently searches a chosen topic each day, compiles a structured summary, and delivers it on a recurring schedule. No manual input needed once set up.",
    features: [
      "Daily scheduled autonomous research",
      "Topic-based intelligent summarisation",
      "Zero manual intervention after setup",
    ],
    stack: ["n8n", "AI Agent", "Webhook", "Gemini LLM"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
  {
    id: "06",
    title: "Noteify",
    category: "Web Development",
    description:
      "An all-in-one workspace product for individuals and small teams. Combines note-taking, document management, CRM, and task tracking in a single clean interface. Currently live and available for purchase.",
    features: [
      "Notes, docs, and task management in one place",
      "Built-in lightweight CRM",
      "Live product available for sale",
    ],
    stack: ["React", "JavaScript", "Supabase", "Vercel"],
    github: "https://github.com/emmyblisschuks",
    live: "https://noteify-eta.vercel.app/app",
  },
  {
    id: "07",
    title: "Job Applicant Screening Automation",
    category: "Workflow Automation",
    description:
      "Built to stop qualified candidates from slipping through manual HR processes. Automatically receives applications, checks experience criteria, dispatches interview invitations or rejection emails, and keeps HR informed at every step.",
    features: [
      "Automated experience-based screening",
      "Interview invite and rejection email dispatch",
      "HR stage notifications with zero manual follow-up",
    ],
    stack: ["n8n", "Webhook", "Gmail", "Google Sheets"],
    github: "https://github.com/emmyblisschuks",
    live: null,
  },
];

export const journey = [
  {
    year: "2023",
    title: "Started University",
    description: "Enrolled in a BSc Computer Science programme at the National Open University of Nigeria (NOUN), beginning the academic foundation of my tech journey.",
  },
  {
    year: "2023",
    title: "Store Manager and Engineer",
    description: "Joined Mobileplace.NG as Store Manager and Device Engineer, handling operations, device repair, customer service, and inventory for an iPhone and gadgets retail outlet.",
  },
  {
    year: "2025",
    title: "Self-Taught AI Skills",
    description: "Began independently learning AI and automation, diving into n8n, AI agents, and workflow systems, building real projects while learning.",
  },
  {
    year: "2026",
    title: "TSAcademy Scholarship",
    description: "Enrolled in a competitive scholarship at TSAcademy to formally study AI and Automation, accelerating expertise in intelligent workflow engineering.",
  },
  {
    year: "2026",
    title: "COO at PromptIQ",
    description: "Appointed Chief Operating Officer at PromptIQ, an AI organisation in Lagos, supporting operations, teaching at the academy, and driving product growth alongside the founder.",
  },
  {
    year: "2026",
    title: "Growth Marketer at TavCorp",
    description: "Working remotely as a Growth Marketer and Automation Analyst at TavCorp, designing automation workflows and running marketing campaigns.",
  },
];

export const services = [
  {
    icon: "bot",
    title: "AI Agent Development",
    description:
      "Building autonomous AI agents that reason, plan, and act on your behalf. These agents handle complex multi-step tasks that used to require constant human attention, working reliably in the background so you do not have to.",
  },
  {
    icon: "workflow",
    title: "n8n Workflow Automation",
    description:
      "Designing and deploying custom n8n workflows that connect your tools, eliminate repetitive manual work, and keep your business operations running around the clock without human intervention.",
  },
  {
    icon: "plug",
    title: "API Integration",
    description:
      "Connecting your apps, platforms, and data sources through clean API integrations so every tool in your stack talks to every other, in real time, without data silos or manual transfers.",
  },
  {
    icon: "message-square",
    title: "RAG Chatbot Development",
    description:
      "Building retrieval-augmented AI chatbots trained on your own documents and data. Your customers and teams get accurate, instant answers pulled directly from your knowledge base, not guesses.",
  },
  {
    icon: "bar-chart",
    title: "AI Automation Consulting",
    description:
      "Analysing your business operations to identify where intelligent automation delivers the most impact. You get a clear, practical roadmap for saving time, cutting costs, and reducing errors.",
  },
  {
    icon: "video",
    title: "AI Video Ads Production",
    description:
      "Creating AI-generated promotional video content tailored to your brand voice and audience. Fast, cost-effective creative that is built to grab attention and drive real results.",
  },
];
