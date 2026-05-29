const chapters = [
  {
    year: "2018",
    title: "Başlangıç",
    text: "Herkesin bir hikâyesi vardır, benim hikâyem ise 2018 yılında başladı. O dönem yalnızca 45 kiloydum ve fiziksel olarak kendimi yetersiz hissediyordum. Hayatımı değiştirmeye karar vererek ilk adımı evde, kendi imkânlarımla attım.",
  },
  {
    year: null,
    title: "Dönüşüm",
    text: "Daha sonra spor salonuna başladım ve zamanla sadece fiziksel görünüşüm değil, bakış açım da tamamen değişti. Zaman zaman ara vermek zorunda kalsam da sporu hiçbir zaman bırakmadım.",
  },
  {
    year: "2022",
    title: "Sahneye Çıkış",
    text: "Bir arkadaşımın yarışmasını izlemeye gittim ve ertesi gün hayatımı değiştirecek bir karar aldım: sahneye çıkmak. Aynı yıl KKTC'de düzenlenen yarışmada Junior Men's Physique kategorisinde 2.'lik elde ettim. İlk yarışmamda altyapı eksikliği ve definisyon sürecinde yaptığım bazı hatalara rağmen önemli bir deneyim kazandım.",
  },
  {
    year: null,
    title: "Ara & Geri Dönüş",
    text: "Yarışma sonrası askerlik nedeniyle yaklaşık iki yıl ara vermek zorunda kaldım. Şu anda ise yeniden aktif şekilde yarışma hazırlığı içerisindeyim.",
  },
];

const highlights = [
  { value: "2018", label: "Yolculuk Başladı" },
  { value: "2.", label: "KKTC Yarışması" },
  { value: "∞", label: "Disiplin & Azim" },
];

export default function Story() {
  return (
    <section id="story" className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-md mx-auto px-6 relative">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span
            className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ fontFamily: "Rajdhani" }}
          >
            Hikâyem
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <h2
          className="text-4xl font-black text-white tracking-wider text-center mb-2"
          style={{ fontFamily: "Bebas Neue" }}
        >
          BENİM HİKÂYEM
        </h2>
        <p className="text-zinc-500 text-sm text-center mb-8" style={{ fontFamily: "Inter" }}>
          Disiplin, azim ve sabırla yazılan bir yolculuk
        </p>

        {/* Profile Card */}
        <div className="relative rounded-3xl overflow-hidden mb-10 border border-zinc-800">
          <div
            className="h-48 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/images/ekren.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="relative -mt-16 px-6 pb-6">
            <div className="flex items-end gap-4 mb-4">
              <div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-3xl font-black text-black shadow-lg shadow-amber-500/30 border-4 border-zinc-950 flex-shrink-0"
                style={{ fontFamily: "Bebas Neue" }}
              >
                AE
              </div>
              <div className="pb-1">
                <h3
                  className="text-white text-3xl font-black tracking-wider leading-none"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  ALİ EKREN
                </h3>
                <p className="text-amber-400 text-sm font-semibold mt-1" style={{ fontFamily: "Rajdhani" }}>
                  Fitness Koçu & Yarışmacı
                </p>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed italic" style={{ fontFamily: "Inter" }}>
              "Disiplin, azim, sabır ve hırsın birleştiğinde insanın gerçek potansiyelini ortaya çıkarabileceğini öğretti."
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex gap-3 mb-10">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 text-center"
            >
              <div
                className="text-xl font-black text-amber-400"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {h.value}
              </div>
              <div
                className="text-zinc-500 text-[9px] uppercase tracking-wider mt-0.5"
                style={{ fontFamily: "Rajdhani" }}
              >
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-amber-400/60 via-amber-400/20 to-transparent" />

          <div className="space-y-8">
            {chapters.map((chapter, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-amber-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>

                <div className="bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800 rounded-2xl p-5 hover:border-amber-400/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {chapter.year && (
                      <span
                        className="px-2.5 py-0.5 bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs font-bold rounded-full tracking-wider"
                        style={{ fontFamily: "Rajdhani" }}
                      >
                        {chapter.year}
                      </span>
                    )}
                    <h4
                      className="text-white font-bold text-sm tracking-wide"
                      style={{ fontFamily: "Rajdhani" }}
                    >
                      {chapter.title}
                    </h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: "Inter" }}>
                    {chapter.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-10 relative rounded-3xl overflow-hidden border border-amber-400/20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/5" />
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[1px] flex-1 bg-amber-400/30" />
              <span className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-semibold" style={{ fontFamily: "Rajdhani" }}>
                Hedefim
              </span>
              <div className="h-[1px] flex-1 bg-amber-400/30" />
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed" style={{ fontFamily: "Inter" }}>
              Kendimi sürekli geliştirmeye çalışıyorum; kilo alma ve verme süreçleri, antrenman sistemleri, beslenme, psikoloji ve mental sağlık üzerine sürekli araştırıyor ve öğreniyorum. Hedefim sadece kendi fiziğimi geliştirmek değil, aynı zamanda insanların hayatına dokunarak onlara rehberlik etmek. Hem kendi potansiyelimi zorlamak hem de danışanlarımın en iyi versiyonlarına ulaşmalarını sağlamak için çalışıyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
