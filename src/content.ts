// Single source of truth for all site copy. Edit here — components map over this.

export type EntryKind = "role" | "project" | "education";

export interface TimelineEntry {
  id: string;
  /** Human label shown as the date chip, e.g. "Jul 2025 — Present". */
  period: string;
  kind: EntryKind;
  title: string;
  org: string;
  location?: string;
  summary: string;
  points?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  /** Optional Mermaid source — rendered as the project's architecture visual. */
  diagram?: string;
  /** Per-card type chip, e.g. "Application", "Deployed Solution", "Prototype", "Project". */
  label?: string;
}

export const hero = {
  name: "Mridul Sarkar",
  tagline: "Applied AI Engineer · Forward Deployed Engineer",
  intro:
    "I'm an AI-driven engineer with a unique blend of skill sets for shipping optimal products fast. I've built enterprise-grade data platforms and turned emerging AI research into viable prototypes — proving the business value that initiates early adoption, with several carried forward by dedicated teams. Today I maintain my Local AI Station and run PaveAI's business workflow orchestration.",
  location: "Chicago, IL",
  skills: [
    "LLM agents & orchestration",
    "RAG & vector search (HNSW)",
    "Fine-tuning & embeddings",
    "AWS · Bedrock · SageMaker",
    "FastAPI · Node · GraphQL",
    "React · TypeScript",
    "PyTorch",
    "On-device inference",
  ],
};

export const socials = {
  email: "mridulsarkarbiz@gmail.com",
  github: "https://github.com/mertall",
  linkedin: "https://linkedin.com/in/mridul-s",
  resume: "/resume.pdf",
  consultancy: "https://multimodalworks.io",
};

