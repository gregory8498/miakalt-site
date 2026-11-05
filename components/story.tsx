import Image from "next/image";
import { chapters, connect, profile, type Run } from "@/content/story";
import { SocialLinks } from "@/components/social-links";

const toneClass = {
  paper: "bg-paper text-ink",
  sand: "bg-sand text-ink",
  sea: "bg-sea text-cream",
  ink: "bg-char text-cream",
} as const;

function RichText({ runs }: { runs: Run[] }) {
  return (
    <p>
      {runs.map((run, index) =>
        run.href ? (
          <a
            key={`${run.href}-${index}`}
            href={run.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 underline-offset-4 transition hover:decoration-current"
          >
            {run.text}
          </a>
        ) : (
          <span key={`${run.text}-${index}`}>{run.text}</span>
        ),
      )}
    </p>
  );
}

function Portrait({
  zoom = false,
  priority = false,
  alt,
}: {
  zoom?: boolean;
  priority?: boolean;
  alt: string;
}) {
  return (
    <div className="relative h-[calc(36svh+3.5rem)] overflow-hidden bg-paper pt-14 sm:h-auto sm:min-h-[100svh] sm:pt-0">
      <div
        className={
          zoom
            ? "hero-media absolute inset-x-0 top-14 bottom-0 sm:inset-0"
            : "absolute inset-x-0 top-14 bottom-0 sm:inset-0"
        }
      >
        <Image
          src="/mia-headshot.png"
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 58vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

function IntroVideo({ src }: { src: string }) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      src={`${src}#t=0.1`}
      aria-label="Mia Kalt introduces her therapy practice"
      className="aspect-video w-full rounded-2xl bg-black object-cover"
    />
  );
}

function LogoQuad({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  return (
    <ul className="grid w-full grid-cols-2 gap-3">
      {logos.map((logo) => (
        <li
          key={logo.src}
          className="relative aspect-square overflow-hidden rounded-2xl bg-white"
        >
          <div className="absolute inset-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(min-width: 1024px) 22vw, 40vw"
              className="object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function SidePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[calc(46svh+3.5rem)] overflow-hidden bg-inherit pt-14 sm:h-auto sm:min-h-[100svh] sm:pt-0">
      <div className="absolute inset-x-0 top-14 bottom-0 sm:inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 58vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

function Pill({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="pill inline-flex items-center gap-2 rounded-full border border-current/35 px-4 py-2 text-sm tracking-wide backdrop-blur-sm transition hover:bg-current/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      {label}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export function Story() {
  return (
    <main>
      <section
        id="top"
        data-ink="dark"
        className="chapter hero flex min-h-[100svh] flex-col overflow-hidden bg-paper text-ink sm:grid sm:grid-cols-[minmax(0,1fr)_58%] lg:grid-cols-2"
      >
        <div className="hero-copy relative z-10 order-2 flex flex-1 flex-col justify-center px-6 py-10 sm:order-1 sm:px-10 sm:py-24 lg:px-16">
          <p className="text-sm tracking-[0.18em] uppercase">
            {profile.role}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.6rem,5vw,6rem)] leading-[0.92] tracking-tight">
            {profile.name}
          </h1>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div className="order-1 sm:order-2">
          <Portrait zoom priority alt="Portrait of Mia Kalt" />
        </div>
      </section>

      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          data-ink={chapter.ink}
          className={`chapter min-h-[100svh] ${toneClass[chapter.tone]} ${
            chapter.video || chapter.image || chapter.logos
              ? "flex flex-col sm:grid sm:grid-cols-[minmax(0,1fr)_58%] sm:items-center lg:grid-cols-2"
              : "flex items-center"
          }`}
        >
          <div
            className={
              chapter.video || chapter.image || chapter.logos
                ? "w-full px-6 pt-16 pb-8 sm:px-10 sm:py-24 lg:px-16"
                : "w-full max-w-3xl px-6 py-28 md:px-16"
            }
          >
            {chapter.eyebrow ? (
              <p className="text-sm tracking-[0.16em] uppercase opacity-70">
                {chapter.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.7rem,7vw,5.4rem)] leading-[0.98] tracking-tight">
              {chapter.title}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed md:text-lg">
              {chapter.paragraphs.map((paragraph, index) => (
                <RichText key={index} runs={paragraph} />
              ))}
            </div>
          </div>
          {chapter.video ? (
            <div className="flex items-center px-6 pb-16 sm:px-10 sm:pb-0 lg:px-16">
              <IntroVideo src={chapter.video} />
            </div>
          ) : null}
          {chapter.image ? (
            <div>
              <SidePhoto src={chapter.image.src} alt={chapter.image.alt} />
            </div>
          ) : null}
          {chapter.logos ? (
            <div className="flex items-center px-6 pb-16 sm:px-10 sm:pb-0 lg:px-16">
              <LogoQuad logos={chapter.logos} />
            </div>
          ) : null}
        </section>
      ))}

      <section
        id={connect.id}
        data-ink={connect.ink}
        className="chapter flex min-h-[100svh] flex-col overflow-hidden bg-paper text-ink sm:grid sm:grid-cols-[minmax(0,1fr)_58%] lg:grid-cols-2"
      >
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-16 pb-8 sm:px-10 sm:py-24 lg:px-16">
          <h2 className="font-serif text-[clamp(2.7rem,7vw,5.4rem)] leading-[0.98] tracking-tight">
            {connect.title}
          </h2>
          <div className="mt-6">
            <SocialLinks labeled />
          </div>
          <div className="mt-8">
            <Pill
              href={profile.booking.href}
              label={profile.booking.label}
              external
            />
          </div>
        </div>
        <div>
          <Portrait alt="" />
        </div>
      </section>
    </main>
  );
}
