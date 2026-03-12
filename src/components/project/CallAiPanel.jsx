import React, { useState } from "react";
import { CALL_SELECTION_CONTENT } from "../../data/callSelectionContent";

export function CallAiPanel({ templateType, onSuggestCall }) {
    const [mode, setMode] = useState("Hızlı Öner");
    const content = CALL_SELECTION_CONTENT[templateType] || { tips: ["Bu program için henüz özel öneriler girilmedi, ancak sistem genel seçim algoritmalarıyla asistanlık etmeye devam edecektir."] };

    const modes = [
        "Hızlı Öner",
        "Kurallara Göre Filtrele",
        "Detaylı Karşılaştır",
        "Emin Değilim, AI Seçsin"
    ];

    return (
        <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">
                        AI Seçim Asistanı
                    </div>
                    <span className="rounded-full bg-[#EFF5FF] px-3 py-1 text-xs font-semibold text-[#185ED8]">
                        Adım 3
                    </span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    {content.tips.map((tip, idx) => (
                        <li key={idx} className="leading-relaxed">
                            • {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={onSuggestCall}
                className="w-full flex justify-center items-center gap-2 rounded-3xl bg-[#1B5CFF] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1554C3]"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Uygun Çağrıyı Öner ✨
            </button>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900 mb-3">AI Seçim Modu</div>
                <div className="space-y-2">
                    {modes.map((m) => (
                        <label key={m} className={`flex cursor-pointer items-center gap-3 rounded-xl p-3 border transition-colors ${mode === m ? "border-[#1B5CFF] bg-[#EFF5FF]/50" : "border-slate-100 hover:bg-slate-50"}`}>
                            <input
                                type="radio"
                                name="aimode"
                                checked={mode === m}
                                onChange={() => setMode(m)}
                                className="h-4 w-4 border-slate-300 text-[#1B5CFF] focus:ring-[#1B5CFF]"
                            />
                            <span className={`text-sm ${mode === m ? "font-medium text-[#185ED8]" : "text-slate-600"}`}>
                                {m}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
