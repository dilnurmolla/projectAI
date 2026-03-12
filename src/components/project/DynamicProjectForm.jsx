import React, { useState, useEffect } from "react";
import { COMMON_FORM_SECTIONS, FORM_SCHEMAS } from "../../data/formSchemas";
import { FormSectionRenderer } from "./FormSectionRenderer";

export function DynamicProjectForm({
    templateType,
    selectedCallId,
    activeStepId,
    initialData = {},
    onSave,
    onNext,
    onBack,
}) {
    const schema = FORM_SCHEMAS[templateType];
    const draftKey = `projectAI_draft_${templateType}_${selectedCallId || 'default'}`;

    const [formData, setFormData] = useState(() => {
        try {
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft) return JSON.parse(savedDraft);
        } catch {
            localStorage.removeItem(draftKey);
        }
        return initialData;
    });

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            localStorage.setItem(draftKey, JSON.stringify(formData));
        }
    }, [formData, draftKey]);

    if (!schema) {
        return (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-600">
                Seçilen şablon bulunamadı ({templateType}). Lütfen geçerli bir program
                seçin.
            </div>
        );
    }

    const handleChangeField = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveDraft = () => {
        localStorage.setItem(draftKey, JSON.stringify(formData));
        if (onSave) onSave(formData);
        alert("Taslağınız başarıyla kaydedildi!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem(draftKey);
        if (onNext) onNext(formData, selectedCallId);
    };

    const templateSections = schema.sections || [];
    const mergedSections = [...COMMON_FORM_SECTIONS, ...templateSections].filter(
        (section, index, allSections) =>
            allSections.findIndex((item) => item.id === section.id) === index,
    );
    const visibleSections = mergedSections.filter(
        (section) => section.stepId === activeStepId,
    );
    const hasVisibleSections = visibleSections && visibleSections.length > 0;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2 pb-5 border-b border-slate-100">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {schema.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{schema.description}</p>
                </div>
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                    >
                        Geri (Çağrıya Dön)
                    </button>
                )}
            </div>

            {!hasVisibleSections && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                    Bu adım için gösterilecek form bölümü bulunamadı.
                </div>
            )}

            {hasVisibleSections &&
                visibleSections.map((section) => (
                    <FormSectionRenderer
                        key={section.id}
                        section={section}
                        formData={formData}
                        onChangeField={handleChangeField}
                    />
                ))}

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-6">
                <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                    Taslağı Ortak Alana Kaydet
                </button>
                <button
                    type="submit"
                    className="rounded-full bg-[#1B5CFF] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1554C3] focus:ring-4 focus:ring-[#1B5CFF]/30"
                >
                    İleri (Bölüm 3)
                </button>
            </div>
        </form>
    );
}
