const certs = [
  "NASM Sertifikalı PT",
  "Beslenme Koçu",
  "Fonksiyonel Antrenman",
  "Sporcu Psikolojisi",
];

const features = [
  {
    icon: "🎯",
    title: "Kişisel Program",
    desc: "Vücuduna ve hedefine özel tasarlanmış antrenman planı",
  },
  {
    icon: "🥗",
    title: "Beslenme Desteği",
    desc: "Yaşam tarzına uygun, sürdürülebilir beslenme rehberi",
  },
  {
    icon: "📱",
    title: "7/24 Destek",
    desc: "Her an yanındayım, sorularını hemen yanıtlıyorum",
  },
  {
    icon: "📊",
    title: "Haftalık Takip",
    desc: "İlerleme raporları ve program güncellemeleri",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-md mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span
            className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "Rajdhani" }}
          >
            Hakkımda
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        {/* Trainer Card */}
        <div className="relative rounded-3xl overflow-hidden mb-8 border border-zinc-800">
          <div className="bg-gradient-to-br from-zinc-900 to-black p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-2xl font-black text-black shadow-lg shadow-amber-500/30 flex-shrink-0" style={{ fontFamily: "Bebas Neue" }}>
                AK
              </div>
              <div>
                <h2
                  className="text-white text-2xl font-black tracking-wider leading-tight"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  AHMET KAYA
                </h2>
                <p className="text-amber-400 text-sm font-semibold" style={{ fontFamily: "Rajdhani" }}>
                  Elite Personal Trainer
                </p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                  <span className="text-zinc-500 text-xs ml-1">5.0 (200+ yorum)</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "Inter" }}>
              8 yıllık deneyimim boyunca <span className="text-white font-semibold">500'den fazla kişiye</span> vücutlarını ve hayatlarını dönüştürme yolculuğunda eşlik ettim. Her bireyin farklı olduğuna inanıyor, tamamen kişiselleştirilmiş programlar hazırlıyorum.
            </p>

            {/* Certs */}
            <div className="flex flex-wrap gap-2">
              {certs.map((cert, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs rounded-full"
                  style={{ fontFamily: "Rajdhani" }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <h3
          className="text-white text-2xl font-black tracking-wider mb-5"
          style={{ fontFamily: "Bebas Neue" }}
        >
          NE SUNUYORUM?
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 hover:border-amber-400/30 transition-colors"
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4
                className="text-white font-bold text-sm mb-1"
                style={{ fontFamily: "Rajdhani" }}
              >
                {f.title}
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed" style={{ fontFamily: "Inter" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
