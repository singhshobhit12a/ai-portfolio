/** GitHub repo name for project Pages — keep in sync with next.config.ts basePath. */
export const GITHUB_PAGES_REPO = "ai-portfolio";

/**
 * Single place to edit name, links, and copy. Set siteUrl to your live deploy URL after publishing.
 */
export const site = {
  /** Live site (GitHub Pages project repo). Change username if yours differs. */
  siteUrl: "https://singhshobhit12a.github.io/ai-portfolio",
  name: "Shobhit Singh",
  title: "AI Engineer",
  location: "Jaipur, India",
  email: "singhshobhit12a@gmail.com",
  phone: "+91 7300728969",
  linkedinUrl: "https://www.linkedin.com/in/shobhit-singh-95a323214/",
  githubUrl: "https://github.com/singhshobhit12a",
  tagline:
    "Production LLM systems, RAG pipelines, and conversational AI — shipped for enterprise.",
  heroIntro:
    "I design and deploy AI systems that turn language models into reliable products: multi-turn dialogue, semantic search, and scalable FastAPI backends for clients including Canon.",
  about: [
    "I am an AI Engineer with hands-on experience building production-grade systems using Large Language Models, Retrieval-Augmented Generation, and conversational AI. My work spans knowledge extraction, recommendation engines, and backends that stay fast under real load.",
    "At Intimetec Visionsoft, I ship enterprise solutions end to end: LangGraph workflows with branching and memory, embedding pipelines over PostgreSQL and MongoDB vectors, and async services that cut latency while improving search and match quality. I care about measurable outcomes — retrieval time, relevance, and operator effort — not demos.",
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Architectures", href: "#architectures" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  skillGroups: [
    {
      title: "AI / GenAI",
      items: [
        "LLMs",
        "RAG",
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "Vector Search",
      ],
    },
    {
      title: "Machine Learning",
      items: ["Python", "NLP", "Embeddings", "Semantic Search"],
    },
    {
      title: "Infrastructure",
      items: [
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Vector Databases",
        "Cloud",
        "REST & Async",
      ],
    },
  ],
  projects: [
    {
      title: "Knowledge Gatherer — AI Interviewer (Canon)",
      client: "Enterprise — Canon",
      problem:
        "Subject-matter experts hold critical knowledge in their heads; the business needed structured capture without static forms.",
      architecture:
        "LangGraph orchestration with branching dialogue paths, tool-driven reasoning, and durable conversation memory. Progressive context capture to build knowledge graphs from long interviews.",
      technologies: [
        "LangGraph",
        "LangChain",
        "LLMs",
        "Knowledge graphs",
        "Multi-turn dialogue",
      ],
      achievements: [
        "Structured multi-turn interviews replacing one-off Q&A",
        "Enterprise deployment for knowledge extraction workflows",
      ],
    },
    {
      title: "SupplierMatch",
      client: "Internal / client delivery",
      problem:
        "Matching suppliers to opportunities at scale with both business rules and semantic similarity.",
      architecture:
        "Hybrid storage: PostgreSQL for relational data, MongoDB for vector embeddings. Multi-stage pipeline combining rule-based filters, cosine similarity, and weighted ranking.",
      technologies: [
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Embeddings",
        "Cosine similarity",
      ],
      achievements: [
        "~85% match relevance in testing",
        "~60% reduction in manual matching effort (resume)",
        "Semantic search across 10,000+ business records",
      ],
    },
    {
      title: "AI Medical Receptionist",
      client: "Pilot clinic",
      problem:
        "Routine phone scheduling consumed staff time and introduced booking conflicts.",
      architecture:
        "Voice layer via Twilio APIs, conversational state machines for intake, real-time checks for scheduling conflicts, and backend integration for appointments.",
      technologies: ["Twilio", "Python", "Conversational AI", "Voice APIs"],
      achievements: [
        "Pilot: eliminated routine manual scheduling for the clinic",
        "Natural call handling with structured data capture",
      ],
    },
  ],
  architectures: [
    {
      name: "RAG & semantic retrieval",
      description:
        "Retrieval-augmented pipelines that ground LLM answers in your data, not just the model weights.",
      summary: [
        "Chunking and embedding jobs for structured and unstructured sources",
        "Vector indexes (MongoDB / pgvector-class patterns) with hybrid filtering",
        "Re-ranking and prompt assembly for stable, cited-style responses",
      ],
      technologies: ["RAG", "Embeddings", "Vector DB", "LangChain"],
    },
    {
      name: "Conversational AI systems",
      description:
        "Multi-turn agents with memory, tools, and guardrails suitable for enterprise users.",
      summary: [
        "LangGraph state machines for branching flows",
        "Prompt orchestration and context window management",
        "Deployed for 3+ enterprise clients with reduced retrieval latency (~35%)",
      ],
      technologies: ["LangGraph", "LangChain", "LLMs", "FastAPI"],
    },
    {
      name: "LLM knowledge extraction",
      description:
        "Long-form dialogues that extract structured knowledge from experts.",
      summary: [
        "Canon AI interviewer: SME interviews → structured knowledge graphs",
        "Progressive summarization and entity linking across turns",
      ],
      technologies: ["LangGraph", "Tools", "Knowledge graphs"],
    },
    {
      name: "AI recommendation & matchmaking",
      description:
        "Scoring and ranking systems that blend rules with learned similarity.",
      summary: [
        "Supplier–opportunity engine: filters + cosine similarity + weighted ranks",
        "Measurable lift in relevance and manual effort reduction",
      ],
      technologies: ["Python", "Embeddings", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Vector search platforms",
      description:
        "Semantic search over tens of thousands of records with operational SLAs.",
      summary: [
        "Embedding workflows integrated with transactional stores",
        "Cosine similarity and metadata filters for business queries",
      ],
      technologies: ["Vector search", "MongoDB", "PostgreSQL"],
    },
    {
      name: "AI data & serving pipelines",
      description:
        "Async backends that keep inference and retrieval responsive at scale.",
      summary: [
        "FastAPI services with async I/O",
        "Pipeline latency reduced ~60% (resume) via async processing and design",
      ],
      technologies: ["FastAPI", "Async Python", "REST APIs"],
    },
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Intimetec Visionsoft Pvt. Ltd.",
      location: "Jaipur, India",
      start: "Jan 2025",
      end: "Present",
      highlights: [
        "Designed and deployed enterprise conversational AI using LLMs for 3+ clients — multi-turn dialogue and knowledge extraction.",
        "Real-time dialogue pipelines with LangChain, LangGraph, prompt orchestration, and memory; ~35% faster average context retrieval.",
        "LLM-powered enrichment pipelines with semantic embeddings; ~40% improvement in search relevance and recommendation accuracy.",
        "Supplier–opportunity matchmaking with rules, cosine similarity, and weighted ranking; ~60% less manual matching effort.",
        "Vector workflows with PostgreSQL + MongoDB for 10,000+ records; semantic search at scale.",
        "FastAPI and async processing; ~60% reduction in AI pipeline response latency.",
      ],
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Edunet Foundation",
      location: "India",
      start: "Jun 2023",
      end: "Jul 2023",
      highlights: [
        "Foundations in supervised and unsupervised ML through intensive coursework.",
        "Built Psyche Score Predictor with Python and scikit-learn (~98% accuracy on the project dataset).",
      ],
    },
  ],
  education: {
    school: "Swami Keshvanand Institute of Technology, Jaipur",
    degree: "B.Tech in Computer Science (Artificial Intelligence)",
    period: "2021 – 2025",
    detail: "CGPA: 9.01 / 10",
  },
  certifications: [
    "AI Fundamentals — IBM SkillsBuild",
    "Python for Programmers — IBM SkillsBuild",
    "Machine Learning: Basics to Advanced — Udemy",
    "Database Programming with SQL — Oracle",
  ],
  meta: {
    title: "Shobhit Singh | AI Engineer — LLM, RAG, LangGraph, FastAPI",
    description:
      "AI Engineer building production LLM and RAG systems, conversational AI, and scalable FastAPI backends. Enterprise experience including Canon. Jaipur, India.",
  },
} as const;
