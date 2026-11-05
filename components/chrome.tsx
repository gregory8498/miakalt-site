"use client";

import { index } from "@/content/story";
import { useEffect, useState } from "react";

export function Chrome() {
  const [ink, setInk] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-ink]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const next = entry.target.getAttribute("data-ink");
          if (next === "light" || next === "dark") setInk(next);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const tone = ink === "light" ? "text-cream" : "text-ink";

  return (
    <>
      <a
        href="#top"
        className={`fixed bottom-6 left-6 z-40 text-sm tracking-[0.16em] lowercase transition-colors ${tone}`}
      >
        mia kalt
      </a>

      <nav
        className={`fixed top-6 right-6 z-40 max-w-[70%] ${tone}`}
        aria-label="Sections"
      >
        <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2">
          {index.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm tracking-wide hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
