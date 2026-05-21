export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  skills: string[];
  image: string;
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  date: string;
}

export const portfolioData = {
  profile: {
    name: "Hassan Ashraf",
    title: "Technology Leader | AI/ML & Data Platform Expert",
    shortBio: "Expert in designing enterprise-wide data and AI strategies and building scalable infrastructure.",
    longBio: [
      "Technology leader with 15+ years of experience architecting enterprise AI/ML strategies, scalable data platforms, and distributed streaming systems across FinTech, Healthcare, Logistics, and Smart Mobility.",
      "Proven track record of aligning deep technical engineering with commercial objectives, managing large-scale infrastructure investments, and leading high-performance cross-functional engineering teams.",
      "Expert in designing enterprise-wide cloud platforms (AWS, Azure, GCP), automated MLOps pipelines, and data governance frameworks that drive measurable business value."
    ],
    email: "hassan.ashraf.sahi@gmail.com",
    phone: "+971 56 758 2323",
    location: "Dubai, UAE",
    socials: {
      github: "https://github.com/hassanashraf",
      linkedin: "https://www.linkedin.com/in/hassan-a-5506196/",
      email: "mailto:hassan.ashraf.sahi@gmail.com"
    }
  },
  skills: [
    "Engineering Leadership",
    "Big Data Platforms",
    "Data Governance",
    "Data Modeling",
    "Modern Data Stack",
    "DataOps & MLOps",
    "Generative AI",
    "Machine Learning"
  ],
  experiences: [
    {
      role: "Principal Data Engineer",
      company: "Mindshare",
      location: "Dubai, UAE",
      duration: "2021 – PRESENT",
      description: "Pivoted and scaled data infrastructure strategies in the digital media domain, leading the design and delivery of production-ready data platforms for AutoML, MLOps, and generative AI initiatives.",
      bullets: [
        "Designed and implemented a production-grade Databricks Lakehouse platform on Azure, enabling multi-source ingestion.",
        "Reduced new customer onboarding time from two weeks to 8 hours through ingestion standardization.",
        "Created schema registry schemas and data contracts to automate MLOps lifecycles for over 100 AI models.",
        "Delivered a RAG-based natural language interface, enabling non-technical stakeholders to query complex data sets directly."
      ],
      skills: ["Azure", "Databricks", "AdVerity", "Python", "SQL", "DataRobot", "GCP", "Snowflake"]
    },
    {
      role: "Lead Data Engineer",
      company: "Vezeeta",
      location: "Dubai, UAE",
      duration: "2019 – 2021",
      description: "Launched the Data Platform Program as the first engineering hire. Scaled data infrastructure and advanced analytics for a fast-paced, high-volume healthcare technology environment.",
      bullets: [
        "Designed and implemented an AWS cloud-native batch and real-time processing data platform.",
        "Integrated 10+ core transactional and operational sources to support cross-functional insights.",
        "Developed a real-time Kafka streaming pipeline for delivery dispatch monitoring, enabling proactive operations.",
        "Built a comprehensive Patient 360-degree Profile model with 100+ features for longitudinal and recommendation analysis."
      ],
      skills: ["AWS", "AWS Glue", "PySpark", "AWS Athena", "Kafka", "ksqlDB", "Kubernetes", "dbt", "Tableau"]
    },
    {
      role: "Head of Data Science",
      company: "Surface Mobility Consultant",
      location: "Dubai, UAE",
      duration: "2018 – 2019",
      description: "Directed AI/ML strategy and execution for smart mobility public transit digital transformation at RTA Dubai, directing cross-functional analytics and data engineering units.",
      bullets: [
        "Delivered 20+ high-impact AI/ML predictive and geospatial models, optimizing bus routes and taxi dispatch schedules.",
        "Created custom MicroStrategy GIS visualizers to overlay road geometries, resolving a critical project roadblock.",
        "Received formal CEO recognition for delivering breakthrough capabilities in RTA mobility analytics.",
        "Aligned regulatory standards with transit models through close collaboration with planners and planners."
      ],
      skills: ["Cloudera", "ArcGIS", "SparkML", "TensorFlow", "Hive", "MicroStrategy", "Python", "SQL"]
    },
    {
      role: "Lead Data Engineer",
      company: "PegB",
      location: "Dubai, UAE",
      duration: "2017 – 2018",
      description: "Directed tech stack evaluations and architectural designs for a high-security fintech database platform migration.",
      bullets: [
        "Migrated enterprise databases from MySQL to a highly available Cloudera-based data lake.",
        "Built Kafka-based streaming applications to support low-latency fintech data processing and analytics."
      ],
      skills: ["MySQL", "Cloudera", "Sqoop", "PySpark", "Kafka", "Scala", "Docker", "SQL"]
    },
    {
      role: "Lead Data Engineer",
      company: "QExpress (acquired by Amazon)",
      location: "Dubai, UAE",
      duration: "2017 – 2017",
      description: "Designed a secure and optimized AWS Redshift data warehouse, establishing standardized corporate analytical flows.",
      bullets: [
        "Migrated legacy MySQL and Pentaho data warehouses into the cloud-native AWS Redshift ecosystem.",
        "Developed high-impact executive dashboards in MicroStrategy to support senior leadership strategy."
      ],
      skills: ["AWS Redshift", "Kettle Pentaho", "MicroStrategy", "Python", "SQL"]
    },
    {
      role: "Data Warehouse Specialist",
      company: "Designet",
      location: "Boston, USA",
      duration: "2010 – 2016",
      description: "Pioneered PostgreSQL data warehousing architecture as the first employee of an AWS SaaS telecom analytics startup.",
      bullets: [
        "Reduced telecom customer onboarding time from 6 weeks to 1 week through ETL automation and schemas standardization.",
        "Developed high-throughput ETL jobs using Java, SQL, and Shell scripting with built-in data quality contracts.",
        "Collaborated with multi-tenant partners to migrate client instances onto the AWS SaaS reporting platform."
      ],
      skills: ["AWS RDS (Postgres)", "Kafka", "Docker", "Pentaho PDI", "SQL Server", "Java", "Python"]
    },
    {
      role: "Professional Services Consultant",
      company: "Teradata",
      location: "Islamabad, Pakistan",
      duration: "2006 – 2010",
      description: "Delivered customized BI architectures, schema designs, and ETL pipelines for prominent telecom and banking institutions.",
      bullets: [
        "Led the design and creation of an executive dashboard for Pakistan's largest telecom, securing top-management project sponsorship.",
        "Implemented high-volume BI schema optimizations and Teradata ETL pipelines."
      ],
      skills: ["Teradata", "Shell Scripting", "SQL", "MicroStrategy", "Tableau", "Oracle"]
    },
    {
      role: "Software Engineer",
      company: "DPS",
      location: "Islamabad, Pakistan",
      duration: "2005 – 2006",
      description: "Engineered robust modules and reusable libraries for J2EE-based enterprise banking systems.",
      bullets: [
        "Designed a reusable banking class library utilized across core transaction modules.",
        "Managed successful onsite banking application deployments and client technical training."
      ],
      skills: ["Java", "J2EE", "Spring Boot", "HTML/CSS", "SQL"]
    },
    {
      role: "Software Engineer",
      company: "Makabu",
      location: "Islamabad, Pakistan",
      duration: "2005 – 2005",
      description: "First developer in the Java engineering team, maintaining and tuning legacy web applications.",
      bullets: [
        "Analyzed code pathways and optimized database queries to enhance application performance."
      ],
      skills: ["Java", "J2EE", "Struts", "HTML/CSS", "SQL"]
    }
  ] as Experience[],
  projects: [
    {
      title: "RAG-Based Enterprise Analytics Interface",
      description: "Architected and delivered an enterprise-grade Retrieval-Augmented Generation (RAG) natural language interface, removing barriers between technical and business stakeholders.",
      highlights: [
        "Allowed business users to query Databricks Lakehouse data using plain language.",
        "Reduced internal report generation cycles from hours to seconds.",
        "Supported security profiles and data contracts for compliant LLM interactions."
      ],
      skills: ["Azure", "Databricks", "Generative AI", "Python", "LlamaIndex", "SQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Self-Service AWS Data Lakehouse Platform",
      description: "Designed a multi-tenant, cloud-native self-service data platform integrating over 10 internal and third-party transaction systems.",
      highlights: [
        "Engineered standardized Glue and PySpark ingestion pipelines to eliminate ingestion silos.",
        "Implemented schema registry, automated data cataloging, and automated DQ checks.",
        "Reduced onboarding time for new business units from weeks to days."
      ],
      skills: ["AWS Glue", "PySpark", "Athena", "AWS S3", "Schema Registry", "dbt"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YJbeOLcG538i7doDVqdUqjkjXcm_mfzYhA&s"
    },
    {
      title: "Real-time Pharmacy Delivery Stream",
      description: "Pioneered the architecture and implementation of an event-driven telemetry stream to monitor operational dispatch and delivery logs.",
      highlights: [
        "Used Kafka and ksqlDB to calculate delivery ETA updates in real-time.",
        "Enabled operations centers to dynamically reroute delayed couriers and address bottlenecks.",
        "Combined streams with transactional patient profiles for personalized health recommendations."
      ],
      skills: ["Kafka", "ksqlDB", "AWS Lambda", "Kubernetes", "PySpark", "Docker"],
      image: "https://www.shopurgrocery.com/wordpress/wp-content/uploads/2025/03/pharmacy-delivery.jpg"
    }
  ] as Project[],
  education: [
    {
      degree: "General Management Courses",
      school: "Harvard University Extension School",
      date: "Dec 2014"
    },
    {
      degree: "Master of Software Engineering",
      school: "COMSATS Institute of Information Technology",
      date: "July 2005"
    }
  ] as Education[]
};