// One timeline-ordered list. `project` entries fill the main column (each carries its
// own type label); `role` / `education` entries render as the experience aside. Newest
// first. Business-app diagrams are service-level; Accenture diagrams are high-level.
export const timeline: TimelineEntry[] = [
  {
    id: "multimodal-works",
    period: "Jul 2025 — Present",
    kind: "role",
    title: "Founder & Principal AI Engineer",
    org: "Multimodal Works LLC",
    location: "Greater Chicago Area",
    summary:
      "AI consultancy for SMBs — local AI, cloud AI, and custom full-stack apps, taken from discovery to a production-hardened handoff.",
    tags: ["LLM agents", "RAG", "On-device", "Full-stack"],
    links: [{ label: "multimodalworks.io", href: "https://multimodalworks.io" }],
  },
  {
    id: "paveai",
    period: "Jun 2026 — Present",
    kind: "project",
    label: "Application",
    title: "PaveAI — AI Job-Management CRM",
    org: "Pave AI Inc. · getpave.ai",
    summary:
      "Job-management software for paving contractors. It tracks deals, estimates, invoices, purchase orders, and RFQs and keeps them continuously synced with QuickBooks so margin is visible mid-job. Its AI assistant walks a lead through its whole lifecycle — qualification, estimating, proposal, approval, and task execution — reading and updating CRM data and syncing QuickBooks through tools, with a human approving every change.",
    tags: ["React 19", "Node + Express", "Python + FastAPI", "LangGraph", "PostgreSQL", "QuickBooks API"],
    links: [{ label: "getpave.ai", href: "https://getpave.ai" }],
    diagram: `flowchart TD
  U["Paving Contractor"] --> APP["PaveAI Web App"]
  subgraph Services["Business Services"]
    JOBS["Jobs & Deals"]
    EST["Estimates & RFQs"]
    INV["Invoices, POs & Bills"]
  end
  APP --> JOBS
  APP --> EST
  APP --> INV
  APP --> AGENT["AI Job Agent"]
  AGENT --> FLOW["Lead to Estimate to Proposal to Approval to Tasks"]
  AGENT --> HITL["Human approval on every change"]
  JOBS --> SYNC["QuickBooks Sync"]
  EST --> SYNC
  INV --> SYNC
  AGENT --> SYNC
  SYNC <--> QBO["QuickBooks Online"]`,
  },
  {
    id: "screenshot-ai",
    period: "Jun 2026",
    kind: "project",
    label: "Tool",
    title: "screenshot-ai",
    org: "Personal project",
    summary:
      "A zero-dependency macOS bash helper that, on every screenshot, asks “Using this for AI?” and offers an auto-delete that self-destructs the file in 5 minutes — no uploads.",
    tags: ["bash", "macOS", "privacy", "tooling"],
    links: [{ label: "github.com/mertall/screenshot-ai", href: "https://github.com/mertall/screenshot-ai" }],
  },
  {
    id: "hardware-agent",
    period: "Dec 2025",
    kind: "project",
    label: "Agent",
    title: "Hardware Agent",
    org: "Personal project",
    summary:
      "An agentic system that auto-detects a machine's CPU/GPU/RAM/storage/OS and recommends the optimal local-LLM deployment for it — built on LangChain tool-calling, cross-platform across macOS and Windows. Powers the Local AI Station installer's right-sizing.",
    tags: ["LLM", "LangChain", "agents", "hardware", "Python"],
  },
  {
    id: "enroads",
    period: "Oct 2025 — Present",
    kind: "project",
    label: "Application",
    title: "Enroads ERP",
    org: "Enroads Paving (client deployment)",
    summary:
      "An ERP for a paving company covering CRM, project management, and financial operations — with documents and email in Microsoft 365 and continuous QuickBooks sync, so the office runs sales, projects, and books from one system.",
    tags: ["React", "Express", "GraphQL", "Flask", "PostgreSQL", "QuickBooks API", "Microsoft 365"],
    diagram: `flowchart TD
  U["Enroads Staff"] --> APP["Enroads ERP"]
  subgraph Services["Business Services"]
    CRM["CRM — Contacts & Opportunities"]
    PM["Project Management"]
    FIN["Financial Operations"]
    DOCS["Documents & Email"]
  end
  APP --> CRM
  APP --> PM
  APP --> FIN
  APP --> DOCS
  FIN --> SYNC["QuickBooks Sync"]
  SYNC <--> QBO["QuickBooks Online"]
  DOCS <--> MS["Microsoft 365 — SharePoint & Outlook"]`,
  },
  {
    id: "clip-finetune-cifar10",
    period: "May 2025",
    kind: "project",
    label: "Research",
    title: "CLIP Finetune on CIFAR-10",
    org: "Personal project",
    summary:
      "A multimodal RAG and contrastive-learning experiment fine-tuning CLIP on augmented CIFAR-10 image/text pairs, then extracting embeddings and indexing them in HNSW for retrieval evaluation.",
    tags: ["CLIP", "multimodal", "contrastive learning", "HNSW", "RAG"],
    links: [{ label: "github.com/mertall/clip-finetune-cifar10", href: "https://github.com/mertall/clip-finetune-cifar10" }],
  },
  {
    id: "patchtst-hnsw",
    period: "May 2025",
    kind: "project",
    label: "Research",
    title: "PatchTST + HNSW — Time-Series Vector Search",
    org: "Time-series retrieval",
    summary:
      "Extended vector search to time series: trained a lightweight PatchTST on Australian electricity demand using fixed-length, leak-free windows, indexed the train embeddings in HNSW, and benchmarked brute-force KNN vs HNSW using held-out windows as queries.",
    tags: ["PatchTST", "HNSW", "Time series", "Embeddings", "PyTorch"],
    links: [{ label: "github.com/mertall/patchtst_and_hnsw", href: "https://github.com/mertall/patchtst_and_hnsw" }],
    diagram: `flowchart LR
  TS["Australian Electricity Demand"] --> WIN["Fixed-length leak-free windows"]
  WIN --> SPLIT["Train / Test split"]
  SPLIT --> TRAIN["PatchTST training"]
  TRAIN --> EMB["Train window embeddings"]
  EMB --> IDX["HNSW index"]
  QW["Test windows as queries"] --> ENC["PatchTST encode"]
  ENC --> CMP["Brute-force KNN vs HNSW"]
  IDX --> CMP
  CMP --> EVAL["Recall + latency comparison"]`,
  },
  {
    id: "local-ai-station",
    period: "Apr 2025 — Present",
    kind: "project",
    label: "Application",
    title: "Local AI Station",
    org: "Multimodal Works",
    summary:
      "A private AI workstation that runs entirely on a client's own hardware — no data leaves the building. ~20 open-source services compose via Docker Compose profiles: a Hermes coordinator routes to agent tooling (OpenWork/OpenCode, Claude Code + Codex) over a LiteLLM gateway whose classifier router fronts Ollama-served local models (Qwen3 / Gemma), with opt-in metered cloud routes. Memory spans three tiers under one entity identity — Postgres relational, Apache AGE knowledge graph, and Qdrant vectors — fed from an Obsidian knowledge vault. Caddy reverse-proxies the UIs, n8n drives automation (GitHub PR webhooks via smee.io), and Langfuse traces everything.",
    tags: ["Docker Compose", "Ollama", "LiteLLM", "Postgres + Apache AGE", "Qdrant", "Obsidian", "n8n", "Caddy", "Langfuse"],
    diagram: `flowchart TD
  User(["User chat"])
  subgraph Workbench["Workbench — host agent tooling"]
    Hermes["Hermes — agent coordinator"]
    OpenWork["OpenWork workbench"]
    OpenCode["OpenCode engine"]
    ClaudeCode["Claude Code CLI — architect"]
    Codex["Codex CLI — subprocess"]
    Browser["ChatGPT + Claude.ai sessions"]
  end
  subgraph Inference["Inference"]
    LiteLLM["LiteLLM — gateway + classifier router"]
    Ollama["Ollama — Qwen3 / Gemma"]
  end
  subgraph Memory["Three-tier Memory — one entity identity"]
    PG["Postgres — relational"]
    AGE["Apache AGE — knowledge graph"]
    Qdrant["Qdrant — vectors"]
  end
  subgraph Auto["Automation"]
    N8N["n8n — triggers, cron, webhooks"]
    Smee["smee.io — GitHub PR tunnel"]
  end
  subgraph Edge["Gateway + Observability"]
    Caddy["Caddy — reverse proxy + auth"]
    WebUI["Open WebUI"]
    Langfuse["Langfuse — tracing"]
  end
  Obsidian["Obsidian — knowledge vault"]
  User --> Hermes
  Hermes --> OpenWork
  Hermes --> ClaudeCode
  Hermes --> N8N
  OpenWork --> OpenCode
  OpenWork --> Browser
  ClaudeCode --> Codex
  OpenWork --> LiteLLM
  WebUI --> LiteLLM
  LiteLLM --> Ollama
  LiteLLM --> Langfuse
  Hermes --> PG
  Hermes --> AGE
  Hermes --> Qdrant
  Hermes <--> Obsidian
  Obsidian -.indexed.-> Qdrant
  Qdrant -.embeddings.-> LiteLLM
  N8N --> PG
  Smee --> N8N
  Caddy --> WebUI
  Caddy --> N8N
  Caddy --> Langfuse
  Caddy --> Qdrant`,
  },
  {
    id: "mps-diffusion-model",
    period: "Apr 2025",
    kind: "project",
    label: "Experiment",
    title: "MPS Diffusion Model",
    org: "Personal project",
    summary:
      "An exploratory diffusion-model implementation with Apple-Silicon MPS acceleration in PyTorch.",
    tags: ["diffusion", "PyTorch", "MPS", "generative"],
  },
  {
    id: "quantum-hackathon",
    period: "Apr 2025",
    kind: "project",
    label: "Hackathon",
    title: "Quantum Computing Hackathon — 8th of 600 teams",
    org: "BlueQubit",
    summary:
      "Optimized a 60-qubit tensor-network contraction under hardware constraints, placing 8th of 600 teams.",
    tags: ["Quantum", "Tensor networks", "Optimization"],
    links: [{ label: "github.com/mertall/bluequbit_hackathon", href: "https://github.com/mertall/bluequbit_hackathon" }],
  },
  {
    id: "fellowship-finder",
    period: "Mar 2025",
    kind: "project",
    label: "Project",
    title: "FellowshipFinder",
    org: "Personal project",
    summary:
      "An AI agent that lets graduate students upload a resume and surfaces matching fellowships at UChicago, with a frontend/backend split running OpenAI or a local Mistral-7B model.",
    tags: ["LLM", "agents", "RAG", "OpenAI", "Mistral"],
    links: [{ label: "github.com/mertall/FellowshipFinder", href: "https://github.com/mertall/FellowshipFinder" }],
  },
  {
    id: "spectrogram",
    period: "2025",
    kind: "project",
    label: "Project",
    title: "Water Bottle Challenge — Spectrogram K-means",
    org: "Audio Classification",
    summary:
      "Classifies top-vs-bottom strikes on a water bottle from their audio spectrograms — an unsupervised K-means classifier reaching 95% blind-test accuracy through robust preprocessing and careful evaluation.",
    tags: ["scikit-learn", "Audio", "K-means", "Signal processing"],
    links: [{ label: "github.com/mertall/audio-classification", href: "https://github.com/mertall/audio-classification" }],
  },
  {
    id: "accenture",
    period: "Sep 2021 — Jul 2025",
    kind: "role",
    title: "Senior Software Engineer · Associate Manager (CL8)",
    org: "Accenture Federal Services",
    location: "Custom Software Engineering / MLE Group · Remote",
    summary:
      "Promoted from CL9. Co-architected a 100k+ user enterprise data platform (99.9% SLOs, p95 −40%), was an early adopter of vector search for RAG (Recall@10 +20%), and built an ACID-compliant federated search platform serving 2M+ users.",
    tags: ["Data platforms", "RAG", "Vector search", "Microservices", "Federal"],
  },
  {
    id: "visionsearch",
    period: "Nov 2024",
    kind: "project",
    label: "Project",
    title: "Multimodal Image–Text Vector Search",
    org: "VisionSearch · CLIP · HNSW · FastAPI · SageMaker",
    summary:
      "Text-to-image search over CLIP embeddings with an HNSW (hnswlib) index, served via FastAPI. A CLIP model is packaged with a custom handler, pushed to S3, and deployed as a SageMaker inference endpoint returning L2-normalized embeddings. Chose embedding retrieval over generative RAG for latency and determinism.",
    tags: ["CLIP", "hnswlib", "FastAPI", "SageMaker", "S3", "PyTorch"],
    links: [{ label: "github.com/mertall/VisionSearch", href: "https://github.com/mertall/VisionSearch" }],
    diagram: `flowchart LR
  subgraph AWS["AWS SageMaker"]
    DEPLOY["sagemaker_deploy"] --> S3["S3 — model.tar.gz"]
    S3 --> EP["CLIP Inference Endpoint"]
    DEPLOY --> EP
  end
  subgraph Ingest["Ingest + Index"]
    DS["HuggingFace Dataset"] --> BUILD["build_index"]
    BUILD --> ENCIMG["CLIP encode_image"]
    ENCIMG --> EP
    EP --> ADD["add_items"]
    ADD --> HNSW["HNSW Index — hnswlib"]
    HNSW --> DISK["Saved index + image_paths"]
  end
  subgraph Query
    CL["Client — React or curl"] --> APP["FastAPI app"]
    APP --> ENCTXT["CLIP encode_text"]
    ENCTXT --> EP
    APP --> KNN["HNSW knn_query top-k"]
    KNN --> HNSW
    KNN --> RESP["paths + scores"]
    RESP --> CL
  end`,
  },
  {
    id: "acc-data-platform",
    period: "2021 — 2025",
    kind: "project",
    label: "Deployed Solution",
    title: "Enterprise Data Platform",
    org: "Accenture Federal Services",
    summary:
      "A production system serving 100k+ users at 99.9% SLOs with p95 latency cut 40%. I built the full backend — a streaming API, data ingestion, processing, and serving APIs — with authentication handled by the DoD client. I built the Elasticsearch indexing pipelines with NLP enrichment that boosts discoverability: back- and forward-translation, synonym augmentation, and generative text creation. I also architected and built a multi-tenant, cross-organization user-profile service that tracks preferences and metadata from external orgs, and built an MCP server exposing the platform's APIs behind an AI agentic chat interface to explore and understand new data and to upload new data. Architecture shown high-level (proprietary/federal).",
    tags: ["Data platform", "Streaming API", "Elasticsearch", "NLP enrichment", "MCP server", "Agentic chat", "Multi-tenant", "SLOs", "Deployed"],
    diagram: `flowchart LR
  SRC["Source Systems"] --> ING["Data Ingestion"]
  ING --> STREAM["Streaming API"]
  ING --> STORE["Storage Layer"]
  STORE --> PROC["Processing + Transformations"]
  subgraph Enrich["NLP Enrichment — discoverability"]
    TRANS["Back + Forward Translation"]
    SYN["Synonym Augmentation"]
    GEN["Generative Text Creation"]
  end
  PROC --> TRANS
  PROC --> SYN
  PROC --> GEN
  TRANS --> ESIDX["Elasticsearch Indexing Pipeline"]
  SYN --> ESIDX
  GEN --> ESIDX
  ESIDX --> API["Serving APIs"]
  STREAM --> API
  API --> USERS["100k+ Users"]
  CHAT["AI Agentic Chat — understand & upload data"] --> MCP["MCP Server — platform APIs"]
  MCP --> API
  MCP -->|upload new data| ING
  PROFILE["Multi-tenant User Profile Service"] --> API
  EXT["External Orgs"] -.preferences + metadata.-> PROFILE
  AUTH["AuthN + AuthZ — DoD client"] -.-> API
  OBS["Observability + SLO Monitoring"] -.-> API`,
  },
  {
    id: "acc-rag",
    period: "2022 — 2024",
    kind: "project",
    label: "Prototype",
    title: "GenAI Retrieval Prototype (RAG)",
    org: "Accenture Federal Services",
    summary:
      "An early production bet on vector search, adopted as the technology first emerged: documents embedded with Sentence Transformers into an Elasticsearch vector DB, retrieved for RAG, improving Recall@10 ~20%. Informed an LLM-deployment white paper for the Intelligence Community. Architecture shown high-level (proprietary/federal).",
    tags: ["RAG", "Sentence Transformers", "Elasticsearch vector DB", "Evals", "Early adopter"],
    diagram: `flowchart LR
  DOCS["Document Corpus"] --> CHUNK["Chunk + Sentence-Transformers Embed"]
  CHUNK --> VDB["Elasticsearch Vector DB"]
  Q["User Query"] --> RET["Retriever"]
  VDB --> RET
  RET --> LLM["LLM"]
  LLM --> ANS["Response"]
  EVAL["Eval Harness — Recall@10"] -.-> RET
  JUDGE["LLM-as-Judge — answer quality"] -.-> ANS`,
  },
  {
    id: "acc-federated-search",
    period: "2021 — 2025",
    kind: "project",
    label: "Deployed Solution",
    title: "Federated Search Platform",
    org: "Accenture Federal Services",
    summary:
      "A production federated search with ACID-compliant NoSQL queries (MongoDB multi-document transactions) that federates across on-prem and cloud databases — JDBC ingest into MongoDB, NLP enrichment, Elasticsearch indexing — served by distributed microservices to 2M+ users. Architecture shown high-level (proprietary/federal).",
    tags: ["ACID NoSQL", "MongoDB", "Elasticsearch", "NLP", "Microservices", "On-prem + Cloud", "Deployed"],
    diagram: `flowchart LR
  subgraph Sources["Federated Sources"]
    ONP["On-prem Databases"]
    CLD["Cloud Databases"]
  end
  ONP -->|JDBC| ING["Ingestion"]
  CLD -->|JDBC| ING
  ING --> MONGO["MongoDB — System of Record"]
  MONGO --> NLP["NLP Enrichment"]
  NLP --> ES["Elasticsearch Index"]
  ES --> SAPI["Search API"]
  SAPI --> SVC["Distributed Microservices"]
  SVC --> USERS["2M+ Users"]`,
  },
  {
    id: "ravata",
    period: "Jul 2021 — Sep 2021",
    kind: "role",
    title: "AI Engineer (Contract)",
    org: "Ravata Solutions",
    summary: "Computer vision for embryo-health analysis at a reproductive-health startup.",
    tags: ["Computer vision", "Healthcare"],
  },
  {
    id: "mit-lincoln",
    period: "Jul 2021 — Aug 2021",
    kind: "role",
    title: "Associate Instructor, Quantum Computing",
    org: "MIT Lincoln Laboratory",
    summary: "Taught an applied quantum-computing summer course.",
    tags: ["Quantum", "Teaching"],
  },
  {
    id: "hosvd",
    period: "May 2020",
    kind: "project",
    label: "Project",
    title: "HOSVD Facial Recognition",
    org: "Personal project",
    summary:
      "A higher-order SVD facial-recognition project intended to drive room security and mood lighting, combining OpenCV/PiCam capture with IR-sensor scripts on a Raspberry Pi.",
    tags: ["Computer vision", "HOSVD", "OpenCV", "Raspberry Pi"],
    links: [{ label: "github.com/mertall/HOSVD", href: "https://github.com/mertall/HOSVD" }],
  },
  {
    id: "qeot",
    period: "May 2019",
    kind: "project",
    label: "Project",
    title: "QEOT — Qualitative Evaluation of Text",
    org: "Personal project",
    summary:
      "An early NLP project that cleans web-page text into a knowledge base — two preprocessing models plus a custom “understandability” metric, built with spaCy and CoreNLP while researching SQuAD 2.0 and BERT for downstream QA.",
    tags: ["NLP", "spaCy", "CoreNLP", "BERT", "Python"],
    links: [{ label: "github.com/mertall/QEOT", href: "https://github.com/mertall/QEOT" }],
  },
  {
    id: "space-satellite",
    period: "Sep 2018 — Aug 2021",
    kind: "role",
    title: "Edge AI & Software Engineering",
    org: "Space and Satellite Systems",
    summary: "Edge AI on LEO-satellite imagery and PID control for onboard systems.",
    tags: ["Edge AI", "Satellite imagery", "PID control"],
  },
  {
    id: "vmware",
    period: "Oct 2018 — Mar 2019",
    kind: "role",
    title: "Transformer Representation Learning",
    org: "VMware",
    summary:
      "BERT-based question answering over cloud documentation — early applied NLP / representation learning.",
    tags: ["NLP", "BERT", "QA"],
  },
  {
    id: "uc-davis",
    period: "Education",
    kind: "education",
    title: "B.A.S., Computational and Scientific Mathematics",
    org: "University of California, Davis",
    summary: "Foundation in computational mathematics, plus ongoing certifications.",
    points: [
      "HuggingFace AI Agents (2025)",
      "Databricks GenAI Engineer (2024)",
      "CU-Boulder Advanced Algorithms (2024)",
      "IBM Variational Algorithms (2024)",
      "Stanford Machine Learning (2019)",
    ],
    tags: ["Mathematics", "Certifications"],
  },
];
