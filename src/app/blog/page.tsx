"use client";
export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Calendar, Clock, RefreshCw } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Inhi posts ka data hum Detail page par bhi use karenge
export const FALLBACK_POSTS = [
  {
    id: 1,
    title: "Scaling MLOps: Automating Lifecycles for 100+ Models on Databricks Lakehouse",
    slug: "scaling-mlops-databricks-lakehouse",
    created_at: "2026-05-15T00:00:00.000Z",
    excerpt: "How we leveraged Databricks Unity Catalog, MLflow, and strict schema registries to build automated training, validation, and deployment gates.",
    tags: ["Databricks", "MLOps", "Azure"],
    category: "AI/ML Infrastructure",
    content: "Full content for MLOps goes here...",
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
    content: "Full content for Data Ingestion goes here...",
    published: true,
  }
];

export default function BlogListing() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false });

        if (data && data.length > 0) {
          // Merge Supabase posts with Fallback posts
          setPosts([...data, ...FALLBACK_POSTS]);
        } else {
          setPosts(FALLBACK_POSTS);
        }
      } catch (err) {
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans">
      <nav className="sticky top-0 z-30 border-b border-[#333333]/50 bg-[#1e1e1e]/90 px-6 py-4 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-teal-400">
            <ArrowLeft size={16} /> <span>Back to Portfolio</span>
          </Link>
          <Link href="/admin" className="text-xs text-teal-400 border border-teal-500/20 px-4 py-1.5 rounded-full hover:bg-teal-500/10">
            Write Post
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
        <header className="mb-12 border-b border-[#333333]/50 pb-8">
          <h1 className="text-3xl font-bold text-slate-100">Engineering Insights</h1>
          <p className="mt-4 text-neutral-400">Deep dives into enterprise MLOps and Cloud Infrastructure.</p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20 text-teal-400 animate-pulse">Loading posts...</div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 rounded-xl border border-[#333333]/40 bg-[#181818]/60 hover:border-teal-500/30 transition-all">
                <div className="text-xs text-teal-400 mb-3 font-bold uppercase">{post.category}</div>
                <h2 className="text-xl font-bold text-slate-100 hover:text-teal-400">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-block text-xs font-bold text-teal-400 hover:underline">
                  READ ARTICLE →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}