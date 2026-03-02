function UseCases() {
    const items = [
        { title: "Lorem", desc: "Ipsum dolor sit" },
        { title: "Lorem", desc: "Consectetur elit" },
        { title: "Lorem", desc: "Sed do eiusmod" },
        { title: "Lorem", desc: "Tempor incididunt" },
    ];

    return (
        <section className="border-y border-slate-200/60 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                    Where it fits
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((x, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#1B5CFF]/30">
                            <div className="mt-1 h-10 w-10 rounded-2xl bg-blue-600" />
                            <div>
                                <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{x.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UseCases;