function FAQ() {
    const faqs = [
        { q: "Lorem ipsum dolor?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { q: "Lorem ipsum dolor?", a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { q: "Lorem ipsum dolor?", a: "Ut enim ad minim veniam, quis nostrud exercitation." },
        { q: "Lorem ipsum dolor?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
    ];

    return (
        <section id="faq">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
                    <p className="mt-3 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="mx-auto mt-10 max-w-3xl space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:shadow-lg hover:border-[#1B5CFF]/30">
                            <p className="text-sm font-semibold text-slate-900">{f.q}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                        </div>
                    ))}
                </div>

                <div id="pricing" className="mt-12 flex justify-center">
                    <button className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FAQ;