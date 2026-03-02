function HowItWorks() {
    const steps = [
        { k: "01", t: "Lorem ipsum", d: "Lorem ipsum dolor sit amet." },
        { k: "02", t: "Lorem ipsum", d: "Consectetur adipiscing elit." },
        { k: "03", t: "Lorem ipsum", d: "Sed do eiusmod tempor." },
    ];

    return (
        <section id="how" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900">How it works</h2>
                    <p className="mt-3 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.k} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#1B5CFF]/30">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold text-slate-500">{s.k}</p>
                                <div className="h-10 w-10 rounded-2xl bg-blue-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.t}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;