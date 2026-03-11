import React from "react";
import { FieldRenderer } from "./FieldRenderer";

export function FormSectionRenderer({ section, formData, onChangeField }) {
    return (
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 border-b border-slate-100 pb-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {section.title}
                </h3>
                {section.description && (
                    <p className="mt-1 text-sm text-slate-500">{section.description}</p>
                )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {section.fields?.map((field) => (
                    <div
                        key={field.name}
                        className={`${field.type === "textarea" || field.type === "repeater"
                                ? "md:col-span-2"
                                : "col-span-1"
                            }`}
                    >
                        <FieldRenderer
                            field={field}
                            value={formData[field.name]}
                            onChange={(value) => onChangeField(field.name, value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
