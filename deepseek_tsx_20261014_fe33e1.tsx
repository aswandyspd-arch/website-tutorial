import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import { getAllTutorials, getTutorialBySlug } from "@/lib/tutorials";
import ProgressBar from "@/components/ProgressBar";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllTutorials().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = getTutorialBySlug(params.slug);
  if (!tutorial) return {};
  return {
    title: tutorial.title,
    description: tutorial.description,
  };
}

export default function TutorialDetail({
  params,
}: {
  params: { slug: string };
}) {
  const tutorial = getTutorialBySlug(params.slug);
  if (!tutorial) notFound();

  return (
    <>
      <ProgressBar />

      <div className="max-w-6xl mx-auto px-5 py-10 grid lg:grid-cols-[1fr_280px] gap-12">
        <article>
          {/* BREADCRUMB */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            {" / "}
            <Link href="/tutorial" className="hover:text-primary-600">Tutorial</Link>
            {" / "}
            <span className="text-slate-700">{tutorial.title}</span>
          </nav>

          {/* HEADER */}
          <header className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              {tutorial.category.toUpperCase()}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {tutorial.title}
            </h1>
            <div className="text-slate-500 text-sm">
              {tutorial.author} · {tutorial.date}
            </div>
          </header>

          {/* TOC */}
          <TableOfContents content={tutorial.content} />

          {/* KONTEN */}
          <div className="prose prose-slate max-w-none prose-headings:scroll-mt-20">
            <MDXRemote
              source={tutorial.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypePrism],
                },
              }}
            />
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-200">
            {tutorial.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-bold mb-3">🔥 Populer</h4>
            <ul className="space-y-2 text-sm">
              {getAllTutorials().slice(0, 5).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tutorial/${t.slug}`}
                    className="text-slate-700 hover:text-primary-600"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}