"use client";

import { useState, useEffect } from "react";
import { ModelViewer } from "@/components/ModelViewerWrapper";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AudioPlayer } from "@/components/AudioPlayer";
import { AutoScrollButton } from "@/components/AutoScrollButton";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-black">
      <LoadingScreen onStarted={() => setIsLoaded(true)} />
      <AudioPlayer url="https://files.catbox.moe/g8l0jm.mp3" />
      <AutoScrollButton />

      <div className="fixed inset-0 z-0">
        <ModelViewer />
      </div>

      <div
        className={cn(
          "fixed top-8 right-8 z-50 transition-all duration-1000 delay-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <a
          href="https://github.com/i-am-dhruv"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:border-white/20 hover:bg-white/10"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 transition-colors group-hover:text-white">
            Developer
          </span>
          <div className="h-4 w-[1px] bg-white/10 transition-colors group-hover:bg-white/30" />
          <Github className="h-5 w-5 text-white/60 transition-all duration-1000 group-hover:rotate-[360deg] group-hover:text-white" />
        </a>
      </div>

      <div
        className={cn(
          "pointer-events-none relative z-10 transition-opacity duration-1000 delay-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <header className="flex h-screen flex-col items-center justify-center p-8">
          <div className="space-y-4 text-center">
            <h1 className="text-6xl font-black uppercase tracking-tighter text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] md:text-9xl">
              MechaTech International
            </h1>
            <p className="text-xl font-medium uppercase tracking-[0.4em] text-white md:text-2xl animate-pulse">
              Residential • Commercial • Industrial
            </p>
          </div>
          <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-60">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll to Sequence</p>
            <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
          </div>
        </header>

        <section className="flex h-screen items-center justify-start p-8 md:p-32">
          <div className="max-w-xl translate-y-12 rounded-[3rem] border border-white/10 bg-white/[0.03] p-12 shadow-2xl backdrop-blur-[10px] transition-all duration-700 hover:scale-105 hover:bg-white/[0.06] pointer-events-auto">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white">Company Profile</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">Engineers • Manufacturers • Contractors</h2>
            <p className="text-lg font-light leading-relaxed text-white/70">
              Founded to deliver dependable Heating, Ventilation, and Air-Conditioning solutions, MechaTech International serves residential, commercial, and industrial projects with quality, precision, and proven field experience.
            </p>
          </div>
        </section>

        <section className="flex h-screen items-center justify-end p-8 text-right md:p-32">
          <div className="max-w-xl rounded-[3rem] border border-white/10 bg-white/[0.03] p-12 shadow-2xl backdrop-blur-[10px] transition-all duration-700 hover:scale-105 hover:bg-white/[0.06] pointer-events-auto">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white">Core Services</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">HVAC Systems & Air Management</h2>
            <p className="text-lg font-light leading-relaxed text-white/70">
              From air handling units and fresh-air systems to industrial ventilation, exhaust fans, filtration, ducting, and cooling solutions, we provide complete, end-to-end climate and airflow performance.
            </p>
          </div>
        </section>

        <section className="flex h-screen items-center justify-center p-8 text-center md:p-32">
          <div className="max-w-2xl rounded-[3.5rem] border border-white/10 bg-white/[0.04] p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[10px] transition-all duration-700 hover:scale-105 pointer-events-auto">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white">Facilities</span>
            <h2 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-6xl">Workshop + Office Capability</h2>
            <p className="text-xl font-light leading-relaxed text-white/60">
              Our main office in DHA Phase-V and fully equipped workshop in SITE support design coordination, fabrication, assembly, and on-site execution for every project stage.
            </p>
          </div>
        </section>

        <section className="flex h-screen items-center justify-start p-8 md:p-32">
          <div className="max-w-xl rounded-[3rem] border border-white/10 bg-white/[0.03] p-12 shadow-2xl backdrop-blur-[10px] transition-all duration-700 hover:scale-105 hover:bg-white/[0.06] pointer-events-auto">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-white">Trusted Work</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">Projects Across Pakistan</h2>
            <p className="text-lg font-light leading-relaxed text-white/70">
              MechaTech has supplied and installed HVAC equipment and systems across healthcare, pharmaceutical, hospitality, textile, power, and industrial sectors including hospitals, laboratories, factories, and commercial facilities.
            </p>
          </div>
        </section>

        <section className="flex h-[150vh] flex-col items-center justify-center p-8 text-center md:p-32">
          <div className="max-w-4xl space-y-12 pointer-events-auto">
            <h2 className="text-6xl font-black uppercase tracking-tighter text-white drop-shadow-2xl md:text-8xl">
              The Future of Comfort<span className="text-white">.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/50 md:text-2xl">
              Delivering engineered airflow solutions for every environment we serve.
            </p>
            <div className="flex justify-center pt-8">
              <a
                href="mailto:mti_hvac98@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden rounded-full border border-white/10 bg-black/95 px-12 py-5 font-bold uppercase tracking-[0.4em] text-white transition-all duration-500 hover:scale-110 hover:border-white/40 hover:shadow-[0_0_60px_rgba(255,255,255,0.2),0_0_100px_rgba(255,255,255,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-colors duration-500 group-hover:from-white/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute left-1/2 top-0 h-[2px] w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500 group-hover:via-white/80" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                <span className="relative z-10 text-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:scale-300 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)]">
                  Get a Quote
                </span>
              </a>
            </div>
          </div>
        </section>

        <footer className="space-y-8 bg-transparent px-8 pb-20 pt-72 text-center pointer-events-auto">
          <div className="flex items-center justify-center gap-12 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="https://x.com/i_am_dhruv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Twitter className="h-4 w-4" />
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/iam-dhruv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href="https://github.com/i-am-dhruv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            © 2024 MECHATECH INTERNATIONAL. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </main>
  );
}
