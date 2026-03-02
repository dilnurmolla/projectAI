function Features() {
    const cards = new Array(6).fill(0).map((_, i) => ({
        title: "Lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        i,
    }));

    return (
        <section id="features">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                        Lorem ipsum dolor
                    </h2>
                    <p className="mt-3 text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((c) => (
                        <div key={c.i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-10 w-10 rounded-2xl bg-blue-600" />
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;