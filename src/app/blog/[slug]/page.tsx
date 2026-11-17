import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/data/posts";
import { ArrowRight, Container, Label } from "@/components/ui";
import { CtaBanner } from "@/components/cta-banner";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line bg-paper-warm">
          <Container className="pb-16 pt-16 lg:pt-24">
            <Link
              href="/blog"
              className="label-mono inline-flex cursor-pointer items-center gap-2 py-3.5 transition-colors duration-200 hover:text-ink"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Journal
            </Link>

            <div className="reveal mt-8 max-w-3xl">
              <div className="label-mono flex flex-wrap items-center gap-3">
                <span>{post.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-6 text-[2.5rem] leading-[1.03] sm:text-5xl lg:text-[3.75rem]">
                {post.title}
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </Container>
        </header>

        <div className="relative aspect-21/9 w-full overflow-hidden bg-paper-warm">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <Container className="py-16 lg:py-24">
          <div className="mx-auto max-w-[42rem]">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl leading-[1.4] text-ink lg:text-[1.75rem]"
                    : "mt-6 text-lg leading-[1.75] text-ink-soft"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <section className="border-t border-line bg-paper-warm">
        <Container className="py-20">
          <Label>Keep reading</Label>
          <ul className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {more.map((other) => (
              <li key={other.slug} className="bg-paper-warm">
                <Link
                  href={`/blog/${other.slug}`}
                  className="group flex h-full cursor-pointer flex-col p-8 transition-colors duration-300 hover:bg-paper"
                >
                  <p className="label-mono">{other.category}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
                    {other.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {other.excerpt}
                  </p>
                  <ArrowRight className="mt-6 h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
