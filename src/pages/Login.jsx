import { Link } from "react-router-dom";

function Input({ label, type = "text", placeholder }) {
    return (
        <label className="block">
            <span className="mb-2 block text-[11px] font-medium text-slate-700">
                {label}
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className="
          w-full rounded-full border border-slate-300 bg-white
          px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400
          outline-none transition
          hover:border-[#1B5CFF]
          focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20
          focus:outline-none focus-visible:outline-none
        "
            />
        </label>
    );
}

function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303C33.67 32.657 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.999 6.053 29.711 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.999 6.053 29.711 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
                fill="#4CAF50"
                d="M24 44c5.602 0 10.775-2.146 14.657-5.657l-6.759-5.72C29.93 34.117 27.115 35 24 35c-5.202 0-9.636-3.317-11.28-7.946l-6.52 5.025C9.503 39.556 16.227 44 24 44z"
            />
            <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a11.96 11.96 0 0 1-4.01 5.623l.003-.002 6.759 5.72C37.599 39.982 44 35 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
        </svg>
    );
}

export default function Login() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] px-4 py-10">
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_22px_60px_-20px_rgba(15,23,42,0.25)]">
                <div className="grid grid-cols-1 md:grid-cols-[440px_1fr]">
                    {/* LEFT BLUE PANEL */}
                    <div className="bg-[#1B5CFF] px-12 py-12 text-white flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="opacity-95"
                                >
                                    <path
                                        d="M9 21h6"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10 17h4"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12 3a7 7 0 0 0-4 12c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2a7 7 0 0 0-4-12Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-[26px] font-semibold tracking-tight">
                                ProjectAI
                            </span>
                        </div>

                        <p className="mt-6 max-w-sm text-sm text-white/85">
                            Lorem ipsum dolor sit amet, consectetur.
                        </p>

                        <ul className="mt-10 space-y-3 text-sm text-white/90">
                            <li className="flex gap-3">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/80" />
                                Sed do eiusmod tempor incididunt ut.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/80" />
                                Ut enim ad minim veniam, quis.
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="px-12 py-12 flex flex-col justify-center">
                        <h1 className="text-[34px] font-semibold tracking-tight text-slate-900 text-center">
                            Welcome Back!
                        </h1>
                        <p className="mt-2 text-sm text-slate-600 text-center">
                            Log in to your account
                        </p>

                        <form className="mt-10 space-y-5">
                            <Input label="Email" placeholder="you@example.com" />
                            <div className="space-y-2">
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="text-sm font-medium text-[#1B5CFF] hover:underline"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="
                  mt-2 w-full rounded-full bg-[#1B5CFF] px-5 py-3
                  text-sm font-semibold text-white shadow-[0_10px_25px_-15px_rgba(27,92,255,0.9)]
                  hover:bg-[#174EE0]
                  focus:outline-none focus:ring-4 focus:ring-[#1B5CFF]/25
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
                  flex w-full items-center justify-center gap-3 rounded-full
                  border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800
                  hover:bg-slate-50
                "
                            >
                                <GoogleIcon />
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
                                <Link
                                    to="/signup"
                                    className="font-semibold text-[#1B5CFF] hover:underline"
                                >
                                    Sign up.
                                </Link>
                            </p>

                            <p className="pt-2 text-center">
                                <Link
                                    to="/"
                                    className="text-xs text-slate-500 hover:text-slate-700"
                                >
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