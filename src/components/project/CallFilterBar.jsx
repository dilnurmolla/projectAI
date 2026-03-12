export function CallFilterBar({ filters, activeFilter, onSelectFilter }) {
    if (!filters || filters.length === 0) return null;

    return (
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-2">
                Filtrele:
            </span>
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${activeFilter === filter
                        ? "bg-[#1B5CFF] text-white shadow-sm ring-2 ring-[#1B5CFF]/30"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
