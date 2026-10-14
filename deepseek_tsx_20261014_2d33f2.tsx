"use client";
import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const matches = content.matchAll(/^(##|###)\s+(.+)$/gm);
    const items: Heading[] = [];
    for (const m of matches) {
      const text = m[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      items.push({ id, text, level: m[1].length });
    }
    setHeadings(items);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-slate-100 border-l-4 border-primary-600 rounded-lg p-5 mb-8">
      <h3 className="font-bold mb-3">📑 Daftar Isi</h3>
      <ul className="space-y-1.5 text-sm">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === 3 ? "pl-4 text-slate-500" : ""}
          >
            <a
              href={`#${h.id}`}
              className="text-slate-700 hover:text-primary-600"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}