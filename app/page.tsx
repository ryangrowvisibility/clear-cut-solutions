import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "1-877-228-8765";
const TEL = "tel:+18772288765";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Clear%20Cut%20Solutions&query_place_id=ChIJLdvazl6nFy8RssN7p7Fg_2Q";
const FB = "https://www.facebook.com/clearcutsolutionsLndn";
const IG = "https://www.instagram.com/clearcutsolutions.ca";

const featured = [
  {
    icon: "home",
    name: "Grant-funded home repairs",
    text: "Through our work with the non-profit Humanity Homes, we carry out funded or financed home repairs for seniors, people living with disabilities and low-to-moderate income homeowners. We come out, put together the estimate and handle the paperwork, at no cost to you, so you can find out what is possible before you commit to anything.",
  },
  {
    icon: "heart",
    name: "Accessibility upgrades",
    text: "Grant-compliant changes that help you or a family member stay safely in the home you know. We walk through the house with you, listen to what is hard day to day, and plan the work around the program's requirements so nothing gets held up.",
  },
];

const services = [
  { icon: "brush", name: "Interior & exterior painting", text: "House exteriors, decks and interior rooms. Customers call our crew thorough, careful and competitively priced, and we finish when we say we will." },
  { icon: "grid", name: "Window cleaning", text: "Inside and outside windows plus screens, done by a friendly, meticulous tech. One customer's verdict: what a difference." },
  { icon: "drop", name: "Gutter & eavestrough cleaning", text: "Seasonal clean-outs so rain goes where it should, not down your siding or into your foundation." },
  { icon: "waves", name: "Power & pressure washing", text: "Siding, decks and hard surfaces. One customer's deck was a mess before we came and now looks new." },
  { icon: "sun", name: "Skylight & glass cleaning", text: "Rooftop skylights, glass and mirrors, cleaned carefully so the light comes back into the room." },
];

const reviews = [
  { name: "Maia A.", job: "Exterior project", text: "Carson understood what we needed without upselling and respected our budget. After a site visit with Carson and Salar we had a quote the same day. They met our tight timeline, handled surprises in the window frames within budget, and stand behind the work with a satisfaction guarantee." },
  { name: "Faizan Z.", job: "Painting", text: "Salar and Carson run a top-class operation. Everything you could want from a painting company: professional, thorough, competitively priced, careful, and finished on time." },
  { name: "John W.", job: "Exterior & deck painting", text: "Carson Bonnett and Salar just completed a painting job on the outside of our house and the backyard deck. A first-class job. Highly recommend." },
  { name: "Hirdeveer B.", job: "Gutters, windows & skylights", text: "Salar gave a smooth, thorough estimate and communicated well throughout. The work was done on time, and the crew made sure I was 100% satisfied before they left." },
  { name: "Jayne L.", job: "Windows, siding & gutters", text: "Inside and outside windows, the screens, the siding washed and the gutters cleaned. The tech was friendly and meticulous. What a difference." },
  { name: "Kelly C.", job: "Deck washing & windows", text: "My deck was a mess and now it looks new. I will definitely have the team back." },
];

const steps = [
  { title: "Call us", text: "Tell us what is going on with the house, or ask whether you might qualify for a funded repair." },
  { title: "Site visit and quote", text: "Salar or Carson comes out, looks at the job with you and usually gives you a price the same day." },
  { title: "Paperwork handled", text: "For Humanity Homes projects we prepare the estimate and the grant paperwork at no cost to you." },
  { title: "We do the work", text: "A careful crew, on the timeline we agreed, with clear updates if anything unexpected turns up." },
  { title: "Final walk-through", text: "We do not leave until you are happy with the result. The work is backed by our satisfaction guarantee." },
];

const faqs = [
  { q: "Who qualifies for a grant-funded repair?", a: "The Humanity Homes program is aimed at seniors, people living with disabilities and low-to-moderate income homeowners. The best way to find out is to call us at 1-877-228-8765. We will ask a few questions, come out for an estimate and handle the paperwork at no cost to you." },
  { q: "What does the estimate cost?", a: "Nothing. For grant-funded work the estimate and paperwork are free, and for our cleaning and painting services we come out and give you a clear price before anything is booked." },
  { q: "Will you try to sell me more than I need?", a: "No. Customers regularly mention that we listened, did not upsell and respected their budget. If something unexpected turns up during a job, we talk to you about it before going ahead." },
  { q: "How quickly can you give me a quote?", a: "Often the same day as the site visit. Call and we will find a time that works for you." },
  { q: "What areas do you serve?", a: "We are a London, Ontario contractor. If you are outside the city and not sure whether we cover your area, just call and ask." },
  { q: "Do you still do window, gutter and painting work?", a: "Yes. Exterior cleaning and painting is how we built our reputation, and we still do window cleaning, gutter and eavestrough clean-outs, pressure washing, skylight cleaning and interior and exterior painting." },
  { q: "What are your hours?", a: "We are open 9 a.m. to 5 p.m., seven days a week." },
];

