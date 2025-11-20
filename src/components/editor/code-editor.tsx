"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { editor } from "monaco-editor";

const MonacoEditor = dynamic(async () => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-zinc-400">
      Warming the engines...
    </div>
  ),
});

export type CodeEditorProps = {
  value: string;
  language: "html" | "css" | "javascript";
  theme?: "light" | "dark";
  onChange: (value: string) => void;
  onMount?: (editor: editor.IStandaloneCodeEditor) => void;
};

export function CodeEditor({
  value,
  language,
  theme = "dark",
  onChange,
  onMount,
}: CodeEditorProps) {
  const resolvedLanguage = useMemo(() => {
    if (language === "javascript") return "javascript";
    if (language === "css") return "css";
    return "html";
  }, [language]);

  return (
    <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_60px_-30px_rgba(15,15,15,0.8)] backdrop-blur-xl">
      <MonacoEditor
        language={resolvedLanguage}
        value={value}
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
        onMount={(instance) => {
          instance.updateOptions({
            fontFamily: "var(--font-geist-mono)",
            fontSize: 13,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            roundedSelection: false,
            smoothScrolling: true,
            padding: { top: 16, bottom: 16 },
          });
          onMount?.(instance);
        }}
        options={{
          automaticLayout: true,
          tabSize: 2,
          detectIndentation: true,
        }}
        onChange={(nextValue) => onChange(nextValue ?? "")}
        height="100%"
      />
    </div>
  );
}

