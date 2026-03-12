export function CallCard({ call, isSelected, onClick }) {
    return (
        <div
            onClick={() => onClick(call)}
            className={`group relative cursor-pointer overflow-hidden rounded-3xl border p-5 transition-all ${isSelected
                ? "border-[#1B5CFF] bg-[#EFF5FF]/30 shadow-md ring-1 ring-[#1B5CFF]"
                : "border-slate-200 bg-white hover:border-[#1B5CFF]/40 hover:shadow-sm"
                }`}
        >
            <div className="mb-3 flex flex-wrap gap-2">
                {call.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-[#1B5CFF] transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <h3
                        className={`text-base font-bold tracking-tight transition-colors ${isSelected ? "text-[#185ED8]" : "text-slate-900 group-hover:text-[#185ED8]"
                            }`}
                    >
                        {call.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">
                        {call.shortDescription}
                    </p>
                </div>
            </div>

            {isSelected && (
                <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B5CFF] text-white shadow-sm">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}