const facts = [
  { icon: "award", title: "Contractor of the Year", text: "Named by the non-profit Humanity Homes" },
  { icon: "tag", title: "Same-day quotes", text: "Clear prices, no upselling" },
  { icon: "shield", title: "Satisfaction guarantee", text: "We finish when you are happy" },
  { icon: "clock", title: "Open 7 days", text: "9 a.m. to 5 p.m." },
];

const area = ["London, Ontario", "Homes across the city", "Just outside London? Call and ask"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Clear Cut Solutions",
  telephone: "+1-877-228-8765",
  areaServed: "London, Ontario",
  address: { "@type": "PostalAddress", addressLocality: "London", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "27" },
  openingHours: "Mo-Su 09:00-17:00",
  sameAs: [FB, IG],
  hasMap: MAPS,
};

function Initial({ name }: { name: string }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft font-bold text-brand" style={{ fontFamily: "var(--font-manrope)" }} aria-hidden="true">
      {name.charAt(0)}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      <div className="hidden bg-brand-dark text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving London, Ontario</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 7 days, 9 a.m. to 5 p.m.</span>
          <span className="flex items-center gap-2"><Icon name="award" className="h-4 w-4" /> Humanity Homes Contractor of the Year</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 text-brand">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"><Icon name="home" className="h-5 w-5" /></span>
            <span className="text-lg font-extrabold leading-none tracking-tight" style={{ fontFamily: "var(--font-manrope)" }}>Clear Cut Solutions</span>
          </a>
          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-muted lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#process" className="hover:text-brand">How it works</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden bg-cta text-white hover:bg-cta-dark md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">
                <Icon name="award" className="h-4 w-4" /> Humanity Homes Contractor of the Year
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold text-ink">
                Home Repairs &amp; Accessibility Upgrades in London, Ontario
              </h1>
              <p className="mt-5 max-w-[60ch] text-lg text-muted">
                Grant-funded repairs for seniors, people living with disabilities and low-to-moderate income homeowners, with the estimate and paperwork handled at no cost to you. Led by owner Salar and project lead Carson, and still trusted for painting, windows, gutters and pressure washing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn bg-cta text-lg text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href="#services" className="btn border-2 border-brand text-brand hover:bg-brand-soft">See our services</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-muted">
                <Stars className="h-5 w-5" />
                <span className="font-bold text-ink">4.7</span>
                <span aria-hidden="true">·</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">27 Google reviews</a>
                <span aria-hidden="true">·</span>
                <span>Same-day quotes</span>
                <span aria-hidden="true">·</span>
                <span>No upselling</span>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_40px_-28px_oklch(0.27_0.08_262/0.35)] md:p-7">
                <Stars className="h-5 w-5" />
                <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                  &ldquo;Carson understood what we needed without upselling and respected our budget. We had a quote the same day, and they met our tight timeline.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-sm">
                  <Initial name="Maia" />
                  <span><span className="block font-bold text-ink">Maia A.</span><span className="text-muted">Google review · Exterior project</span></span>
                </figcaption>
              </figure>
              <div className="rounded-2xl bg-brand p-6 text-white">
                <p className="font-bold" style={{ fontFamily: "var(--font-manrope)" }}>Quick facts</p>
                <ul className="mt-3 space-y-2 text-[15px] text-white/90">
                  <li className="flex items-start gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" /> Free estimates and grant paperwork</li>
                  <li className="flex items-start gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" /> Open 7 days, 9 a.m. to 5 p.m.</li>
                  <li className="flex items-start gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" /> Toll-free: {PHONE}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="border-y border-line bg-tint">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {facts.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-sm"><Icon name={f.icon} className="h-6 w-6" /></span>
                <div>
                  <p className="font-bold leading-tight text-ink">{f.title}</p>
                  <p className="text-sm text-muted">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[62ch]">
              <p className="font-semibold text-cta-dark">What we do</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">Repairs that help you stay in your home</h2>
              <p className="mt-4 text-lg text-muted">Our main focus today is funded home repairs and accessibility work through Humanity Homes. We also kept the exterior cleaning and painting services our earliest customers came to us for.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {featured.map((s) => (
                <article key={s.name} className="reveal lift rounded-2xl border-2 border-brand bg-white p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">Humanity Homes program</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-ink">{s.name}</h3>
                  <p className="mt-3 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:gap-2.5">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className="reveal lift rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand hover:gap-2.5">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
              <article className="reveal flex flex-col justify-between rounded-2xl bg-tint p-6">
                <div>
                  <h3 className="text-xl font-bold text-ink">Not sure what you need?</h3>
                  <p className="mt-2 text-[16px] text-muted">Describe the problem on the phone and we will tell you honestly whether it is a job for us.</p>
                </div>
                <a href={TEL} className="btn mt-5 bg-brand text-white hover:bg-brand-dark"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
              </article>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[60ch]">
                <p className="font-semibold text-cta-dark">Reviews</p>
                <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">Rated 4.7 from 27 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Same-day quotes, no upselling, clear communication and spotless work come up again and again.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn border-2 border-brand bg-white text-brand hover:bg-brand-soft">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[16px] leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4 text-sm">
                    <Initial name={r.name} />
                    <span><span className="block font-bold text-ink">{r.name}</span><span className="text-muted">Google review · {r.job}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-cta-dark">About us</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">A London contractor people recommend to their neighbours</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>Clear Cut Solutions is run by owner Salar, with Carson Bonnett leading projects on site. We started out washing windows, cleaning gutters, pressure washing and painting houses around London, and our customers kept telling us the same things: we showed up when we said, quoted fairly and left the place cleaner than we found it.</p>
                <p>That reputation led to our work with Humanity Homes, a non-profit that helps people stay safely in their homes, and to being named their Contractor of the Year. Today most of our time goes into grant-funded repairs and accessibility upgrades for seniors, people living with disabilities and families on modest incomes.</p>
                <p>Whether the job is a funded repair or a deck that needs a wash, you deal with the same people from the first visit to the final walk-through.</p>
              </div>
            </div>
            <div className="reveal grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "users", t: "You meet the owner", d: "Salar and Carson come out for the estimate themselves." },
                { icon: "tag", t: "No upselling", d: "We price what you need and respect your budget." },
                { icon: "bolt", t: "Quotes the same day", d: "Often right after the site visit." },
                { icon: "shield", t: "We stand behind it", d: "Satisfaction guaranteed before we leave." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-white p-6">
                  <span className="text-brand"><Icon name={d.icon} className="h-7 w-7" /></span>
                  <p className="mt-3 text-lg font-bold text-ink">{d.t}</p>
                  <p className="mt-1 text-[16px] text-muted">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-semibold text-cta-dark">How it works</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">From your first call to the final walk-through</h2>
            </div>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-2xl font-extrabold text-brand" style={{ fontFamily: "var(--font-manrope)" }}>{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-cta-dark">Service area</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">Serving homeowners across London, Ontario</h2>
              <p className="mt-4 text-lg text-muted">We work in homes all over the city. If you are just outside London, call and ask; we will tell you straight away whether we can help.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => (
                  <li key={a} className="rounded-full border border-line bg-white px-4 py-1.5 text-[15px] font-semibold text-ink">{a}</li>
                ))}
              </ul>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of London, Ontario" src="https://maps.google.com/maps?q=London%2C%20Ontario&output=embed" className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <p className="font-semibold text-cta-dark">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-[2.6rem]">Questions we hear a lot</h2>
              <p className="mt-4 text-lg text-muted">Something else on your mind? Call {PHONE} and ask Salar or Carson directly.</p>
            </div>
            <div className="reveal divide-y divide-line rounded-2xl border border-line bg-white px-6">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-ink">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-[16px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-5 md:px-6">
            <div className="max-w-[56ch]">
              <h2 className="text-3xl font-extrabold md:text-[2.5rem]">Ready to talk about your home? Call Salar at {PHONE}</h2>
              <p className="mt-3 text-lg text-white/85">Free estimates, grant paperwork handled for you, and quotes often the same day. Open 7 days, 9 a.m. to 5 p.m.</p>
            </div>
            <a href={TEL} className="btn bg-cta px-8 text-lg text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-paper pb-24 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-xl font-extrabold text-brand" style={{ fontFamily: "var(--font-manrope)" }}>Clear Cut Solutions</p>
            <p className="mt-2 max-w-[38ch] text-[15px] text-muted">Grant-funded home repairs, accessibility upgrades and exterior cleaning and painting in London, Ontario.</p>
            <a href={TEL} className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-brand"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
            <div className="mt-4 flex gap-3">
              <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Clear Cut Solutions on Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-line text-brand hover:bg-brand-soft"><Icon name="facebook" className="h-5 w-5" /></a>
              <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Clear Cut Solutions on Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-line text-brand hover:bg-brand-soft"><Icon name="instagram" className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-[15px] text-muted">
              {[...featured, ...services].map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Hours</p>
            <p className="mt-3 text-[15px] text-muted">Monday to Sunday<br />9 a.m. to 5 p.m.</p>
            <p className="mt-5 font-bold text-ink">Service area</p>
            <p className="mt-3 text-[15px] text-muted">London, Ontario</p>
          </div>
          <div>
            <p className="font-bold text-ink">Quick links</p>
            <ul className="mt-3 space-y-2 text-[15px] text-muted">
              <li><a href="#services" className="hover:text-brand">Services</a></li>
              <li><a href="#reviews" className="hover:text-brand">Reviews</a></li>
              <li><a href="#about" className="hover:text-brand">About</a></li>
              <li><a href="#faq" className="hover:text-brand">FAQ</a></li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google Maps listing</a></li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] px-5 text-sm text-muted md:px-6">© {new Date().getFullYear()} Clear Cut Solutions. London, Ontario.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-paper p-3 md:hidden">
        <a href={TEL} className="btn bg-cta text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn border-2 border-brand text-brand"><Icon name="star" className="h-5 w-5" /> Reviews</a>
      </div>
    </>
  );
}
