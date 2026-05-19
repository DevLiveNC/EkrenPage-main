const transformations = [
  {
    name: "Mehmet T.",
    age: 28,
    duration: "3 Ay",
    lost: "-18 kg",
    gained: "+8 kg kas",
    package: "PRO",
    quote: "Hayatımın en iyi kararıydı. Hem kilo verdim hem de kendime güvenim arttı.",
    emoji: "💪",
  },
  {
    name: "Selin K.",
    age: 35,
    duration: "4 Ay",
    lost: "-12 kg",
    gained: "+5 kg kas",
    package: "ELITE",
    quote: "2 doğumdan sonra istediğim vücuda kavuştum. Profesyonelliğine hayranım.",
    emoji: "🔥",
  },
  {
    name: "Can A.",
    age: 22,
    duration: "6 Ay",
    lost: "-25 kg",
    gained: "+12 kg kas",
    package: "ELITE",
    quote: "Üniversitede kilolu başladım, mezun olurken sağlıklı bir insanım. Teşekkürler!",
    emoji: "⚡",
  },
  {
    name: "Buse Y.",
    age: 31,
    duration: "2 Ay",
    lost: "-8 kg",
    gained: "+4 kg kas",
    package: "STARTER",
    quote: "Sadece 2 ayda büyük bir fark yarattı. Kesinlikle tavsiye ediyorum.",
    emoji: "✨",
  },
];

export default function Transformation() {
  return (
    <section id="transformation" className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-md mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span
            className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "Rajdhani" }}
          >
            Dönüşümler
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <h2
          className="text-4xl font-black text-white tracking-wider text-center mb-2"
          style={{ fontFamily: "Bebas Neue" }}
        >
          GERÇEK SONUÇLAR
        </h2>
        <p className="text-zinc-500 text-sm text-center mb-8" style={{ fontFamily: "Inter" }}>
          Danışanlarımın inanılmaz dönüşüm hikayeleri
        </p>

        {/* Transformation Cards */}
        <div className="space-y-4">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-5 relative overflow-hidden"
            >
              {/* Decorative number */}
              <div
                className="absolute -right-3 -top-3 text-8xl font-black text-zinc-800/40 select-none"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/20 flex items-center justify-center text-2xl">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "Rajdhani" }}>
                      {t.name}
                    </p>
                    <p className="text-zinc-600 text-xs">{t.age} yaş · {t.duration}</p>
                  </div>
                </div>
                <div className="bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">
                  <span className="text-amber-400 text-[10px] font-bold tracking-wider" style={{ fontFamily: "Rajdhani" }}>
                    {t.package}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-2xl p-3 text-center">
                  <div
                    className="text-xl font-black text-red-400"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    {t.lost}
                  </div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider">Yağ Kaybı</div>
                </div>
                <div className="flex-1 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3 text-center">
                  <div
                    className="text-xl font-black text-amber-400"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    {t.gained}
                  </div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider">Kas Kazanımı</div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <span className="text-amber-400/30 text-4xl font-serif absolute -top-2 -left-1">"</span>
                <p className="text-zinc-400 text-sm leading-relaxed pl-5 italic" style={{ fontFamily: "Inter" }}>
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-zinc-500 text-sm mb-4" style={{ fontFamily: "Inter" }}>
            Sıradaki başarı hikayesi <span className="text-amber-400 font-semibold">senin olabilir</span>
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-base rounded-2xl tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            BEN DE BAŞLAMAK İSTİYORUM
          </button>
        </div>
      </div>
    </section>
  );
}
