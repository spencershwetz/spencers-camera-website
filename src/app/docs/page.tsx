import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { appStoreUrl, docsSections, product, siteUrl } from "../siteContent";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Spencer's Camera docs covering setup, exposure, recording formats, LUTs, audio, remote camera, Apple Watch, overlays, presets, export, and troubleshooting.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Set up Spencer's Camera for a pro iPhone video shoot",
    description:
      "A complete guide to Spencer's Camera setup, capture modes, settings, formats, LUTs, audio, remote camera, DockKit, Apple Watch, overlays, external displays, shortcuts, presets, library export, and troubleshooting.",
    url: `${siteUrl}/docs`,
    step: docsSections.flatMap((section) =>
      section.steps.map((step) => ({
        "@type": "HowToStep",
        name: section.title,
        text: step,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main className="subpage docsPage">
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

        <header className="subpageHero docsHero">
          <div>
            <p className="sectionKicker">Documentation</p>
            <h1>Spencer&apos;s Camera guide</h1>
            <p>
              A complete user guide for setup, modes, settings, monitoring,
              capture formats, remote operation, playback, export, and field
              troubleshooting.
            </p>
          </div>
          <Image
            src="/product/lut-preview-road.png"
            alt="Spencer's Camera workflow screenshot."
            width={1206}
            height={2622}
            priority
          />
        </header>

        <div className="docsLayout">
          <aside aria-label="Documentation sections">
            <p>Contents</p>
            {docsSections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </aside>

          <section className="docsContent">
            {docsSections.map((section) => (
              <article id={section.id} key={section.id}>
                <p className="sectionKicker">{section.title}</p>
                <h2>{section.title}</h2>
                <p>{section.summary}</p>
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
