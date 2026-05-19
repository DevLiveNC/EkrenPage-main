import { useState } from "react";

const testimonials = [
  {
    name: "Zeynep M.",
    role: "Öğretmen, 34 yaş",
    stars: 5,
    text: "Daha önce birçok diyetisyen ve PT ile çalıştım ama Ahmet ile çalışmak tamamen farklıydı. Gerçekten kişiselleştirilmiş bir program ve sürekli motivasyon. 3 ayda hayallerimin vücuduna kavuştum!",
    initials: "ZM",
    packageColor: "bg-amber-400",
  },
  {
    name: "Burak S.",
    role: "Yazılımcı, 29 yaş",
    stars: 5,
    text: "Masa başı çalışırken aldığım kilolardan kurtulmak istiyordum. Online program sayesinde evden çalışırken bile düzenimi koruyabildim. Harika bir deneyim!",
    initials: "BS",
    packageColor: "bg-orange-500",
  },
  {
    name: "Ayşe D.",
    role: "Ev Hanımı, 41 yaş",
    stars: 5,
    text: "40 yaşımda başlayabileceğimden şüpheliydim. Ama Ahmet bey bana özel programıyla her şeyin mümkün olduğunu gösterdi. İnanılmaz derecede sabırlı ve anlayışlı.",
    initials: "AD",
    packageColor: "bg-amber-600",
  },
  {
    name: "Emre K.",
    role: "Sporcu, 26 yaş",
    stars: 5,
    text: "Sadece kilo vermek değil, kas kütlemi artırmak istedim. Elite paket tam da ihtiyacım olan buydu. 6 ayda vücudum tamamen değişti, rekabetçi sporlarda da fark yarattı.",
    initials: "EK",
    packageColor: "bg-yellow-500",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-md mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span
            className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "Rajdhani" }}
          >
            Yorumlar
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <h2
          className="text-4xl font-black text-white tracking-wider text-center mb-8"
          style={{ fontFamily: "Bebas Neue" }}
        >
          ONLAR NE DİYOR?
        </h2>

        {/* Main Testimonial Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 mb-6 relative overflow-hidden">
          {/* Large quote mark */}
          <div
            className="absolute -top-4 -left-2 text-9xl font-serif text-amber-400/10 select-none leading-none"
          >
            "
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(active.stars)].map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">★</span>
            ))}
          </div>

          {/* Text */}
          <p
            className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10"
            style={{ fontFamily: "Inter" }}
          >
            "{active.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl ${active.packageColor} flex items-center justify-center text-black font-black text-sm shadow-lg`}
              style={{ fontFamily: "Rajdhani" }}
            >
              {active.initials}
            </div>
            <div>
              <p className="text-white font-bold text-sm" style={{ fontFamily: "Rajdhani" }}>
                {active.name}
              </p>
              <p className="text-zinc-600 text-xs">{active.role}</p>
            </div>
            <div className="ml-auto">
              <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <span className="text-amber-400 text-xs">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-zinc-700"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Row */}
        <div className="flex gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 p-3 rounded-2xl border transition-all duration-300 ${
                i === activeIndex
                  ? "border-amber-400/50 bg-amber-400/10"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg ${t.packageColor} flex items-center justify-center text-black text-xs font-black mx-auto mb-1`}
                style={{ fontFamily: "Rajdhani" }}
              >
                {t.initials}
              </div>
              <p className={`text-[9px] text-center truncate ${i === activeIndex ? "text-amber-400" : "text-zinc-600"}`}>
                {t.name}
              </p>
            </button>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-6 flex items-center justify-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4">
          <div className="text-center">
            <div
              className="text-3xl font-black text-amber-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              5.0
            </div>
            <div className="flex gap-0.5 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xs">★</span>
              ))}
            </div>
          </div>
          <div className="w-[1px] h-10 bg-zinc-800" />
          <div>
            <p className="text-white text-sm font-semibold" style={{ fontFamily: "Rajdhani" }}>
              200+ Değerlendirme
            </p>
            <p className="text-zinc-600 text-xs">Google & Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
