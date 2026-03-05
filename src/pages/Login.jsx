import { Link } from "react-router-dom";

function Input({ label, type = "text", placeholder }) {
    return (
        <label className="block">
            <span className="mb-2 block text-xs font-medium text-slate-700">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="
          w-full rounded-full border border-slate-300 bg-white
          px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400
          outline-none transition
          focus:border-brand focus:ring-4 focus:ring-brand/20
        "
            />
        </label>
    );
}

export default function Login() {
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10">
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
                <div className="grid md:grid-cols-2">

                    <div className="bg-gradient-to-b from-brand-from to-brand-to px-10 py-10 text-white">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15">

                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-95">
                                    <path d="M9 21h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M10 17h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 3a7 7 0 0 0-4 12c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2a7 7 0 0 0-4-12Z"
                                        stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold tracking-tight">ProjectAI</span>
                        </div>

                        <p className="mt-6 max-w-sm text-sm text-white/85">
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>

                        <ul className="mt-8 space-y-3 text-sm text-white/90">
                            <li className="flex gap-2">
                                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/80" />
                                Sed do eiusmod tempor incididunt ut.
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/80" />
                                Ut enim ad minim veniam, quis.
                            </li>
                        </ul>
                    </div>

                    {/* Sağ form */}
                    <div className="px-10 py-10">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome Back!</h1>
                        <p className="mt-2 text-sm text-slate-600">Log in to your account</p>

                        <form className="mt-8 space-y-5">
                            <Input label="Email" placeholder="you@example.com" />
                            <div className="space-y-2">
                                <Input label="Password" type="password" placeholder="Enter your password" />
                                <div className="text-right">
                                    <button type="button" className="text-sm font-medium text-brand hover:underline">
                                        Forgot password?
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="
                  mt-2 w-full rounded-full bg-brand px-5 py-3
                  text-sm font-semibold text-white shadow-sm
                  hover:bg-brand-hover
                  focus:outline-none focus:ring-4 focus:ring-brand/25
                "
                            >
                                Log In
                            </button>

                            <div className="flex items-center gap-4 pt-1">
                                <div className="h-px flex-1 bg-slate-200" />
                                <span className="text-xs text-slate-500">Or log in with</span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <button
                                type="button"
                                className="
                  flex w-full items-center justify-center gap-2 rounded-full
                  border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800
                  hover:bg-slate-50
                "
                            >
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full">
                                    G
                                </span>
                                Continue with Google
                            </button>

                            <button
                                type="button"
                                className="
                  w-full rounded-full border border-slate-300 bg-white px-5 py-3
                  text-sm font-medium text-slate-800 hover:bg-slate-50
                "
                            >
                                Send Magic Link
                            </button>

                            <p className="pt-2 text-center text-sm text-slate-600">
                                Don’t have an account?{" "}
                                <Link to="/signup" className="font-semibold text-brand hover:underline">
                                    Sign up.
                                </Link>
                            </p>

                            <p className="pt-2 text-center">
                                <Link to="/" className="text-xs text-slate-500 hover:text-slate-700">
                                    ← Back to home
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

