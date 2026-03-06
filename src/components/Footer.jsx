function Footer() {
    return (
        <footer className="border-t border-slate-200/60 bg-blue-600">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white">© {new Date().getFullYear()} ProjectAI</p>

                <div className="flex gap-6 text-sm text-white">
                    <a className="hover:text-slate-900" href="#features">
                        Lorem
                    </a>
                    <a className="hover:text-slate-900" href="#how">
                        Ipsum
                    </a>
                    <a className="hover:text-slate-900" href="#faq">
                        Dolor
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;