import { useState } from "react";

const packages = [
  {
    id: "starter",
    name: "STARTER",
    subtitle: "Başlangıç Paketi",
    price: "1.499",
    period: "/ ay",
    badge: null,
    color: "from-zinc-800 to-zinc-900",
    borderColor: "border-zinc-700",
    accentColor: "text-zinc-300",
    features: [
      { text: "Aylık antrenman programı", included: true },
      { text: "Temel beslenme rehberi", included: true },
      { text: "Haftada 1 kontrol", included: true },
      { text: "WhatsApp desteği (iş saatleri)", included: true },
      { text: "Video analiz", included: false },
      { text: "7/24 öncelikli destek", included: false },
      { text: "Aylık yüz yüze seans", included: false },
    ],
  },
  {
    id: "pro",
    name: "PRO",
    subtitle: "Profesyonel Paket",
    price: "2.999",
    period: "/ ay",
    badge: "EN POPÜLER",
    color: "from-amber-950 to-zinc-900",
    borderColor: "border-amber-400",
    accentColor: "text-amber-400",
    features: [
      { text: "Haftalık güncellenen program", included: true },
      { text: "Detaylı beslenme planı", included: true },
      { text: "Haftada 2 kontrol", included: true },
      { text: "7/24 WhatsApp desteği", included: true },
      { text: "Video teknik analizi", included: true },
      { text: "Takviye önerileri", included: true },
      { text: "Aylık yüz yüze seans", included: false },
    ],
  },
  {
    id: "elite",
    name: "ELITE",
    subtitle: "Premium Paket",
    price: "4.999",
    period: "/ ay",
    badge: "EN İYİ SONUÇ",
    color: "from-orange-950 to-zinc-900",
    borderColor: "border-orange-500",
    accentColor: "text-orange-400",
    features: [
      { text: "Günlük program takibi", included: true },
      { text: "Kişiselleştirilmiş beslenme", included: true },
      { text: "Günlük check-in", included: true },
      { text: "7/24 öncelikli destek", included: true },
      { text: "Video teknik analizi", included: true },
      { text: "Takviye & supplement planı", included: true },
      { text: "Ayda 4 yüz yüze seans", included: true },
    ],
  },
];

export default function Packages() {
  const [selected, setSelected] = useState("pro");

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="relative py-20 bg-black overflow-hidden">
      {/* BG decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span
            className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "Rajdhani" }}
          >
            Paketler
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <h2
          className="text-4xl font-black text-white tracking-wider text-center mb-2"
          style={{ fontFamily: "Bebas Neue" }}
        >
          EĞİTİM PAKETLERİ
        </h2>
        <p className="text-zinc-500 text-sm text-center mb-8" style={{ fontFamily: "Inter" }}>
          Hedefine en uygun paketi seç ve dönüşümüne başla
        </p>

        {/* Package Selector Tabs */}
        <div className="flex bg-zinc-900 rounded-full p-1 mb-6 border border-zinc-800">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelected(pkg.id)}
              className={`flex-1 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                selected === pkg.id
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg"
                  : "text-zinc-500"
              }`}
              style={{ fontFamily: "Rajdhani" }}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelected(pkg.id)}
              className={`relative rounded-3xl border-2 bg-gradient-to-br ${pkg.color} ${pkg.borderColor} overflow-hidden transition-all duration-300 cursor-pointer ${
                selected === pkg.id ? "scale-100 shadow-2xl shadow-amber-900/20" : "scale-[0.97] opacity-60"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-2xl tracking-widest" style={{ fontFamily: "Rajdhani" }}>
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3
                      className={`text-3xl font-black tracking-wider ${pkg.accentColor}`}
                      style={{ fontFamily: "Bebas Neue" }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-zinc-500 text-xs" style={{ fontFamily: "Rajdhani" }}>
                      {pkg.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-end gap-1">
                      <span className="text-zinc-500 text-sm">₺</span>
                      <span
                        className={`text-3xl font-black ${pkg.accentColor}`}
                        style={{ fontFamily: "Bebas Neue" }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-zinc-600 text-xs">{pkg.period}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          f.included
                            ? "bg-amber-400/20 text-amber-400"
                            : "bg-zinc-800 text-zinc-600"
                        }`}
                      >
                        {f.included ? (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm ${f.included ? "text-zinc-300" : "text-zinc-600"}`}
                        style={{ fontFamily: "Inter" }}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {selected === pkg.id && (
                  <button
                    onClick={scrollToContact}
                    className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-base rounded-2xl tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    HEMEN BAŞLA →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-zinc-600 text-xs mt-6" style={{ fontFamily: "Inter" }}>
          💬 Hangi paketin sana uygun olduğundan emin değil misin?{" "}
          <button
            onClick={scrollToContact}
            className="text-amber-400 underline"
          >
            Ücretsiz danışmanlık al
          </button>
        </p>
      </div>
    </section>
  );
}
