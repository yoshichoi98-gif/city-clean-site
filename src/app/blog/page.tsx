import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/lib/data/posts";
import { ArrowRight, PageHeader, Section } from "@/components/ui";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Practical writing on cleaning standards, unit turns and what to ask before hiring a cleaning company in Seattle.",
};

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHeader
        label="Journal"
        title={<>Notes on the work, <span className="italic">and the industry.</span></>}
        lede="Written for people deciding who to hire, including the parts that argue against spending more with us."
      />

      <Section>
        <Link
          href={`/blog/${lead.slug}`}
          className="group grid cursor-pointer gap-10 border-b border-line pb-14 lg:grid-cols-[1.1fr_1fr] lg:items-center"
        >
          <div className="relative aspect-16/10 overflow-hidden bg-paper-warm">
            <Image
              src={lead.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <div className="label-mono flex flex-wrap items-center gap-3">
              <span>{lead.category}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(lead.date)}</span>
              <span aria-hidden>·</span>
              <span>{lead.readTime}</span>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight transition-colors duration-200 group-hover:text-accent lg:text-5xl">
              {lead.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{lead.excerpt}</p>
            <span className="mt-7 flex items-center gap-2 text-sm font-medium text-ink">
              Read
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block cursor-pointer">
                <div className="relative aspect-4/3 overflow-hidden bg-paper-warm">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="label-mono mt-5">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
