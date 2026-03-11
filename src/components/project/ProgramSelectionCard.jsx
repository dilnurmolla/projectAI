import React from "react";

export function ProgramSelectionCard({ prog, isSelected, onSelect }) {
    return (
        <div
            onClick={onSelect}
            className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${isSelected
                    ? "border-[#1B5CFF] bg-[#F4F7FF] shadow-[0_0_0_1px_#1B5CFF]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
        >
            <div className="flex items-start justify-between">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${prog.color} shadow-sm transition-transform group-hover:scale-110`}
                >
                    {prog.icon}
                </div>
                {prog.badge && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-600 uppercase">
                        {prog.badge}
                    </span>
                )}
            </div>

            <div className="mt-4">
                <h3
                    className={`font-semibold ${isSelected ? "text-[#1B5CFF]" : "text-slate-900"
                        }`}
                >
                    {prog.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {prog.desc}
                </p>
            </div>

            {isSelected && (
                <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B5CFF] text-white shadow-sm ring-2 ring-white">
                    <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}
