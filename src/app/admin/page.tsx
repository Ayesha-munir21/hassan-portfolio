"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Lock, CheckCircle, AlertCircle, Loader, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ADMIN_PASSWORD = "hassan@admin2026";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  tags: string;
  category: string;
  password: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image_url: "",
    tags: "",
    category: "",
    password: "",
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title
    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim(),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const tagsArray = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const { error } = await supabase.from("blogs").insert([
      {
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        image_url: form.image_url || null,
        tags: tagsArray,
        category: form.category,
        published: true,
      },
    ]);

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
    } else {
      setStatus("success");
      setForm({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        image_url: "",
        tags: "",
        category: "",
        password: "",
      });
    }
  };

  const inputClass =
    "w-full bg-[#181818] border border-[#333333] rounded-lg px-4 py-2.5 text-sm text-[#d4d4d4] font-sans placeholder-neutral-600 focus:outline-none focus:border-teal-400 focus:bg-[#252526] transition-colors";
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-sans";

  // ─── Password Gate ─────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-4 font-sans text-[#d4d4d4]">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-4 shadow-lg shadow-black/20">
              <Lock className="h-5 w-5 text-teal-400" />
            </div>
            <h1 className="text-xl font-bold text-slate-100 font-sans tracking-tight">
              Administrative Authorization
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Enter key to access publishing dashboard
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4 bg-[#181818] border border-[#333333]/60 rounded-xl p-8 shadow-xl shadow-black/30">
            <div>
              <label className={labelClass}>Admin Password</label>
              <input
                type="password"
                className={inputClass}
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
              {passwordError && (
                <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5 font-medium">
                  <AlertCircle className="h-3.5 w-3.5" /> Access Denied: Invalid credentials
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400/50 text-teal-400 font-semibold text-sm py-2.5 rounded-lg transition-all shadow-md shadow-teal-500/5 mt-2"
            >
              Verify Credentials
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Admin Panel ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans">
      {/* Premium Dashboard Top Bar */}
      <nav className="sticky top-0 z-30 border-b border-[#333333]/50 bg-[#1e1e1e]/90 px-6 py-4 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-teal-400 transition-colors font-medium">
            <ArrowLeft size={16} />
            <span>Back to Engineering Notes</span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/5 border border-teal-500/10 px-3 py-1 rounded-full">
            Publishing Portal
          </span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        <header className="mb-10 border-b border-[#333333]/50 pb-8">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 font-sans">
            Write New Entry
          </h1>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-xl">
            Compose and release architectural blueprints or engineering insights directly to the platform&apos;s production database.
          </p>
        </header>

        {/* Success Banner */}
        {status === "success" && (
          <div className="flex items-center gap-3 bg-teal-500/10 border border-teal-500/30 rounded-lg px-4 py-3 mb-8 text-sm text-teal-300">
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
            <span>Post published successfully to production database!</span>
            <button
              onClick={() => setStatus("idle")}
              className="ml-auto text-xs text-teal-400 hover:underline font-semibold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Error Banner */}
        {status === "error" && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-8 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>Failed to publish: {errorMessage}</span>
            <button
              onClick={() => setStatus("idle")}
              className="ml-auto text-xs text-red-400 hover:underline font-semibold"
            >
              Dismiss
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#181818]/60 border border-[#333333]/40 rounded-xl p-6 lg:p-8 shadow-xl shadow-black/5">
          {/* Title */}
          <div>
            <label className={labelClass}>Title *</label>
            <input
              type="text"
              name="title"
              required
              className={inputClass}
              placeholder="e.g. Scaling MLOps with Databricks..."
              value={form.title}
              onChange={handleChange}
            />
          </div>

          {/* Slug */}
          <div>
            <label className={labelClass}>Url Slug (Auto-Generated)</label>
            <input
              type="text"
              name="slug"
              required
              className={`${inputClass} text-neutral-500 bg-[#1e1e1e]/50`}
              placeholder="auto-generated-from-title"
              value={form.slug}
              onChange={handleChange}
            />
            <p className="mt-2 text-[11px] text-neutral-500">
              Your article will be live at: <span className="text-teal-400">/blog/{form.slug || "..."}</span>
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelClass}>Short Excerpt *</label>
            <textarea
              name="excerpt"
              required
              rows={2}
              className={inputClass}
              placeholder="A brief 1-2 sentence description of the key take-aways..."
              value={form.excerpt}
              onChange={handleChange}
            />
          </div>

          {/* Content */}
          <div>
            <label className={labelClass}>Body Content (Markdown Support) *</label>
            <textarea
              name="content"
              required
              rows={12}
              className={`${inputClass} leading-relaxed font-sans`}
              placeholder="Write your article in Markdown..."
              value={form.content}
              onChange={handleChange}
            />
            <p className="mt-2 text-[11px] text-neutral-500">
              Supports full GitHub Markdown grids, code snippets, and structural text formatting.
            </p>
          </div>

          {/* Image URL */}
          <div>
            <label className={labelClass}>Featured Image URL (Optional)</label>
            <input
              type="url"
              name="image_url"
              className={inputClass}
              placeholder="https://images.unsplash.com/..."
              value={form.image_url}
              onChange={handleChange}
            />
          </div>

          {/* Tags */}
          <div>
            <label className={labelClass}>Stack Tags (Comma-Separated)</label>
            <input
              type="text"
              name="tags"
              className={inputClass}
              placeholder="Databricks, MLOps, Python, Azure..."
              value={form.tags}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label className={labelClass}>Domain Category</label>
            <select
              name="category"
              className={inputClass}
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select a category...</option>
              <option value="AI/ML Infrastructure">AI/ML Infrastructure</option>
              <option value="Data Engineering">Data Engineering</option>
              <option value="Stream Processing">Stream Processing</option>
              <option value="Data Architecture">Data Architecture</option>
              <option value="Cloud Platforms">Cloud Platforms</option>
              <option value="Engineering Leadership">Engineering Leadership</option>
            </select>
          </div>

          {/* Separation line */}
          <div className="border-t border-[#333333]/50 pt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setForm({ title: "", slug: "", excerpt: "", content: "", image_url: "", tags: "", category: "", password: "" })
              }
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors font-semibold"
            >
              Clear form
            </button>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400/50 text-teal-400 font-semibold text-sm px-6 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-teal-500/5"
            >
              {status === "loading" ? (
                <>
                  <Loader className="h-4 w-4 animate-spin text-teal-400" />
                  Publishing Entry...
                </>
              ) : (
                <>
                  <span>Publish Article</span>
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </form>

        <footer className="mt-16 border-t border-[#333333]/50 pt-6 text-xs text-neutral-500">
          <p>Database Source: <span className="text-teal-400/80 font-medium">Supabase Cloud</span></p>
        </footer>
      </div>
    </div>
  );
}
