"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  AudioLines,
  Flame,
  Rocket,
  Sparkles,
  Undo2,
  Waves,
} from "lucide-react";
import { CodeEditor } from "@/components/editor/code-editor";
import { vibePresets } from "@/lib/vibe-presets";

type TabKey = "html" | "css" | "javascript";

type CodeState = Record<TabKey, string>;

const tabs: { id: TabKey; label: string; hint: string }[] = [
  { id: "html", label: "Structure", hint: "Markup & layout" },
  { id: "css", label: "Atmosphere", hint: "Gradients & lighting" },
  { id: "javascript", label: "Motion", hint: "Micro-interactions" },
];

const baseCssReset = `
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Geist Variable", "Geist", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, rgba(40,40,60,0.5), rgba(10,10,20,0.9));
  min-height: 100vh;
  display: grid;
  place-items: center;
}

button {
  font-family: inherit;
}
`;

export default function Home() {
  const [selectedVibeId, setSelectedVibeId] = useState(() => vibePresets[0].id);
  const [activeTab, setActiveTab] = useState<TabKey>("html");
  const [code, setCode] = useState<CodeState>(() => ({
    html: vibePresets[0].snippets.html,
    css: vibePresets[0].snippets.css,
    javascript: vibePresets[0].snippets.js,
  }));
  const [previewDoc, setPreviewDoc] = useState("");

  const selectedVibe = useMemo(
    () => vibePresets.find((preset) => preset.id === selectedVibeId),
    [selectedVibeId],
  );

  useEffect(() => {
    const sanitizedJs = code.javascript.replace(/<\/script>/g, "<\\/script>");
    const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>${baseCssReset}${code.css}</style>
</head>
<body>
${code.html}
<script>${sanitizedJs}</script>
</body>
</html>`;
    const timer = setTimeout(() => setPreviewDoc(doc), 200);
    return () => clearTimeout(timer);
  }, [code]);

  const handleChange = useCallback(
    (tab: TabKey, value: string) => {
      setCode((current) => ({
        ...current,
        [tab]: value,
      }));
    },
    [setCode],
  );

  const handleReset = useCallback(() => {
    if (!selectedVibe) return;
    setCode({
      html: selectedVibe.snippets.html,
      css: selectedVibe.snippets.css,
      javascript: selectedVibe.snippets.js,
    });
  }, [selectedVibe]);

  const gradientStyle = useMemo(
    () => ({
      background: selectedVibe?.gradient,
      boxShadow: selectedVibe?.glow,
    }),
    [selectedVibe],
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-20 pt-16 sm:px-8 md:px-12 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <div className="absolute left-1/2 top-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(116,56,250,0.22),transparent)] blur-3xl" />
        <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(48,189,255,0.18),transparent)] blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,120,180,0.16),transparent)] blur-[120px]" />
      </div>

      <header className="flex flex-col gap-8 pb-16">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-lg shadow-sky-500/10 backdrop-blur-md">
            <Rocket className="h-5 w-5 text-sky-200" />
            <span className="text-xs uppercase tracking-[0.4em] text-sky-100/80">
              Vibe Coding Studio
            </span>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 shadow-lg shadow-fuchsia-500/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-200" />
            <span>Realtime preview synced every 200ms</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-[3.1rem]"
            >
              Compose rocket-grade atmospheres with{" "}
              <span className="bg-gradient-to-r from-sky-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                live vibe coding
              </span>
              .
            </motion.h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              Layer the visuals, motion, and sonic energy of your interface in
              one immersive canvas. Select a launch vibe, remix the structure,
              and stream it instantly to the preview bay.
            </p>
            {selectedVibe && (
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.32em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Waves className="h-4 w-4 text-sky-200" />
                  {selectedVibe.soundtrack.energy} energy
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <AudioLines className="h-4 w-4 text-fuchsia-200" />
                  {selectedVibe.soundtrack.bpm} BPM
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Flame className="h-4 w-4 text-amber-200" />
                  {selectedVibe.tagline}
                </span>
              </div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] p-[1px] shadow-2xl shadow-fuchsia-500/20"
            style={gradientStyle}
          >
            <div className="relative z-10 grid gap-4 rounded-3xl bg-slate-950/70 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                <span>Preset Capsule</span>
                <span>Launch-ready</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {selectedVibe?.name}
              </h3>
              <p className="text-sm leading-6 text-white/65">
                {selectedVibe?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedVibe?.soundtrack?.palette?.map((swatch) => (
                  <span
                    key={swatch}
                    className="h-9 w-9 rounded-xl border border-white/10 shadow-inner shadow-black/40"
                    style={{ background: swatch }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl blur-3xl" />
          </motion.div>
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="grid gap-3 md:grid-cols-3">
            {vibePresets.map((vibe) => (
              <button
                key={vibe.id}
                type="button"
                onClick={() => {
                  setSelectedVibeId(vibe.id);
                  setCode({
                    html: vibe.snippets.html,
                    css: vibe.snippets.css,
                    javascript: vibe.snippets.js,
                  });
                }}
                className={clsx(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-[1px] text-left transition-all duration-300",
                  selectedVibeId === vibe.id
                    ? "ring-2 ring-inset ring-fuchsia-300/70 shadow-[0_22px_60px_rgba(121,78,255,0.35)]"
                    : "hover:border-white/20 hover:shadow-[0_18px_50px_rgba(60,80,160,0.28)]",
                )}
              >
                <div
                  className="rounded-[18px] bg-slate-950/75 p-4 sm:p-5"
                  style={{
                    background: `linear-gradient(180deg, rgba(18,19,30,0.82), rgba(10,10,17,0.92)), ${vibe.gradient}`,
                  }}
                >
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/60">
                    <span>{vibe.name}</span>
                    <span>{vibe.soundtrack.energy}</span>
                  </div>
                  <p className="text-sm leading-6 text-white/70">
                    {vibe.tagline}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{ background: vibe.gradient }}
                />
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(8,12,30,0.65)] backdrop-blur-xl md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Sparkles className="h-5 w-5 text-fuchsia-200" />
                <div className="uppercase tracking-[0.36em]">
                  Craft the atmosphere
                </div>
              </div>
              <div className="flex gap-2 rounded-full border border-white/10 bg-black/30 p-1">
                {tabs.map((tab) => {
                  const active = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={clsx(
                        "rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] transition-colors md:px-5",
                        active
                          ? "bg-white text-black shadow-lg shadow-white/30"
                          : "text-white/60 hover:text-white/90",
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid h-[520px] grid-rows-[auto_1fr] gap-4 md:mt-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
                <span>{tabs.find((tab) => tab.id === activeTab)?.hint}</span>
                <span>
                  {selectedVibe?.name} — {activeTab.toUpperCase()}
                </span>
              </div>
              <CodeEditor
                value={code[activeTab]}
                language={activeTab}
                onChange={(value) => handleChange(activeTab, value)}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:sticky lg:top-20 lg:h-fit">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4 text-xs uppercase tracking-[0.32em] text-white/60">
              <span>Live preview bay</span>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.32em] text-white/70 transition hover:bg-white/20"
              >
                <Undo2 className="h-3.5 w-3.5" />
                Reset vibe
              </button>
            </div>
            <div className="relative h-[540px] bg-slate-950/80">
              <iframe
                title="Vibe Preview"
                srcDoc={previewDoc}
                className="h-full w-full rounded-3xl border-0"
                sandbox="allow-scripts allow-pointer-lock"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(25,20,60,0.55)] backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
              <Flame className="h-5 w-5 text-amber-200" />
              <span>Soundscape telemetry</span>
            </div>
            <dl className="grid gap-5 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <dt>Energy level</dt>
                <dd className="font-medium uppercase tracking-[0.35em] text-white">
                  {selectedVibe?.soundtrack?.energy}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Tempo</dt>
                <dd className="font-medium text-white">
                  {selectedVibe?.soundtrack?.bpm} BPM
                </dd>
              </div>
              <div className="grid gap-2">
                <dt className="text-white/70">Palette drive</dt>
                <dd className="flex gap-2">
                  {selectedVibe?.soundtrack?.palette?.map((swatch) => (
                    <span
                      key={swatch}
                      className="h-10 flex-1 rounded-xl border border-white/10 shadow-inner shadow-black/40"
                      style={{ background: swatch }}
                    />
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
