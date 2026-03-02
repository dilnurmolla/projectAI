function Hero() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
                <div className="grid items-center gap-10 rounded-[32px] bg-[linear-gradient(180deg,#185ED8_0%,#2E6FDB_40%,#6C9EE5_100%)] p-8 shadow-sm md:grid-cols-2 md:p-12">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                            <span className="h-2 w-2 rounded-full bg-white" />
                            Lorem ipsum dolor sit amet
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>

                        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="flex w-full items-center rounded-full bg-white px-3 py-2 shadow-sm sm:max-w-sm">
                                <input
                                    className="w-full bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
                                    placeholder="name@company.com"
                                />
                                <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                                    Get Started
                                </button>
                            </div>

                            <button className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                                Watch demo
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-white/70">
                            Lorem ipsum dolor sit amet — <span className="font-medium text-white">no credit card</span>.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white/95 p-4 shadow-lg ring-1 ring-white/20">
                        <div className="rounded-2xl bg-white p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">AI Output</p>
                                    <p className="mt-1 text-sm font-semibold">Lorem Proposal Draft</p>
                                </div>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                    Preview
                                </span>
                            </div>

                            <div className="mt-4 space-y-3">
                                <div className="h-3 w-11/12 rounded bg-slate-100" />
                                <div className="h-3 w-10/12 rounded bg-slate-100" />
                                <div className="h-3 w-9/12 rounded bg-slate-100" />

                                <div className="pt-3">
                                    <div className="h-3 w-6/12 rounded bg-slate-100" />
                                    <div className="mt-3 h-20 rounded-xl bg-slate-100" />
                                </div>

                                <div className="pt-3">
                                    <div className="h-3 w-5/12 rounded bg-slate-100" />
                                    <div className="mt-3 grid grid-cols-2 gap-3">
                                        <div className="h-16 rounded-xl bg-slate-100" />
                                        <div className="h-16 rounded-xl bg-slate-100" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 flex gap-2">
                                <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700">
                                    Export
                                </button>
                                <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-2 rounded-2xl bg-white/10 px-6 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-4 text-white/80">
                            <span className="text-xs font-medium">Logoipsum</span>
                            <span className="text-xs font-medium">Logoipsum</span>
                            <span className="text-xs font-medium">Logoipsum</span>
                            <span className="text-xs font-medium">Logoipsum</span>
                            <span className="text-xs font-medium">Logoipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;