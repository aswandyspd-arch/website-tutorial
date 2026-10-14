import { getAllTutorials } from "@/lib/tutorials";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Semua Tutorial",
  description: "Daftar lengkap tutorial coding, web, dan AI.",
};

export default function TutorialPage() {
  const tutorials = getAllTutorials();

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Semua Tutorial</h1>
      <p className="text-slate-600 mb-10">
        {tutorials.length} tutorial tersedia untuk Anda pelajari.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tutorials.map((t) => (
          <ArticleCard key={t.slug} tutorial={t} />
        ))}
      </div>
    </div>
  );
}