"use client";
export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FALLBACK_POSTS } from "../page"; 

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      // Pehle check karen ke kia ye fallback posts mein se hai
      const fallback = FALLBACK_POSTS.find(p => p.slug === params.slug);
      
      if (fallback) {
        setPost(fallback);
        setLoading(false);
      } else {
        // Agar fallback mein nahi hai toh database (Supabase) mein dhoonden
        try {
          const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("slug", params.slug)
            .single();
          
          if (data) {
            setPost(data);
          }
        } catch (err) {
          console.error("Error fetching post:", err);
        }
        setLoading(false);
      }
    }
    if (params.slug) fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center text-teal-500 font-mono text-sm">
        Initializing Document...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center text-red-400 font-sans">
        Article Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans selection:bg-teal-300/20">
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-teal-400 mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        <article>
          <header className="mb-10 border-b border-[#333333]/50 pb-8">
            <div className="text-[10px] font-bold text-teal-400 uppercase mb-3 tracking-[0.2em]">
              {post.category}
            </div>
            
            {/* Optimized Heading Size */}
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-100 leading-snug tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-6 text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-neutral-600" /> 
                {new Date(post.created_at).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="prose prose-invert max-w-none">
            <div className="text-neutral-300 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
              {/* Show full content if available, otherwise fallback to excerpt */}
              {post.content || post.excerpt}
            </div>
          </div>

          {/* Bottom Technical Tags */}
          <div className="mt-16 pt-8 border-t border-[#333333]">
            <h4 className="text-[10px] font-bold uppercase text-neutral-600 mb-4 tracking-widest">
              Technical Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-[#252526] text-neutral-400 border border-[#333333] rounded-md text-[11px] font-medium hover:border-teal-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

      
      </div>
    </div>
  );
}