import React, { useState } from "react";
import { CALL_TEMPLATES } from "../../data/callTemplates";
import { CallFilterBar } from "./CallFilterBar";
import { CallCard } from "./CallCard";
import { SelectedCallSummary } from "./SelectedCallSummary";
import { CallAiPanel } from "./CallAiPanel";

export function CallSelectionView({ templateType, initialCallId, onNext, onBack }) {
    const templateData = CALL_TEMPLATES[templateType];
    const filters = templateData?.filters || [];
    const allCalls = templateData?.calls || [];

    const [activeFilter, setActiveFilter] = useState(filters.length > 0 ? filters[0] : "Hepsi");
    const [selectedCallId, setSelectedCallId] = useState(initialCallId || null);

    const handleSuggestCall = () => {
        if (allCalls.length > 0) {
            const recommended = allCalls.find(c => c.tags.includes("Popüler")) || allCalls[0];
            setSelectedCallId(recommended.id);
            setActiveFilter("Hepsi");
        }
    };

    const handleSelectCall = (call) => {
        setSelectedCallId(call.id);
    };

    const visibleCalls = activeFilter === "Hepsi"
        ? allCalls
        : allCalls.filter((c) => c.matchingRules?.includes(activeFilter));

    const selectedCallData = allCalls.find(c => c.id === selectedCallId);

    if (!templateData) {
        return (
            <div className="flex h-96 flex-col items-center justify-center space-y-4">
                <p className="text-slate-500">Bu programa ait özel alt çağrı bulunamadı.</p>
                <div className="flex gap-4">
                    <button onClick={onBack} className="rounded-xl px-4 py-2 text-slate-600 border border-slate-200">Geri</button>
                    <button onClick={() => onNext(null)} className="rounded-xl bg-blue-600 px-4 py-2 text-white">Forma Geç</button>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 xl:flex-row p-4 pb-20">
            <div className="flex-1 space-y-8 animate-in fade-in duration-500">
                <div className="pb-4 border-b border-slate-100">
                    <span className="text-sm font-semibold text-[#185ED8] uppercase tracking-wider mb-2 block">
                        Adım 3
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Çağrı Seçimi
                    </h2>
                    <p className="mt-3 text-base text-slate-500 leading-relaxed max-w-2xl">
                        Seçtiğiniz programa uygun alt çağrıyı belirleyin. Bu seçim, form adımlarını ve AI önerilerini özelleştirir.
                    </p>
                </div>

                <CallFilterBar
                    filters={filters}
                    activeFilter={activeFilter}
                    onSelectFilter={setActiveFilter}
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {visibleCalls.map(call => (
                        <CallCard
                            key={call.id}
                            call={call}
                            isSelected={selectedCallId === call.id}
                            onClick={handleSelectCall}
                        />
                    ))}
                </div>

                {visibleCalls.length === 0 && (
                    <div className="py-10 text-center text-slate-500 border border-dashed rounded-3xl">
                        Bu filtreye uygun bir çağrı bulunamadı.
                    </div>
                )}

                <SelectedCallSummary selectedCall={selectedCallData} />

                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-10">
                    <button
                        onClick={onBack}
                        className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        Geri
                    </button>
                    <button
                        onClick={() => onNext(selectedCallData)}
                        disabled={!selectedCallId}
                        className={`rounded-xl px-8 py-3 font-semibold text-white shadow-sm transition ${selectedCallId ? "bg-[#185ED8] hover:bg-[#1554C3]" : "bg-slate-300 cursor-not-allowed"}`}
                    >
                        Bu Çağrıyla Devam Et
                    </button>
                </div>

            </div>

            <div className="w-full xl:w-80 shrink-0">
                <CallAiPanel templateType={templateType} onSuggestCall={handleSuggestCall} />
            </div>
        </div>
    );
}
