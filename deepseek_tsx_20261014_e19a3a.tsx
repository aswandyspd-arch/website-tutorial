export const metadata = { title: "Kontak" };

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
      <p className="text-slate-600 mb-6">
        Ada pertanyaan, saran, atau ingin kolaborasi? Kirim pesan!
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
        />
        <textarea
          rows={5}
          placeholder="Pesan"
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
        />
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}