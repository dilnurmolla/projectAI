import React from "react";

export function FieldRenderer({ field, value, onChange }) {
    const { type, label, placeholder, required, options, helpText, rows } = field;

    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {type === "text" && (
                <input
                    type="text"
                    placeholder={placeholder || ""}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                />
            )}

            {type === "number" && (
                <input
                    type="number"
                    placeholder={placeholder || ""}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                />
            )}

            {type === "date" && (
                <input
                    type="date"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                />
            )}

            {type === "textarea" && (
                <textarea
                    rows={rows || 3}
                    placeholder={placeholder || ""}
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                />
            )}

            {type === "select" && (
                <div className="relative">
                    <select
                        value={value || ""}
                        onChange={(e) => onChange(e.target.value)}
                        required={required}
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                    >
                        <option value="" disabled>Seçiniz...</option>
                        {options?.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            )}

            {type === "radio" && (
                <div className="flex flex-wrap gap-4 mt-1">
                    {options?.map((opt, i) => (
                        <label key={i} className="flex cursor-pointer items-center gap-2">
                            <input
                                type="radio"
                                name={field.name}
                                value={opt}
                                checked={value === opt}
                                onChange={(e) => onChange(e.target.value)}
                                required={required}
                                className="h-4 w-4 border-slate-300 text-[#1B5CFF] focus:ring-[#1B5CFF]"
                            />
                            <span className="text-sm text-slate-700">{opt}</span>
                        </label>
                    ))}
                </div>
            )}

            {helpText && (
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{helpText}</p>
            )}
        </div>
    );
}
