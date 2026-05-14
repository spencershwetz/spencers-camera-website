import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { appStoreUrl, faqItems, product, siteUrl } from "../siteContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Spencer's Camera pricing, supported iPhones, custom LUTs, remote camera control, privacy, and recording formats.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteUrl}/faq`,
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="subpage">
        <nav className="topbar subpageTopbar" aria-label="Primary navigation">
          <Link className="brand" href="/">
            <Image src="/product/app-icon.png" alt="" width={42} height={42} />
            <span>{product.name}</span>
          </Link>
          <div className="navLinks">
            <Link href="/docs">Docs</Link>
            <Link href="/faq">FAQ</Link>
            <a href={appStoreUrl}>App Store</a>
          </div>
        </nav>

        <header className="subpageHero">
          <p className="sectionKicker">FAQ</p>
          <h1>Spencer&apos;s Camera FAQ</h1>
          <p>
            Practical answers about pricing, compatibility, formats, LUTs,
            privacy, and remote shooting.
          </p>
        </header>

        <section className="faqPageList">
          {faqItems.map((faq) => (
            <article key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
