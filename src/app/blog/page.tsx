"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Calendar, Clock, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Scaling MLOps: Automating Lifecycles for 100+ Models on Databricks Lakehouse",
    slug: "scaling-mlops-databricks-lakehouse",
    created_at: "2026-05-15T00:00:00.000Z",
    excerpt: "How we leveraged Databricks Unity Catalog, MLflow, and strict schema registries to build automated training, validation, and deployment gates for enterprise-grade AI applications.",
    tags: ["Databricks", "MLOps", "Azure", "Python", "MLflow"],
    category: "AI/ML Infrastructure",
    content: "",
    published: true,
  },
  {
    id: 2,
    title: "Standardizing Data Ingestion: Reducing Customer Onboarding from 2 Weeks to 8 Hours",
    slug: "standardizing-data-ingestion-customer-onboarding",
    created_at: "2026-04-02T00:00:00.000Z",
    excerpt: "A deep dive into building declarative ingestion templates using AdVerity, PySpark, and custom schema validation pipelines to safely ingest and transform diverse digital marketing channels.",
    tags: ["PySpark", "AdVerity", "Data Lakehouse", "SQL"],
    category: "Data Engineering",
    content: "",
    published: true,
  },
  {
    id: 3,
    title: "Architecting Real-Time Telemetry: Kafka and ksqlDB for Low-Latency Logistics Streams",
    slug: "architecting-real-time-telemetry-kafka-ksqldb",
    created_at: "2026-02-22T00:00:00.000Z",
    excerpt: "Technical challenges and solutions in processing millions of pharmacy courier dispatch coordinates, dynamically recalculating delivery ETAs, and generating proactive operational triggers.",
    tags: ["Kafka", "ksqlDB", "Kubernetes", "AWS Glue"],
    category: "Stream Processing",
    content: "",
    published: true,
  },
  {
    id: 4,
    title: "PostgreSQL Data Warehousing at Scale: From 6-Week Setup to 1-Week Automations",
    slug: "postgresql-data-warehousing-scale",
    created_at: "2025-12-14T00:00:00.000Z",
    excerpt: "ETL automation blueprints, schema designs, and data contracts that enabled an AWS telecom analytics startup to scale multi-tenant SaaS reporting platforms smoothly.",
    tags: ["AWS RDS", "PostgreSQL", "Java", "Pentaho PDI"],
    category: "Data Architecture",
    content: "",
    published: true,
  },
];

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadTime(content: string) {
  const words = content?.split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogListing() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setPosts(data as BlogPost[]);
        } else {
          setPosts(FALLBACK_POSTS);
        }
      } catch {
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags ?? [])));

  const filteredPosts = posts.filter((post) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
    const matchesTag = selectedTag ? (post.tags ?? []).includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="relative min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans selection:bg-teal-300/20 selection:text-teal-200">
      {/* Sleek Navigation Bar */}
      <nav className="sticky top-0 z-30 border-b border-[#333333]/50 bg-[#1e1e1e]/90 px-6 py-4 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-teal-400 transition-colors font-medium">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 text-xs text-teal-400 hover:bg-teal-500/20 hover:border-teal-400/50 transition-all font-semibold"
            >
              Write Post
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-12 border-b border-[#333333]/50 pb-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 font-sans">
            Engineering Insights
          </h1>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-2xl">
            Deep dives into enterprise MLOps lifecycles, real-time data engineering architectures, 
            distributed streaming systems, and high-performance cloud infrastructure.
          </p>
        </header>

        {/* Search & Filter */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-neutral-500" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-[#181818] border border-[#333333] rounded-lg px-4 py-2.5 pl-10 text-sm text-[#d4d4d4] focus:outline-none focus:border-teal-400 font-sans transition-colors placeholder-neutral-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full bg-[#181818] border border-[#333333] rounded-lg px-4 py-2.5 text-sm text-[#d4d4d4] focus:outline-none focus:border-teal-400 font-sans transition-colors"
              value={selectedTag ?? ""}
              onChange={(e) => setSelectedTag(e.target.value || null)}
            >
              <option value="">Filter by Tech Stack</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active tag chip */}
        {selectedTag && (
          <div className="flex items-center gap-2 mb-6 text-sm font-sans">
            <span className="text-neutral-500">Filtering by:</span>
            <span className="bg-teal-400/10 text-teal-300 px-3 py-1 rounded-full border border-teal-500/20 text-xs font-semibold">
              {selectedTag}
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-neutral-500 hover:text-teal-400 transition-colors text-xs hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Loading state */}
        {loading ? (
          <div className="flex items-center justify-center py-24 text-neutral-400 font-sans text-sm">
            <RefreshCw size={16} className="animate-spin mr-2 text-teal-400" />
            Loading posts from data source...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-dashed border-[#333333] font-sans">
            <p className="text-neutral-500">
              No matching posts found for &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
              className="mt-4 text-teal-400 hover:text-teal-300 transition-colors font-semibold text-sm hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col p-6 rounded-xl border border-[#333333]/40 bg-[#181818]/60 hover:bg-[#252526]/50 hover:border-[#333333]/80 transition-all duration-300 shadow-md shadow-black/5"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-sans mb-3">
                  <span className="text-teal-400 font-semibold uppercase tracking-wider">{post.category}</span>
                  {post.created_at && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.created_at)}
                      </span>
                    </>
                  )}
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {estimateReadTime(post.content)}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-sans text-slate-100 group-hover:text-teal-400 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute -inset-x-0 -inset-y-0 z-20 rounded-xl"></span>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tag badges */}
                <ul className="mt-5 flex flex-wrap gap-1.5 z-30">
                  {(post.tags ?? []).map((tag) => (
                    <li key={tag}>
                      <button
                        onClick={() => setSelectedTag(tag)}
                        className="flex items-center rounded-full bg-[#1e1e1e] border border-[#333333] hover:border-teal-500/40 px-3 py-1 text-xs text-neutral-400 hover:text-teal-400 transition-all"
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-1 text-xs text-teal-400 font-semibold group-hover:text-teal-300 transition-colors">
                  <span>Read Article</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
        )}

        <footer className="mt-24 border-t border-[#333333]/50 pt-8 text-center text-xs text-neutral-500 font-sans">
          <p>© 2026 Hassan Ashraf · Technology Leadership & AI Infrastructure</p>
        </footer>
      </div>
    </div>
  );
}
