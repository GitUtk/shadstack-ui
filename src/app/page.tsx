"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { componentsData } from "./components-data";

const CodeBlock = ({ code, theme }: { code: string; theme: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#161616]" : "bg-zinc-50";
  const borderClass = isDark ? "border-[rgba(255,255,255,0.1)]" : "border-zinc-200";
  const headerBgClass = isDark ? "bg-[#161616]" : "bg-white";
  const textClass = isDark ? "text-[#A1A1AA]" : "text-zinc-500";
  const textHoverClass = isDark ? "hover:text-[#FAFAFA]" : "hover:text-zinc-900";

  return (
    <div className={`relative flex flex-col w-full h-full border ${borderClass} rounded-lg ${bgClass} overflow-hidden m-0 shadow-sm transition-colors`}>
      <div className={`flex items-center justify-between px-4 py-2 border-b ${borderClass} ${headerBgClass} transition-colors`}>
        <span className={`text-[11px] ${textClass} font-mono uppercase tracking-wider font-semibold transition-colors`}>HTML Usage</span>
        <button onClick={copyToClipboard} className={`text-xs flex items-center gap-1.5 ${textClass} ${textHoverClass} transition-colors p-1`}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy Code"}
        </button>
      </div>
      <div className={`flex-1 flex flex-col items-stretch ${bgClass} min-w-0 w-full transition-colors`}>
        <SyntaxHighlighter
          language="html"
          style={isDark ? vscDarkPlus : oneLight}
          showLineNumbers={true}
          wrapLines={true}
          wrapLongLines={true}
          customStyle={{ margin: 0, padding: '1rem', flex: 1, fontSize: '13px', backgroundColor: 'transparent', wordBreak: 'break-word' }}
          lineNumberStyle={{ minWidth: '2.5em', paddingRight: '1em', color: isDark ? '#858585' : '#a1a1aa', textAlign: 'right' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    const timer = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).ShadUI) {
        (window as any).ShadUI.init();
        clearInterval(timer);
      }
    }, 100);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(document.documentElement.getAttribute("data-theme") || "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined" && (window as any).ShadUI) {
      (window as any).ShadUI.toggleTheme();
    }
  };

  const scrollToComponent = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-color)] font-sans antialiased text-[var(--text-color)]">

      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[var(--border-color)] bg-[var(--bg-color)]/80 backdrop-blur px-4 md:px-6">
        <div className="flex items-center">
          <button className="md:hidden p-2 -ml-2 mr-2 text-[var(--text-muted)] hover:text-[var(--text-color)]" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[var(--primary)] text-[var(--primary-fg)] w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="font-bold text-[15px] tracking-wide font-mono">ShadStack UI</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-color)] flex items-center gap-2 rounded-md hover:bg-[var(--muted)] transition-colors">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden md:inline-block text-sm font-medium pr-1">Toggle Theme</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        <div
          className={`fixed inset-0 top-14 bg-black/50 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <aside className={`sidebar !min-h-full fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)] transition-transform duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          <div className="sidebar-content py-4">
            <div className="sidebar-group">
              <div className="sidebar-group-label flex justify-between w-full uppercase tracking-wider">
                <span>Overview</span>
                <button className="md:hidden p-1 -mr-2 text-[var(--text-muted)] hover:text-[var(--text-color)]" onClick={() => setSidebarOpen(false)}>
                  <X size={16} />
                </button>
              </div>
              <ul className="sidebar-menu mt-1">
                <li className="sidebar-menu-item">
                  <button onClick={() => scrollToComponent("installation")} className="sidebar-menu-button">
                    <span className="font-medium">Installation</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="sidebar-group mt-2">
              <div className="sidebar-group-label uppercase tracking-wider">Components</div>
              <ul className="sidebar-menu mt-1">
                {componentsData.map(comp => (
                  <li className="sidebar-menu-item" key={comp.id}>
                    <button
                      onClick={() => scrollToComponent(comp.id)}
                      className="sidebar-menu-button text-[var(--text-muted)] hover:text-[var(--text-color)]"
                    >
                      <span>{comp.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex-1 md:ml-64 flex flex-col min-w-0">
          <main className="flex-1 p-6 md:p-8 lg:p-12 max-w-7xl mx-auto w-full relative">
            <section className="py-8 md:py-12 mb-10 border-b border-[var(--border-color)]">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-4">
                Lightweight UI Framework.
              </h1>
              <p className="max-w-[750px] text-lg text-[var(--text-muted)] sm:text-lg">
                Beautifully designed components built with pure HTML, CSS, and Vanilla JS.
                Accessible. Customizable. Zero build tools.
              </p>
              <br />
            </section>
            <br />
            <section id="installation" className="mb-14 scroll-mt-24">
              <div className="mb-6">
                <h2 className="font-semibold tracking-tight text-2xl mb-2">Installation</h2>
                <p className="text-[var(--text-muted)]">Drop these CDN links into your HTML to get started instantly.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="min-w-0 w-full relative">
                  <CodeBlock code={`<!-- CSS -->
<link href="https://raw.githubusercontent.com/GitUtk/shadstack-ui/refs/heads/main/public/ui.min.css" rel="stylesheet">

<!-- JS -->
<script src="https://raw.githubusercontent.com/GitUtk/shadstack-ui/refs/heads/main/public/ui.min.js"></script>`} theme={theme} />
                </div>

                <div className="flex items-center p-6 text-[var(--text-muted)] text-sm border border-[var(--border-color)] rounded-lg bg-[var(--muted)] min-h-[150px] min-w-0">
                  Note: The CDN links fetch the latest customized UI CSS and Javascript files directly from this repository's main branch.
                </div>
              </div>
            </section>

            <div className="mb-8">
              <h2 className="font-semibold tracking-tight text-3xl mb-4">Components</h2>
              <p className="text-[var(--text-muted)]">Live previews and integration HTML code side by side.</p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {componentsData.map(comp => (
                <section key={comp.id} id={comp.id} className="scroll-mt-24">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold capitalize">{comp.label}</h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1">{comp.description}</p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="card shadow-sm border-[var(--border-color)] flex items-center justify-center p-6 bg-[var(--bg-color)] rounded-lg min-h-[220px] min-w-0 w-full overflow-hidden relative">
                      {comp.demo}
                    </div>
                    <div className="min-h-[220px] min-w-0 w-full relative">
                      <CodeBlock code={comp.code} theme={theme} />
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <footer className="mt-16 pt-8 border-t border-[var(--border-color)]">

              <p className="text-sm text-[var(--text-muted)] text-center md:text-left">
                <br />  Source available on GitHub.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
