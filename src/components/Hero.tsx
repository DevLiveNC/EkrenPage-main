export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-trainer.jpg')" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Golden glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto w-full px-6 pb-16 pt-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-5">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "Rajdhani" }}>
            Profesyonel Fitness Koçu
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-6xl font-black text-white leading-none mb-2"
          style={{ fontFamily: "Bebas Neue", letterSpacing: "0.05em" }}
        >
          VÜCUDUNU
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            DÖNÜŞTÜR.
          </span>
          <br />
          HAYATINI
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            DEĞİŞTİR.
          </span>
        </h1>

        <p className="text-zinc-400 text-base leading-relaxed mt-4 mb-8" style={{ fontFamily: "Inter" }}>
          Kişiselleştirilmiş antrenman ve beslenme programlarıyla hedeflerine
          ulaşmanı sağlıyorum. <span className="text-amber-400 font-semibold">Bahaneler değil, sonuçlar.</span>
        </p>

        {/* Stats Row */}
        <div className="flex gap-4 mb-8">
          {[
            { value: "500+", label: "Mutlu Danışan" },
            { value: "8 YIL", label: "Deneyim" },
            { value: "%94", label: "Başarı Oranı" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className="text-xl font-black text-amber-400"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {stat.value}
              </div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider" style={{ fontFamily: "Rajdhani" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => scrollTo("#packages")}
            className="flex-1 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-base rounded-2xl tracking-wider shadow-lg shadow-amber-500/30 active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            PAKETLERİ GÖR
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex-1 py-4 border border-amber-400/50 text-amber-400 font-bold text-base rounded-2xl tracking-wider active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            İLETİŞİME GEÇ
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400 to-transparent" />
      </div>
    </section>
  );
}
