export const metadata = { title: "Tentang" };

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold mb-6">Tentang CodeAI Academy</h1>
      <div className="prose prose-slate max-w-none">
        <p>
          CodeAI Academy adalah platform belajar coding, web, dan AI yang
          dibuat untuk pelajar, mahasiswa, dan masyarakat umum Indonesia.
        </p>
        <h2>Misi Kami</h2>
        <ul>
          <li>Menyediakan tutorial gratis berkualitas</li>
          <li>Bahasa sederhana, ramah pemula</li>
          <li>Fokus pada praktik, bukan hanya teori</li>
        </ul>
      </div>
    </div>
  );
}