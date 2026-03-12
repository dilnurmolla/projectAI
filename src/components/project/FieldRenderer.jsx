import React from "react";

export function FieldRenderer({ field, value, onChange }) {
  const { type, label, placeholder, required, options, helpText, rows } = field;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {(type === "text" || type === "email" || type === "tel") && (
        <input
          type={type}
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
            <option value="" disabled>
              Seçiniz...
            </option>
            {options?.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
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

      {type === "repeater" && (
        <div className="mt-2 space-y-4">
          {(value || []).map((row, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-4 pt-10"
            >
              <button
                type="button"
                onClick={() => {
                  const newArr = [...(value || [])];
                  newArr.splice(idx, 1);
                  onChange(newArr);
                }}
                className="absolute right-3 top-3 rounded-lg p-1.5 text-red-500 transition hover:bg-red-50 hover:text-red-700"
                title="Satırı Sil"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {field.fields?.map((subField) => (
                  <div
                    key={subField.name}
                    className={`${subField.type === "textarea" ? "md:col-span-2" : ""}`}
                  >
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">
                      {subField.label}
                    </label>
                    {subField.type === "textarea" ? (
                      <textarea
                        rows={subField.rows || 2}
                        value={row[subField.name] || ""}
                        onChange={(e) => {
                          const newArr = [...(value || [])];
                          newArr[idx] = {
                            ...newArr[idx],
                            [subField.name]: e.target.value,
                          };
                          onChange(newArr);
                        }}
                        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                      />
                    ) : (
                      <input
                        type={subField.type === "number" ? "number" : "text"}
                        value={row[subField.name] || ""}
                        onChange={(e) => {
                          const newArr = [...(value || [])];
                          newArr[idx] = {
                            ...newArr[idx],
                            [subField.name]: e.target.value,
                          };
                          onChange(newArr);
                        }}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const newArr = [...(value || []), {}];
              onChange(newArr);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-[#1B5CFF] transition hover:border-[#1B5CFF] hover:bg-[#EFF5FF]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Yeni Satır Ekle
          </button>
        </div>
      )}

      {helpText && (
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          {helpText}
        </p>
      )}
    </div>
  );
}
