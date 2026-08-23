/* =====================================================
   NEXUS Portfolio - Projects Data (Updated from Resume)
===================================================== */

const projectsData = [
    {
        id: "student-stress-analyser",
        title: "Student Stress Analyser",
        category: "AI / Cloud",
        featured: true,
        summary: "AI-powered web application analyzing student academic stress levels, mental wellness indicators, and burnout metrics using machine learning models.",
        description: "Engineered an interactive AI application deployed on Streamlit analyzing student stress patterns, workload intensity, sleep quality, and academic pressure metrics. Features real-time ML stress risk scoring, personalized coping recommendations, and interactive data visualization charts.",
        technologies: ["Python", "Streamlit", "Machine Learning", "Scikit-Learn", "Pandas", "Plotly"],
        image: "assets/images/stress-analyser-preview.svg",
        github: "https://github.com/RashilKumar513/student-stress-ai",
        demo: "https://student-stress-ai.streamlit.app/",
        caseStudy: "pages/future-project.html",
        highlights: [
            "Deployed live interactive AI application on Streamlit Cloud",
            "Real-time machine learning stress risk prediction engine",
            "Multi-attribute analysis: sleep hours, GPA pressure, workload & screen time",
            "Interactive Plotly visualization dashboards & personalized wellness recommendations"
        ],
        preview: {
            architecture: "Streamlit UI -> Pandas Preprocessing -> Scikit-Learn ML Model -> Plotly Interactive Visualizer",
            keyMetrics: [
                { label: "Deployment", value: "Streamlit Cloud" },
                { label: "ML Model", value: "Risk Classifier" },
                { label: "Visualizer", value: "Plotly Charts" }
            ],
            features: [
                "Real-time student stress level assessment",
                "Workload vs sleep correlation analysis",
                "Personalized AI mental wellness & coping strategies",
                "Instant live demo link and open-source GitHub repository"
            ]
        }
    },
    {
        id: "ai-lecture-notes",
        title: "AI Lecture to Notes Generator",
        category: "AI / Cloud",
        featured: true,
        summary: "AI-powered web application converting 100+ audio lectures into structured study notes using Gemini API v2.5 with 85% accuracy.",
        description: "Built an intelligent study tool that processes raw audio files, executes base64 encoding, and sends asynchronous requests to Gemini API v2.5. Implemented exponential backoff strategies to achieve a 99% API success rate with <500ms response time and a 95+ Lighthouse performance score.",
        technologies: ["JavaScript", "Gemini API v2.5", "HTML5", "Tailwind CSS", "REST APIs"],
        image: "assets/images/ai-notes-preview.svg",
        github: "https://github.com/RashilKumar513/lecture-to-notes-generator",
        demo: "https://lecturetonotesgenerator.netlify.app/",
        caseStudy: "pages/future-project.html",
        highlights: [
            "Converted 100+ audio files into structured notes with 85% accuracy",
            "Integrated Gemini API v2.5 processing 1000+ requests with <500ms latency",
            "Base64 media processing & exponential backoff reducing API errors by 98%",
            "95+ Lighthouse performance score across all devices"
        ],
        preview: {
            architecture: "Client-Side Audio Ingestion -> Base64 Encoder -> Gemini API v2.5 -> Markdown Formatter",
            keyMetrics: [
                { label: "API Success Rate", value: "99%" },
                { label: "Response Time", value: "< 500ms" },
                { label: "Lighthouse Score", value: "95+" }
            ],
            features: [
                "Automated audio-to-text transcript extraction",
                "Key concept summarization and flashcard generation",
                "Exponential backoff retry mechanism for API reliability",
                "Responsive dark mode UI built with Tailwind CSS"
            ]
        }
    },
    {
        id: "homely-hub",
        title: "Homely Hub - Property Rental Platform",
        category: "Full Stack",
        featured: true,
        summary: "Full-stack MERN property rental platform featuring 500+ listings, Stripe payment integration, and JWT authentication.",
        description: "Engineered an end-to-end rental application with 95%+ uptime. Secured payment transactions for 500+ bookings using Stripe Payment Gateway with 99.9% reliability. Optimized database performance by 40% through custom MongoDB index strategies.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API", "JWT", "Bootstrap"],
        image: "assets/images/homelyhub-preview.svg",
        github: "https://github.com/RashilKumar513",
        demo: "https://github.com/RashilKumar513",
        caseStudy: "#",
        highlights: [
            "Built platform supporting 500+ listings with 95%+ uptime",
            "Stripe Payment Gateway processing 500+ transactions with 99.9% reliability",
            "JWT auth handling 1000+ concurrent user sessions",
            "40% reduction in DB query latency via MongoDB indexing"
        ],
        preview: {
            architecture: "React Single Page App -> Express REST API -> JWT Middleware -> MongoDB Index Store + Stripe Gateway",
            keyMetrics: [
                { label: "Listings Capacity", value: "500+" },
                { label: "Payment Reliability", value: "99.9%" },
                { label: "DB Query Gain", value: "40% faster" }
            ],
            features: [
                "Advanced multi-attribute search and property filter filters",
                "Secure checkout flow with Stripe webhooks",
                "JWT session authentication and token refresh",
                "Responsive component-based React dashboard"
            ]
        }
    },
    {
        id: "agri-drone",
        title: "Agri Drone Intelligence Platform",
        category: "AI / Cloud",
        featured: true,
        summary: "Smart agriculture drone zone classification engine and crop readiness scoring system covering 30+ districts across Tamil Nadu.",
        description: "Created a spatial intelligence web app classifying drone flight zones (Red/Yellow/Green) based on proximity to 6 major airports using geodesic distance algorithms. Includes drone readiness scoring (0-100) for crop spraying and NDVI yield analysis.",
        technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Geopy", "Data Analytics"],
        image: "assets/images/agridrone-preview.svg",
        github: "https://github.com/RashilKumar513/Agri_Drone_Intelligent_System",
        demo: "https://agri-drone-intelligent-system.streamlit.app/",
        caseStudy: "pages/future-project.html",
        highlights: [
            "Analyzed district-wise agricultural data across 30+ districts in Tamil Nadu",
            "Airport geodesic proximity engine classifying Red/Yellow/Green drone zones",
            "Smart readiness scoring algorithm (0-100) for crop spraying & NDVI analysis",
            "Interactive Plotly maps & spatial charts for decision support"
        ],
        preview: {
            architecture: "Geospatial Data Ingestion -> Geodesic Distance Engine -> Streamlit Interactive Maps & Dashboards",
            keyMetrics: [
                { label: "Districts Covered", value: "30+" },
                { label: "Airports Mapped", value: "6 Major TN" },
                { label: "Zone Score", value: "0 - 100 Scale" }
            ],
            features: [
                "Geodesic distance calculation for airport zone boundaries",
                "NDVI vegetation index analysis & crop yield estimation",
                "Interactive spatial pie charts and district breakdown bars",
                "Smart recommendation engine for drone operators"
            ]
        }
    },
    {
        id: "rag-chatbot",
        title: "Document-Based RAG Chatbot",
        category: "AI / Cloud",
        featured: false,
        summary: "AI Chatbot enabling PDF ingestion, vector search with ChromaDB & Ollama (llama3.2), and zero-hallucination grounded responses.",
        description: "Engineered a local retrieval-augmented generation (RAG) system processing uploaded PDF documents. Performs text extraction, chunking, and local vector embeddings using sentence-transformers (all-MiniLM-L6-v2) and ChromaDB, coupled with Ollama llama3.2 query decomposition.",
        technologies: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers", "Ollama (llama3.2)", "pypdf"],
        image: "assets/images/rag-preview.svg",
        github: "https://github.com/RashilKumar513",
        demo: "https://github.com/RashilKumar513",
        caseStudy: "#",
        highlights: [
            "Local vector search with ChromaDB and SentenceTransformer (all-MiniLM-L6-v2)",
            "Query decomposition splitting complex questions with Ollama llama3.2",
            "Streamed answers with strict context grounding & source citation",
            "Zero hallucination guarantee by notifying when context is absent"
        ],
        preview: {
            architecture: "PDF Ingestion -> PyPDF Chunking -> SentenceTransformers -> ChromaDB -> Ollama llama3.2 Stream",
            keyMetrics: [
                { label: "Embedding Model", value: "MiniLM-L6" },
                { label: "LLM Model", value: "Llama 3.2" },
                { label: "Context Accuracy", value: "Strict Grounding" }
            ],
            features: [
                "Drag-and-drop PDF parsing & chunking engine",
                "Local vector embeddings without external API costs",
                "Multi-part question decomposition into semantic search tasks",
                "Real-time answer streaming with explicit source citations"
            ]
        }
    },
    {
        id: "face-recognition",
        title: "Real-Time Biometric Security System",
        category: "AI / Cloud",
        featured: false,
        summary: "Biometric security system achieving 92% face recognition accuracy using Haar Cascade detection and LBPH algorithms at 30 FPS.",
        description: "Developed a dual-stage computer vision application in Python and OpenCV. Combines Haar Cascade rapid face detection with Local Binary Patterns Histograms (LBPH) texture recognition, managed through a custom Tkinter desktop interface with 100+ profile retraining.",
        technologies: ["Python", "OpenCV", "Tkinter", "Haar Cascade", "LBPH Algorithm"],
        image: "assets/images/face-preview.svg",
        github: "https://github.com/RashilKumar513",
        demo: "https://github.com/RashilKumar513",
        caseStudy: "#",
        highlights: [
            "Achieved 92% recognition accuracy across variable lighting conditions",
            "Dual-stage detection: Haar Cascade + LBPH texture classification",
            "Real-time 30 FPS video stream processing on standard hardware",
            "Tkinter GUI managing 100+ user face profiles with retraining"
        ],
        preview: {
            architecture: "OpenCV Camera Feed -> Haar Cascade Bounding Box -> LBPH Texture Extractor -> Tkinter GUI",
            keyMetrics: [
                { label: "Recognition Accuracy", value: "92%" },
                { label: "Frame Rate", value: "30 FPS" },
                { label: "Profile Capacity", value: "100+ Faces" }
            ],
            features: [
                "Real-time camera feed face detection and highlighting",
                "LBPH texture histogram feature extraction",
                "Automated dataset collection and model retraining workflow",
                "Confidence score threshold filtering"
            ]
        }
    },
    {
        id: "courier-management",
        title: "Web-Based Courier Management System",
        category: "Backend",
        featured: false,
        summary: "Full-stack courier tracking platform replacing manual ledgers with real-time analytics and CRUD operations for 1000+ monthly shipments.",
        description: "Replaced legacy paper record-keeping with a digital web dashboard powered by Node.js, Express.js, and SQLite. Features full CRUD management, real-time KPI visualization, and operational efficiency gains of 50%.",
        technologies: ["Node.js", "Express.js", "SQLite", "REST APIs", "CRUD Operations"],
        image: "assets/images/courier-preview.svg",
        github: "https://github.com/RashilKumar513",
        demo: "https://github.com/RashilKumar513",
        caseStudy: "#",
        highlights: [
            "Managed 1000+ monthly shipments through centralized digital dashboard",
            "Real-time analytics module visualizing 15+ operational KPIs",
            "50% reduction in processing overhead and time",
            "SQLite transaction management with full audit logging"
        ],
        preview: {
            architecture: "Express REST Endpoints -> SQLite Database -> Real-Time KPI Dashboard",
            keyMetrics: [
                { label: "Monthly Volume", value: "1000+ Packages" },
                { label: "Operational Gain", value: "50% Time Saved" },
                { label: "KPI Tracking", value: "15+ Metrics" }
            ],
            features: [
                "Shipment creation, status update, and dispatch tracking",
                "Automated tracking number generation and receipt printing",
                "Real-time status filters and search bar",
                "Relational SQLite table schema with foreign keys"
            ]
        }
    },
    {
        id: "intern-hub",
        title: "Intern Hub - Internship Management Portal",
        category: "Full Stack",
        featured: true,
        summary: "Role-based internship portal connecting students with industry placements, featuring RBAC auth and status tracking.",
        description: "Designed and launched a full stack portal with PHP and MySQL supporting student applications, employer vacancy listings, and admin approvals with role-based access control.",
        technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
        image: "assets/images/internhub-preview.svg",
        github: "https://github.com/RashilKumar513/intern-hub",
        demo: "https://internhubportal.infinityfree.io/",
        caseStudy: "pages/internhub.html",
        highlights: [
            "Role-based authentication system for Students, Employers, and Admins",
            "Relational MySQL database architecture for status updates",
            "Deployed to production serving student applications"
        ],
        preview: {
            architecture: "PHP Server Controllers -> MySQL Relational Database -> Bootstrap UI",
            keyMetrics: [
                { label: "User Roles", value: "3 (Student/Employer/Admin)" },
                { label: "Database", value: "MySQL RBAC Schema" },
                { label: "Deployment", value: "Live Web Hosting" }
            ],
            features: [
                "Student resume submission and application tracking",
                "Employer vacancy posting and applicant evaluation",
                "Admin user approval and portal audit logs",
                "Responsive dashboard UI with status badges"
            ]
        }
    }
];
