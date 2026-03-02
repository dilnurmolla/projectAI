function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-slate-900" />
                    <span className="text-sm font-semibold tracking-tight">ProjectAI</span>
                </div>

                <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
                    <a className="hover:text-slate-900" href="#features">
                        Lorem
                    </a>
                    <a className="hover:text-slate-900" href="#how">
                        Ipsum
                    </a>
                    <a className="hover:text-slate-900" href="#faq">
                        Dolor
                    </a>
                    <a className="hover:text-slate-900" href="#pricing">
                        Sit
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <button className="hidden rounded-full px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:inline-flex">
                        Login
                    </button>

                    <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                        Free Trial
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;