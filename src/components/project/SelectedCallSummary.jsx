export function SelectedCallSummary({ selectedCall }) {
    if (!selectedCall) return null;

    return (
        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-lg font-bold text-slate-900 border-b border-blue-200/60 pb-3 mb-4 flex items-center gap-2">
                <span className="text-[#1B5CFF]">Seçilen Çağrı:</span> {selectedCall.title}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h5 className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Neden Uygun?
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {selectedCall.eligibilitySummary}
                    </p>
                </div>

                <div>
                    <h5 className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Formda Neler Değişecek?
                    </h5>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2 list-disc pl-4 marker:text-blue-300">
                        {selectedCall.nextStepEffects?.map((effect, i) => (
                            <li key={i}>{effect}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-5 bg-white rounded-2xl p-4 border border-blue-100 flex gap-3 text-sm">
                <div className="text-amber-500 shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <span className="font-semibold text-slate-800 block mb-1">AI Seçim Tavsiyesi</span>
                    <span className="text-slate-600 leading-relaxed">{selectedCall.recommendationHint}</span>
                </div>
            </div>
        </div>
    );
}
