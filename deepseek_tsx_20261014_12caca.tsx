import Link from "next/link";
import { getAllTutorials } from "@/lib/tutorials";
import ArticleCard from "@/components/ArticleCard";

const categories = [
  { icon: "💻", title: "Dasar Coding", desc: "HTML, CSS, JavaScript, Python dari dasar." },
  { icon: "🌐", title: "Pembuatan Website", desc: "Landing page, blog, e-commerce, hingga deploy." },
  { icon: "🤖", title: "Artificial Intelligence", desc: "Machine learning, chatbot, prompt engineering." },
];

export default function Home() {
  const tutorials = getAllTutorials().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-50 to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Belajar{" "}
            <span className="text-primary-600">Coding, Web & AI</span>
            <br />
            dari Nol sampai Mahir
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
            Tutorial gratis, terstruktur, dan ramah pemula untuk pelajar,
            mahasiswa, dan masyarakat umum.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/tutorial"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Mulai Belajar
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Kategori Tutorial
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-slate-500 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TUTORIAL TERBARU */}
      <section className="max-w-6xl mx-auto px-5 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Tutorial Terbaru
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tutorials.map((t) => (
            <ArticleCard key={t.slug} tutorial={t} />
          ))}
        </div>
      </section>
    </>
  );
}