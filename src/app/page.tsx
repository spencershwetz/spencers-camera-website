import Image from "next/image";
import Link from "next/link";
import {
  appStoreUrl,
  faqItems,
  featureGroups,
  product,
  screenshots,
  siteUrl,
  supportEmail,
} from "./siteContent";

function AppStoreBadge({ location }: { location: string }) {
  return (
    <a
      className="appStoreBadge"
      href={appStoreUrl}
      rel="noopener"
      data-analytics-event="app_store_click"
      data-analytics-location={location}
      aria-label="Download Spencer's Camera on the App Store"
    >
      <Image src="/app-store-badge.svg" alt="" width={156} height={52} />
    </a>
  );
}

export default function Home() {
  const homepageFaqs = faqItems.slice(0, 3);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.storeName,
    alternateName: product.name,
    applicationCategory: "PhotoApplication",
    operatingSystem: "iOS, watchOS",
    url: siteUrl,
    sameAs: [appStoreUrl],
    downloadUrl: appStoreUrl,
    installUrl: appStoreUrl,
    description: `${product.description} Free to download; full access requires an in-app purchase (one-time or subscription).`,
    featureList: product.features,
    offers: {
      "@type": "Offer",
      name: "Free download",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free to download on the App Store. Full access requires an in-app purchase, with one-time purchase and subscription options available.",
      url: appStoreUrl,
      availability: "https://schema.org/InStock",
      category: "FreeTrial",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: product.name,
    url: siteUrl,
    description: product.description,
    publisher: {
      "@type": "Organization",
      name: product.name,
      url: siteUrl,
      logo: `${siteUrl}/product/app-icon.png`,
      email: supportEmail,
      sameAs: [appStoreUrl],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroBackdrop" aria-hidden="true" />
          <nav className="topbar" aria-label="Primary navigation">
            <Link className="brand" href="/">
              <Image src="/product/app-icon.png" alt="" width={42} height={42} priority />
              <span>{product.name}</span>
            </Link>
            <div className="navLinks">
              <Link href="/docs">Docs</Link>
              <Link href="/faq">FAQ</Link>
              <a href="#features">Features</a>
            </div>
          </nav>

          <div className="heroInner">
            <div className="heroCopy">
              <p className="eyebrow">{product.subtitle}</p>
              <h1 id="hero-title">Spencer&apos;s Camera</h1>
              <p className="heroLead">
                A pro iOS camera app for iPhone video with shutter angle
                control, Apple Log, custom LUTs, remote camera workflows, and
                production controls built by a cinematographer.
              </p>
              <div className="heroActions">
                <AppStoreBadge location="hero" />
                <Link className="secondaryCta" href="/docs">
                  Read the docs
                </Link>
              </div>
            </div>

            <div className="phoneStage" aria-label="App Store screenshots">
              <Image
                className="phoneShot phoneShotMain"
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                width={1206}
                height={2622}
                priority
              />
            </div>
          </div>
        </section>

        <section id="features" className="section featureIntro">
          <div className="sectionCopy">
            <p className="sectionKicker">Why it exists</p>
            <h2>Manual control without turning the shoot into a settings hunt.</h2>
            <p>
              Spencer&apos;s Camera keeps the core shooting surface fast while putting
              serious iOS capture, monitoring, color, audio, and remote-control
              tools close enough to use during real production work.
            </p>
          </div>
          <div className="featureGrid">
            {featureGroups.map((feature) => (
              <article className="feature" key={feature.title}>
                <p>{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <span>{feature.body}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="creatorNote" aria-labelledby="creator-note-title">
          <div>
            <p className="sectionKicker">From Spencer</p>
            <h2 id="creator-note-title">A camera app with a name behind it.</h2>
          </div>
          <div className="creatorNoteCopy">
            <p>
              My background is in the film industry as a Digital Imaging
              Technician, where technology and storytelling meet every day.
              Spencer&apos;s Camera came from that same place: wanting an iOS video
              camera that feels fast on set, serious about the image, and still
              personal.
            </p>
            <p>
              The app took months of nights after work to turn what was in my
              head into something real. Spencer&apos;s Camera started as a working
              title, but I kept the name because I wanted the accountability.
              I hope it helps you get better at your craft, capture what matters,
              and tell your story.
            </p>
            <p className="signature">Made by Spencer.</p>
          </div>
        </section>

        <section className="showcase">
          <Image
            src="/product/el-zone-palms.png"
            alt="Manual controls in Spencer's Camera."
            width={1206}
            height={2622}
          />
          <div className="showcaseCopy">
            <p className="sectionKicker">Manual and shutter priority</p>
            <h2>Choose the way you expose.</h2>
            <p>
              Use Shutter Priority to keep motion cadence consistent while ISO
              adapts, or move into full manual for independent shutter speed and
              ISO control. EV bias, white balance, focus, and lock controls stay
              available when precision matters.
            </p>
          </div>
        </section>

        <section className="imageStrip" aria-label="Spencer's Camera screenshots">
          {screenshots.slice(1).map((shot) => (
            <figure key={shot.src}>
              <Image src={shot.src} alt={shot.alt} width={1206} height={2622} />
              <figcaption>{shot.title}</figcaption>
            </figure>
          ))}
        </section>

        <section className="section workflowBand">
          <div className="sectionCopy">
            <p className="sectionKicker">Workflow</p>
            <h2>Designed for the phone you actually shoot with.</h2>
          </div>
          <div className="workflowList">
            <article>
              <h3>Capture</h3>
              <p>
                24 to 240 fps, 4K, Open Gate, H.264, HEVC, Dolby Vision, HLG HDR,
                Apple Log, Apple Log 2, ProRes RAW, and ProRes RAW HQ on
                supported devices.
              </p>
            </article>
            <article>
              <h3>Monitor</h3>
              <p>
                LUT preview, EL Zone, audio metering, timecode, recording
                indicators, aspect guides, grid, center markers, level feedback,
                and external monitor support.
              </p>
            </article>
            <article>
              <h3>Control</h3>
              <p>
                Camera Control button, Apple Watch, AirPods stem controls, custom
                function buttons, lens presets, remote camera, and external
                storage support.
              </p>
            </article>
          </div>
        </section>

        <section className="docsTeaser">
          <div>
            <p className="sectionKicker">Docs</p>
            <h2>A full guide to the app, not just a feature list.</h2>
          </div>
          <p>
            The docs page walks through setup, camera settings, exposure,
            recording, formats, LUTs, audio, storage, remote camera, DockKit,
            Apple Watch, display overlays, external monitors,
            shortcuts, presets, playback, export, and troubleshooting.
          </p>
          <Link className="textLink" href="/docs">
            Open documentation
          </Link>
        </section>

        <section className="section faqPreview">
          <div className="sectionCopy">
            <p className="sectionKicker">FAQ</p>
            <h2>Short answers before you download.</h2>
          </div>
          <div className="faqList">
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="finalCta">
          <Image src="/product/app-icon.png" alt="" width={72} height={72} />
          <p className="sectionKicker">Spencer&apos;s Camera</p>
          <h2>Built personally by Spencer for people who care about the image.</h2>
          <AppStoreBadge location="final-cta" />
        </section>
      </main>
    </>
  );
}
