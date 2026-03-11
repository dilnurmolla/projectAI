import React from "react";

export function TemplateIntroCard({ prog, onContinue, onBack }) {
    if (!prog) return null;
    const { introInfo } = prog;

    return (
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${prog.color} shadow-sm mb-4`}>
                    {prog.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {prog.name} Şablonu
                </h2>
                <p className="mt-2 text-sm text-slate-500 max-w-md">
                    {prog.desc}
                </p>
            </div>

            <div className="mt-8 space-y-6 rounded-2xl bg-slate-50 p-6">
                <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <svg className="h-4 w-4 text-[#1B5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Kimler / Hangi Projeler İçin Uygun?
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {introInfo?.suitableFor || "Belirtilmemiş."}
                    </p>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <svg className="h-4 w-4 text-[#1B5CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Bu Formda Hangi Bilgiler İsteniyor?
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {introInfo?.whatToFill || "Özel şablon soruları yer alacaktır."}
                    </p>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                            <svg className="h-4 w-4 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Tahmini Doldurma Süresi
                        </h4>
                        <div className="mt-1 text-sm font-medium text-slate-700">
                            {introInfo?.estimatedMinutes ? `Yaklaşık ~${introInfo.estimatedMinutes} Dakika` : "Bilinmiyor"}
                        </div>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 animate-pulse">
                            <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Gerekebilecek Belgeler
                        </h4>
                        <div className="mt-1 text-sm text-slate-600 text-right">
                            {introInfo?.requiredDocs || "Gerekli ek belge bulunmuyor."}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                    Geri Dön
                </button>
                <button
                    onClick={onContinue}
                    className="rounded-full bg-[#1B5CFF] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1554C3] focus:ring-4 focus:ring-[#1B5CFF]/30"
                >
                    Bu Şablonla Devam Et (Adım 2)
                </button>
            </div>
        </div>
    );
}
