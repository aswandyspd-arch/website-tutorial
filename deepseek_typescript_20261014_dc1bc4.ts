import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/tutorials");

export type Tutorial = {
  slug: string;
  title: string;
  description: string;
  category: "coding" | "web" | "ai";
  date: string;
  author: string;
  tags: string[];
  content: string;
};

export function getAllTutorials(): Tutorial[] {
  const files = fs.readdirSync(contentDir);

  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDir, file);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        category: data.category || "coding",
        date: data.date || "",
        author: data.author || "Admin",
        tags: data.tags || [],
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getTutorialBySlug(slug: string): Tutorial | null {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    category: data.category || "coding",
    date: data.date || "",
    author: data.author || "Admin",
    tags: data.tags || [],
    content,
  };
}