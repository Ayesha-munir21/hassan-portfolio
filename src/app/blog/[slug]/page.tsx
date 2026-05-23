"use client";
export const dynamic = 'force-dynamic';
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FALLBACK_POSTS } from "../blogData"; 

export default function BlogPostDetail() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      const slug = params.slug as string;
      const fallback = FALLBACK_POSTS.find(p => p.slug === slug);
      if (fallback) {
        setPost(fallback);
        setLoading(false);
      } else {
        try {
          const { data } = await supabase.from("blogs").select("*").eq("slug", slug).single();
          if (data) setPost(data);
        } catch {
          setPost(null);
        }
        setLoading(false);
      }
    }
    if (params.slug) fetchPost();
  }, [params.slug]);

  if (loading) return <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center text-teal-400 font-mono">Loading...</div>;
  if (!post) return <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center text-red-400">Post Not Found</div>;

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans px-6 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-teal-400 mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <article>
          <header className="mb-10 border-b border-[#333333]/50 pb-8 text-slate-100">
            <div className="text-[10px] font-bold text-teal-400 uppercase mb-3">{post.category}</div>
            <h1 className="text-2xl lg:text-3xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-2 mt-4 text-xs text-neutral-500 font-sans">
              <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString()}
            </div>
          </header>
          <div className="text-neutral-300 leading-relaxed whitespace-pre-wrap text-base md:text-lg">{post.content || post.excerpt}</div>
        </article>
      </div>
    </div>
  );
}