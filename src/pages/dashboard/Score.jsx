export default function Score() {
  const items = [
    { label: "Program Uyumu", value: 72 },
    { label: "Çağrı Kriterleri", value: 58 },
    { label: "Problem Tanımı", value: 64 },
    { label: "Çözüm", value: 61 },
    { label: "Yenilikçilik", value: 55 },
    { label: "Bütçe Tutarlılığı", value: 49 },
    { label: "Risk Yönetimi", value: 52 },
    { label: "Yaygın Etki", value: 60 },
  ];

  const overall = Math.round(
    items.reduce((acc, x) => acc + x.value, 0) / items.length,
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Puan Analizi
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Projenizin çağrı kriterlerine göre genel uyum skorunu ve adım
              bazlı kırılımı görün.
            </p>
          </div>

          <div className="rounded-2xl bg-[#EFF5FF] px-5 py-4 text-center">
            <div className="text-xs font-semibold text-[#185ED8]">
              Genel Skor
            </div>
            <div className="mt-1 text-3xl font-semibold text-slate-900">
              {overall}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Adım Bazlı Skor
          </h3>
          <span className="text-xs text-slate-500">0–100</span>
        </div>

        <div className="mt-5 space-y-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="grid grid-cols-[180px_1fr_50px] items-center gap-4"
            >
              <div className="text-sm font-medium text-slate-700">
                {it.label}
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${it.value}%`,
                    background:
                      "linear-gradient(90deg, rgba(24,94,216,1) 0%, rgba(108,158,229,1) 100%)",
                  }}
                />
              </div>

              <div className="text-sm font-semibold text-slate-900 text-right">
                {it.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-sm font-semibold text-slate-900">AI Önerisi</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            En hızlı skor artışı için önce <b>Bütçe Tutarlılığı</b> ve{" "}
            <b>Yenilikçilik</b> adımlarını güçlendirin. “Geliştir” ile bu iki
            bölüm için teknik ve metrik odaklı revizyon önerileri alabilirsiniz.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#185ED8] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1554C3]">
              Bütçeyi Geliştir
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Yenilikçiliği Geliştir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
