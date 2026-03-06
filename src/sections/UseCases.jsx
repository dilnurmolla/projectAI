function UseCases() {
    const bars = [
        { label: "KOSGEB", value: 65, accent: false },
        { label: "TÜBİTAK", value: 45, accent: true },
        { label: "AB", value: 80, accent: false },
        { label: "T.PARK", value: 70, accent: false },
        { label: "K.AJANSI", value: 70, accent: false },
    ];

    return (
        <section className="border-y border-slate-200/60 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16">
                {/* Title */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Hibe ve Destek Başvurularında{" "}
                        <p> <span className="text-[#1B5CFF]">Yeni Nesil Çözüm</span></p>
                    </h2>
                </div>

                {/* Content */}
                <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        {/* Pill */}
                        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1B5CFF] text-sm font-semibold text-white">
                                1
                            </span>
                            <span className="text-sm font-medium text-slate-400">
                                Gerçek Analizler
                            </span>
                        </div>

                        <h3 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">
                            Red Riskini Azaltan Akıllı <br className="hidden sm:block" />
                            Proje Yazım Deneyimi
                        </h3>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                            Başvuru kriterlerini analiz eden yapay zeka destekli sistemimiz
                            sayesinde projelerinizi eksiksiz, stratejik ve değerlendirme
                            ölçütlerine uyumlu şekilde hazırlayın.
                        </p>

                        <button className="mt-10 rounded-full bg-[#1B5CFF] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-18px_rgba(27,92,255,0.9)] hover:bg-[#174EE0]">
                            Daha Fazlası
                        </button>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_22px_60px_-20px_rgba(15,23,42,0.25)]">
                        <h4 className="text-xl font-semibold text-slate-700">
                            Platformu Kullanarak Hibe <br /> Alımlarının Analizi
                        </h4>

                        {/* Chart */}
                        <div className="mt-10">
                            <div className="grid grid-cols-5 items-end gap-4">
                                {bars.map((b) => (
                                    <div key={b.label} className="flex flex-col items-center gap-2">
                                        <div className="text-sm font-semibold text-[#1B5CFF]">
                                            %{b.value}
                                        </div>

                                        {/* bar container */}
                                        <div className="relative h-44 w-12 overflow-hidden rounded-xl bg-slate-100">
                                            {/* fill */}
                                            <div
                                                className="absolute bottom-0 left-0 w-full rounded-xl"
                                                style={{
                                                    height: `${b.value}%`,
                                                    background: b.accent
                                                        ? "linear-gradient(to top, rgba(27,92,255,1), rgba(27,92,255,0.15))"
                                                        : "linear-gradient(to top, rgba(27,92,255,0.35), rgba(27,92,255,0.10))",
                                                }}
                                            />
                                        </div>

                                        <div className="text-xs font-medium text-slate-700">
                                            {b.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UseCases;