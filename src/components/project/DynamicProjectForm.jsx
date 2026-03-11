import React, { useState, useEffect } from "react";
import { FORM_SCHEMAS } from "../../data/formSchemas";
import { FormSectionRenderer } from "./FormSectionRenderer";

export function DynamicProjectForm({
    templateType,
    initialData = {},
    onSave,
    onNext,
}) {
    const schema = FORM_SCHEMAS[templateType];
    const draftKey = `projectAI_draft_${templateType}`;

    const [formData, setFormData] = useState(() => {
        try {
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft) return JSON.parse(savedDraft);
        } catch (e) { }
        return initialData;
    });

    // Auto-save effectively
    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            localStorage.setItem(draftKey, JSON.stringify(formData));
        }
    }, [formData, draftKey]);

    // If the templateType changes (e.g., user went back and selected a different template), reset the form data from saved draft or initialData
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        try {
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft) {
                setFormData(JSON.parse(savedDraft));
                return;
            }
        } catch (e) { }
        setFormData(initialData || {});
    }, [templateType, draftKey]);

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
        if (onNext) onNext(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="mb-2">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {schema.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{schema.description}</p>
            </div>

            {schema.sections?.map((section) => (
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
