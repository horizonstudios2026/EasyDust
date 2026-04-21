import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { toast } from "sonner";
import {
  Sparkles,
  Building2,
  Box,
  Brush,
  Home,
  HardHat,
  Wind,
  Eye,
  Check,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
  Clock,
  Award,
} from "lucide-react";

const IMG = {
  hero: "https://static.prod-images.emergentagent.com/jobs/4ebc6054-84d1-4704-a616-e6ea9722ce0d/images/9e301934e1e45b37361a276a8cafed3c3f701fc564b1008ee1f7e6ade6320e08.png",
  hemstad:
    "https://static.prod-images.emergentagent.com/jobs/4ebc6054-84d1-4704-a616-e6ea9722ce0d/images/d8c938d83ca10c96eee66e84b6c59dd55c93746a1fc91f012136742a808947b1.png",
  foretag:
    "https://static.prod-images.emergentagent.com/jobs/4ebc6054-84d1-4704-a616-e6ea9722ce0d/images/69d6409436ae4ece6fbf8ca8f70fd227839de8a7d9928990806f772ef6768393.png",
  flytt:
    "https://images.pexels.com/photos/4569338/pexels-photo-4569338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  fonster:
    "https://images.pexels.com/photos/6195113/pexels-photo-6195113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  person1:
    "https://images.pexels.com/photos/33973872/pexels-photo-33973872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  person2:
    "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const EMAIL_TO = "ivicaikica81@gmail.com";
const PHONE = "070-712 22 38";
const PHONE_TEL = "+46707122238";

const services = [
  {
    key: "hemstad",
    title: "Hemstäd",
    desc: "Regelbunden städning av ditt hem – dammsugning, moppning, kök & badrum.",
    price: "fr. 295 kr/tim",
    icon: Home,
    image: IMG.hemstad,
    size: "lg",
  },
  {
    key: "foretag",
    title: "Företagsstäd",
    desc: "Professionell lokalvård för kontor, butiker och verksamheter.",
    price: "fr. offert",
    icon: Building2,
    image: IMG.foretag,
    size: "md",
  },
  {
    key: "flytt",
    title: "Flyttstäd",
    desc: "Garanterad flyttstäd – godkänd av mäklare, annars städar vi om.",
    price: "fr. 1 690 kr",
    icon: Box,
    image: IMG.flytt,
    size: "md",
  },
  {
    key: "storstad",
    title: "Storstäd",
    desc: "Djupgående städning – perfekt inför högtider eller gäster.",
    price: "fr. 1 290 kr",
    icon: Sparkles,
    size: "sm",
  },
  {
    key: "trapp",
    title: "Trapphusstäd",
    desc: "Regelbunden städning av trapphus för bostadsrättsföreningar.",
    price: "fr. offert",
    icon: Brush,
    size: "sm",
  },
  {
    key: "bygg",
    title: "Byggstäd",
    desc: "Efter renovering eller nybygge – vi tar bort damm, spill och smuts.",
    price: "fr. 1 890 kr",
    icon: HardHat,
    size: "sm",
  },
  {
    key: "fonster",
    title: "Fönsterputs",
    desc: "Kristallklara fönster in- och utvändigt, karmar inkluderade.",
    price: "fr. 390 kr",
    icon: Wind,
    image: IMG.fonster,
    size: "md",
  },
  {
    key: "visning",
    title: "Visningsstädning",
    desc: "Få hemmet att sälja sig självt – skarp städning inför visning.",
    price: "fr. 990 kr",
    icon: Eye,
    size: "sm",
  },
];

const testimonials = [
  {
    name: "Anna Lindström",
    role: "Kund sedan 2022",
    image: IMG.person1,
    text:
      "Fantastisk service! Städarna är alltid på tid, noggranna och otroligt trevliga. Hemmet har aldrig varit renare.",
    stars: 5,
  },
  {
    name: "Erik Johansson",
    role: "VD, Nordic Design AB",
    image: IMG.person2,
    text:
      "Vi har använt EasyDust för kontorsstäd i två år. Proffsigt, pålitligt och alltid till överenskommet pris.",
    stars: 5,
  },
  {
    name: "Sofia Bergström",
    role: "Flyttstäd",
    image: null,
    text:
      "Flyttstäden blev godkänd direkt av mäklaren. Stressfritt och värt varenda krona. Kan varmt rekommendera.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Vad ingår i städningen?",
    a: "I hemstädning ingår dammsugning, våttorkning av golv, avtorkning av ytor, rengöring av kök och badrum samt tömning av papperskorgar. Vid flyttstäd och storstäd ingår även djuprengöring av skåp, vitvaror och fönster.",
  },
  {
    q: "Hur bokar jag?",
    a: "Fyll i formuläret här på sidan så återkommer vi inom 2 timmar med en kostnadsfri offert. Du kan också ringa oss direkt på 070-712 22 38.",
  },
  {
    q: "Tar ni med eget material?",
    a: "Ja, vi tar alltid med miljövänligt städmaterial och professionell utrustning utan extra kostnad. Har du specifika produkter du föredrar använder vi gärna dem istället.",
  },
  {
    q: "Hur snabbt kan jag få hjälp?",
    a: "Vi kan oftast vara på plats redan nästa dag. För akuta uppdrag (t.ex. flyttstäd samma vecka) löser vi det i mån av tid – kontakta oss så ser vi vad vi kan göra.",
  },
  {
    q: "Är ni försäkrade?",
    a: "Ja, vi har full ansvarsförsäkring och kollektivavtal. Du kan känna dig helt trygg när våra städare är i ditt hem.",
  },
];

function scrollToForm() {
  const el = document.getElementById("lead-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function LandingPage() {
  const [form, setForm] = useState({
    namn: "",
    epost: "",
    telefon: "",
    meddelande: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.namn.trim()) e.namn = "Ange ditt namn";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.epost))
      e.epost = "Ange en giltig e-postadress";
    const digits = form.telefon.replace(/\D/g, "");
    if (digits.length < 7) e.telefon = "Minst 7 siffror";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (form.website) return; // honeypot triggered
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      toast.error("Kontrollera fälten", {
        description: "Vänligen fyll i alla obligatoriska fält korrekt.",
      });
      return;
    }
    setLoading(true);

    const subject = `Ny offertförfrågan från ${form.namn}`;
    const body = `Hej EasyDust!

Jag skulle vilja få en offert.

Namn: ${form.namn}
E-post: ${form.epost}
Telefon: ${form.telefon}

Meddelande:
${form.meddelande || "(inget meddelande)"}

Med vänliga hälsningar,
${form.namn}`;

    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    setTimeout(() => {
      window.location.href = mailto;
      setLoading(false);
      toast.success("Tack! Din e-postklient öppnas nu", {
        description: "Tryck på Skicka i ditt mejlprogram. Vi återkommer inom kort.",
      });
      setForm({ namn: "", epost: "", telefon: "", meddelande: "", website: "" });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-body overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl md:text-3xl font-bold tracking-tight" data-testid="logo-link">
            Easy<span className="text-blue-600">Dust</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm text-slate-600">
            <a href="#tjanster" className="hover:text-slate-900 transition-colors" data-testid="nav-services">Tjänster</a>
            <a href="#omdomen" className="hover:text-slate-900 transition-colors" data-testid="nav-testimonials">Omdömen</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors" data-testid="nav-faq">FAQ</a>
            <a href="#kontakt" className="hover:text-slate-900 transition-colors" data-testid="nav-contact">Kontakt</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              onClick={scrollToForm}
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-11 font-medium btn-primary"
              data-testid="header-cta-button"
            >
              Få offert
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Meny"
              data-testid="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200/60 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4 text-slate-700">
              <a href="#tjanster" onClick={() => setMobileOpen(false)}>Tjänster</a>
              <a href="#omdomen" onClick={() => setMobileOpen(false)}>Omdömen</a>
              <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="#kontakt" onClick={() => setMobileOpen(false)}>Kontakt</a>
              <Button
                onClick={() => { scrollToForm(); setMobileOpen(false); }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-11 w-full"
                data-testid="mobile-cta-button"
              >
                Få offert
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden isolate">
        {/* Full-width background photo */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Soft white overlay – readable text on the left, photo visible on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 md:from-white md:via-white/80 md:to-white/5" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#FAFAFA]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6 border border-blue-100" data-testid="hero-badge">
                <Sparkles size={14} /> Stockholms nöjdaste kunder 2024
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.05]" data-testid="hero-headline">
                Skinande rent,<br />
                <span className="font-medium">utan krångel.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-xl leading-relaxed" data-testid="hero-subheadline">
                Professionell städning – enkelt, tryggt och prisvärt.
                Få en <strong className="text-slate-900 font-semibold">kostnadsfri offert på under 30 sekunder</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-blue-600" /> Ansvarsförsäkring</div>
                <div className="flex items-center gap-2"><Award size={18} className="text-blue-600" /> Kollektivavtal</div>
                <div className="flex items-center gap-2"><Check size={18} className="text-blue-600" /> Nöjd-kund-garanti</div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.15s" }}>
              <form
                id="lead-form"
                onSubmit={handleSubmit}
                noValidate
                className="relative bg-white border border-slate-200/80 rounded-3xl shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)] p-7 md:p-9"
                data-testid="lead-form"
              >
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Kostnadsfri offert</div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-slate-900">Få svar på under 2 timmar</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="namn" className="text-sm font-medium text-slate-700 mb-1.5 block">Namn</Label>
                    <Input
                      id="namn"
                      type="text"
                      autoComplete="name"
                      value={form.namn}
                      onChange={(e) => update("namn", e.target.value)}
                      placeholder="Anna Svensson"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/70 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
                      data-testid="form-input-namn"
                    />
                    {errors.namn && <p className="text-xs text-red-600 mt-1" data-testid="error-namn">{errors.namn}</p>}
                  </div>
                  <div>
                    <Label htmlFor="epost" className="text-sm font-medium text-slate-700 mb-1.5 block">E-post</Label>
                    <Input
                      id="epost"
                      type="email"
                      autoComplete="email"
                      value={form.epost}
                      onChange={(e) => update("epost", e.target.value)}
                      placeholder="anna@exempel.se"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/70 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
                      data-testid="form-input-epost"
                    />
                    {errors.epost && <p className="text-xs text-red-600 mt-1" data-testid="error-epost">{errors.epost}</p>}
                  </div>
                  <div>
                    <Label htmlFor="telefon" className="text-sm font-medium text-slate-700 mb-1.5 block">Telefonnummer</Label>
                    <Input
                      id="telefon"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefon}
                      onChange={(e) => update("telefon", e.target.value)}
                      placeholder="070-123 45 67"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/70 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
                      data-testid="form-input-telefon"
                    />
                    {errors.telefon && <p className="text-xs text-red-600 mt-1" data-testid="error-telefon">{errors.telefon}</p>}
                  </div>
                  <div>
                    <Label htmlFor="meddelande" className="text-sm font-medium text-slate-700 mb-1.5 block">Meddelande <span className="text-slate-400 font-normal">(valfritt)</span></Label>
                    <Textarea
                      id="meddelande"
                      value={form.meddelande}
                      onChange={(e) => update("meddelande", e.target.value)}
                      placeholder="Berätta kort om ditt städbehov..."
                      rows={3}
                      className="rounded-xl border-slate-200 bg-slate-50/70 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 resize-none"
                      data-testid="form-input-meddelande"
                    />
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-13 py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base btn-primary disabled:opacity-70"
                    data-testid="form-submit-button"
                  >
                    {loading ? "Skickar..." : (
                      <span className="inline-flex items-center gap-2">Få offert <ArrowRight size={18} /></span>
                    )}
                  </Button>

                  <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-blue-600" /> Snabb återkoppling</span>
                    <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-blue-600" /> Helt kostnadsfritt</span>
                    <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-blue-600" /> Ingen bindning</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROP BAND ===== */}
      <section className="bg-blue-50/60 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Clock, title: "Snabb bokning", desc: "Svar inom 2 timmar" },
              { icon: Award, title: "Erfarna städare", desc: "Utbildad personal" },
              { icon: ShieldCheck, title: "Fullt försäkrat", desc: "Kollektivavtal & försäkring" },
              { icon: Check, title: "Flexibla tider", desc: "Kvällar & helger möjligt" },
            ].map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
                  <v.icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-display font-medium text-slate-900">{v.title}</div>
                  <div className="text-sm text-slate-600">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES (Bento) ===== */}
      <section id="tjanster" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14 md:mb-20">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">Våra tjänster</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight" data-testid="services-heading">
              Åtta sätt att få det <span className="font-medium">rent.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Oavsett om det gäller hemmet, kontoret eller en flyttstäd – vi har lösningen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[220px]">
            {services.map((s, i) => {
              const hasImage = !!s.image;
              const spanClass =
                s.size === "lg"
                  ? "md:col-span-2 md:row-span-2"
                  : s.size === "md"
                  ? "md:col-span-2"
                  : "";
              const Icon = s.icon;
              return (
                <div
                  key={s.key}
                  className={`group relative rounded-3xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 ${spanClass} ${hasImage ? "service-card-photo" : ""}`}
                  data-testid={`service-card-${s.key}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {hasImage && (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className={`relative z-10 h-full flex flex-col justify-between p-6 md:p-7 ${hasImage ? "text-white" : "text-slate-900"}`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${hasImage ? "bg-white/25 backdrop-blur-md border border-white/40 shadow-lg" : "bg-blue-50 border border-blue-100"}`}>
                      <Icon size={20} className={hasImage ? "text-white" : "text-blue-600"} />
                    </div>
                    <div>
                      <h3 className={`font-display text-xl md:text-2xl font-semibold mb-1.5 ${hasImage ? "text-white photo-card-text" : "text-slate-900"}`}>
                        {s.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${hasImage ? "text-white photo-card-text" : "text-slate-600"}`}>
                        {s.desc}
                      </p>
                      <div className="mt-3">
                        {hasImage ? (
                          <span className="price-pill">{s.price}</span>
                        ) : (
                          <span className="text-sm font-semibold text-blue-600">{s.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight" data-testid="cta-heading">
            Redo för ett <span className="font-medium text-blue-400">skinande</span><br />rent hem?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Fyll i formuläret och få en kostnadsfri offert. Vi återkommer inom 2 timmar.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToForm}
              className="h-13 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-base font-semibold btn-primary"
              data-testid="cta-primary-button"
            >
              Begär offert nu <ArrowRight size={18} className="ml-2" />
            </Button>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 h-13 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 rounded-full text-base font-medium transition-colors"
              data-testid="cta-phone-button"
            >
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="omdomen" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-14 md:mb-20">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">Vad våra kunder säger</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight" data-testid="testimonials-heading">
              Över <span className="font-medium">2 400</span> nöjda kunder.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex gap-0.5 mb-5 text-blue-600">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 md:py-32 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">Vanliga frågor</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight" data-testid="faq-heading">
              Har du frågor? <span className="font-medium">Vi har svaren.</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-medium py-6 hover:no-underline" data-testid={`faq-trigger-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6" data-testid={`faq-content-${i}`}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <footer id="kontakt" className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">Kontakt</div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8" data-testid="footer-heading">
                Säg <span className="font-medium text-blue-400">hej.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
                Har du frågor eller vill ha en offert? Ring, mejla eller fyll i formuläret – vi svarar snabbt.
              </p>
              <div className="space-y-5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-4 group"
                  data-testid="footer-phone"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-display text-2xl md:text-3xl font-light group-hover:text-blue-400 transition-colors">{PHONE}</span>
                </a>
                <a
                  href={`mailto:${EMAIL_TO}`}
                  className="flex items-center gap-4 group"
                  data-testid="footer-email"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-display text-2xl md:text-3xl font-light group-hover:text-blue-400 transition-colors break-all">{EMAIL_TO}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12 flex flex-col justify-between">
              <div>
                <div className="font-display text-3xl font-bold mb-4">Easy<span className="text-blue-400">Dust</span></div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Professionell städning i Stockholm. Kollektivavtal, ansvarsförsäkring och nöjd-kund-garanti.
                </p>
                <Button
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-full h-12 px-7 btn-primary"
                  data-testid="footer-cta-button"
                >
                  Kontakta oss <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="mt-12 pt-6 border-t border-white/10 text-xs text-slate-500 flex flex-wrap gap-x-6 gap-y-2">
                <span>© {new Date().getFullYear()} EasyDust AB</span>
                <span>Org.nr 559000-0000</span>
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
