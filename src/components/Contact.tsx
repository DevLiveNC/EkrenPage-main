import { useState } from "react";

// const FORMSUBMIT_ID = "870a4418ace55e592464d200189d0c88";
const FORMSUBMIT_ID = "snkirmiziyuzyasar61@gmail.com";

type FormData = {
  name: string;
  phone: string;
  goal: string;
  package: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  goal: "",
  package: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submittedForm, setSubmittedForm] = useState<FormData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [attempted, setAttempted] = useState(false);

  const goals = ["Kilo Vermek", "Kas Kazanmak", "Fit Kalmak", "Sporcu Performansı"];
  const pkgs = ["STARTER", "PRO", "ELITE", "Bilmiyorum"];

  const fields = [
    { key: "name" as const, filled: form.name.trim() !== "" },
    { key: "phone" as const, filled: form.phone.trim() !== "" },
    { key: "goal" as const, filled: form.goal !== "" },
    { key: "package" as const, filled: form.package !== "" },
  ];

  const isFormComplete = fields.every((f) => f.filled);
  const progress = Math.round((fields.filter((f) => f.filled).length / fields.length) * 100);

  const fieldError = (filled: boolean) =>
    attempted && !filled ? "border-red-500/50 focus:border-red-500/50" : "border-zinc-800 focus:border-amber-400/50";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    setError("");

    if (!isFormComplete) {
      setError("Lütfen yıldızlı (*) tüm alanları doldurun.");
      return;
    }

    setSending(true);

    const details = [
      `Ad Soyad: ${form.name.trim()}`,
      `Telefon: ${form.phone.trim()}`,
      `Hedef: ${form.goal}`,
      `Paket: ${form.package}`,
      `Mesaj: ${form.message.trim() || "Belirtilmedi"}`,
    ].join("\n");

    const body = new URLSearchParams({
      _subject: "EkrenFit - Yeni Ücretsiz Danışmanlık Talebi",
      _template: "table",
      _captcha: "false",
      name: form.name.trim(),
      phone: form.phone.trim(),
      goal: form.goal,
      package: form.package,
      message: details,
    });

    try {
      const response = await fetch(`https://formsubmit.co/${FORMSUBMIT_ID}`, {
        // const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: body.toString(),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Gönderim başarısız");
      }

      setSubmittedForm({ ...form });
      setSubmitted(true);
    } catch {
      setError("Gönderilemedi. Lütfen tekrar deneyin veya WhatsApp üzerinden ulaşın.");
    } finally {
      setSending(false);
    }
  };

  if (submitted && submittedForm) {
    return (
      <section id="contact" className="relative py-20 bg-zinc-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="max-w-md mx-auto px-6 relative">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xl shadow-amber-500/30 animate-[pulse_2s_ease-in-out_1]">
              ✓
            </div>
            <h2
              className="text-4xl font-black text-white tracking-wider mb-3"
              style={{ fontFamily: "Bebas Neue" }}
            >
              TALEBİN ALINDI!
            </h2>
            <p className="text-zinc-400 text-base" style={{ fontFamily: "Inter" }}>
              Bilgilerin bize ulaştı. En kısa sürede seninle iletişime geçeceğiz.{" "}
              <span className="text-amber-400">Dönüşüm yolculuğuna hazır ol!</span>
            </p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 mb-6 space-y-3">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4" style={{ fontFamily: "Rajdhani" }}>
              Gönderilen Bilgiler
            </p>
            {[
              { label: "Ad Soyad", value: submittedForm.name },
              { label: "Telefon", value: submittedForm.phone },
              { label: "Hedef", value: submittedForm.goal },
              { label: "Paket", value: submittedForm.package },
              { label: "Mesaj", value: submittedForm.message || "—" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between gap-4 text-sm border-b border-zinc-800/60 pb-2 last:border-0 last:pb-0">
                <span className="text-zinc-500 shrink-0" style={{ fontFamily: "Rajdhani" }}>{row.label}</span>
                <span className="text-white text-right font-medium" style={{ fontFamily: "Inter" }}>{row.value}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/905488889905"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            Acil mi? WhatsApp ile Ulaş
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-md mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold" style={{ fontFamily: "Rajdhani" }}>
            İletişim
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <h2 className="text-4xl font-black text-white tracking-wider text-center mb-2" style={{ fontFamily: "Bebas Neue" }}>
          ÜCRETSİZ DANIŞMANLIK
        </h2>
        <p className="text-zinc-500 text-sm text-center mb-6" style={{ fontFamily: "Inter" }}>
          Formu doldur, sana en kısa sürede dönüş yapalım.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-500 text-xs" style={{ fontFamily: "Rajdhani" }}>Form tamamlanma</span>
            <span className="text-amber-400 text-xs font-bold" style={{ fontFamily: "Rajdhani" }}>%{progress}</span>
          </div>
          <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <a
            href="https://wa.me/905488889905"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/the_ekrenn"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
            style={{ fontFamily: "Rajdhani" }}
          >
            Instagram
          </a>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] flex-1 bg-zinc-800" />
          <span className="text-zinc-600 text-xs">veya form doldur</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Rajdhani" }}>
              Ad Soyad *
            </label>
            <input
              type="text"
              placeholder="Adın ve soyadın"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors ${fieldError(form.name.trim() !== "")}`}
              style={{ fontFamily: "Inter" }}
            />
          </div>

          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Rajdhani" }}>
              Telefon *
            </label>
            <input
              type="tel"
              placeholder="05XX XXX XX XX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`w-full bg-zinc-900 border text-white placeholder-zinc-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors ${fieldError(form.phone.trim() !== "")}`}
              style={{ fontFamily: "Inter" }}
            />
          </div>

          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Rajdhani" }}>
              Hedefin *
            </label>
            <div className={`grid grid-cols-2 gap-2 rounded-2xl p-1 transition-colors ${attempted && !form.goal ? "ring-1 ring-red-500/40" : ""}`}>
              {goals.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setForm({ ...form, goal })}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    form.goal === goal
                      ? "bg-amber-400/20 border-amber-400 text-amber-400 scale-[1.02]"
                      : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                  }`}
                  style={{ fontFamily: "Rajdhani" }}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Rajdhani" }}>
              İlgilendiğin Paket *
            </label>
            <div className={`grid grid-cols-4 gap-2 rounded-2xl p-1 transition-colors ${attempted && !form.package ? "ring-1 ring-red-500/40" : ""}`}>
              {pkgs.map((pkg) => (
                <button
                  key={pkg}
                  type="button"
                  onClick={() => setForm({ ...form, package: pkg })}
                  className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    form.package === pkg
                      ? "bg-amber-400/20 border-amber-400 text-amber-400 scale-[1.02]"
                      : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                  }`}
                  style={{ fontFamily: "Rajdhani" }}
                >
                  {pkg}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Rajdhani" }}>
              Mesajın <span className="text-zinc-600 normal-case">(opsiyonel)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Kendini kısaca tanıt, hedeflerini paylaş..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-amber-400/50 transition-colors resize-none"
              style={{ fontFamily: "Inter" }}
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/25 rounded-2xl px-4 py-3">
              <span className="text-red-400 text-lg leading-none mt-0.5">!</span>
              <p className="text-red-400 text-sm" style={{ fontFamily: "Inter" }}>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-base rounded-2xl tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all mt-2 disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 flex items-center justify-center gap-2"
            style={{ fontFamily: "Rajdhani" }}
          >
            {sending ? (
              <>
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                GÖNDERİLİYOR...
              </>
            ) : (
              "ÜCRETSİZ DANIŞMANLIK TALEP ET →"
            )}
          </button>

          <p className="text-center text-zinc-600 text-xs" style={{ fontFamily: "Inter" }}>
            Bilgilerin yalnızca danışmanlık için kullanılır.
          </p>
        </form>
      </div>
    </section>
  );
}
