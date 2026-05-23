export interface BlogPost {
  id: number | string;
  title: string;
  slug: string;
  created_at: string;
  excerpt: string;
  tags: string[];
  category: string;
  content: string;
  published: boolean;
}

export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Scaling MLOps: Automating Lifecycles for 100+ Models on Databricks Lakehouse",
    slug: "scaling-mlops-databricks-lakehouse",
    created_at: "2026-05-15T00:00:00.000Z",
    excerpt: "How we leveraged Databricks Unity Catalog, MLflow, and strict schema registries to build automated training, validation, and deployment gates.",
    tags: ["Databricks", "MLOps", "Azure"],
    category: "AI/ML Infrastructure",
    content: "Deploying a machine learning model is easy, but managing hundreds of models is where the challenge lies.",
    published: true,
  },
  {
    id: 2,
    title: "Standardizing Data Ingestion: Reducing Onboarding from 2 Weeks to 8 Hours",
    slug: "standardizing-data-ingestion-customer-onboarding",
    created_at: "2026-04-02T00:00:00.000Z",
    excerpt: "A deep dive into building declarative ingestion templates using AdVerity, PySpark, and custom schema validation pipelines.",
    tags: ["PySpark", "AdVerity", "Data Lakehouse"],
    category: "Data Engineering",
    content: "Data silos are the enemy of speed. Standardizing pipelines is the solution.",
    published: true,
  }
];