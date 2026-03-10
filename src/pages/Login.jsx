import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

function Input({ label, type = "text", placeholder, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState(params.get("email") || "");
  const [password, setPassword] = useState("");

  const emailNormalized = useMemo(() => email.trim().toLowerCase(), [email]);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!emailNormalized.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("projectAI_users") || "[]");
    const list = Array.isArray(users) ? users : [];

    const user = list.find((u) => u.email === emailNormalized);

    if (!user) {
      setError("No account found with this email.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }

    localStorage.setItem("projectAI_auth", emailNormalized);

    navigate("/dashboard/projects");
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-4 flex items-center justify-center">
      <div className="mx-auto my-10 w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_22px_60px_-20px_rgba(15,23,42,0.25)]">
        <div className="grid grid-cols-1 md:grid-cols-[440px_1fr]">
          <div className="bg-[linear-gradient(180deg,#185ED8_0%,#2E6FDB_40%,#6C9EE5_100%)] px-12 py-12 text-white flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15">
                AI
              </div>
              <span className="text-[26px] font-semibold tracking-tight text-white">
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

          <div className="px-12 py-12 flex flex-col justify-center">
            <h1 className="text-[34px] font-semibold tracking-tight text-slate-900 text-center">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm text-slate-600 text-center">
              Log in to your account
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}
              <Input
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="space-y-2">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm font-medium text-[#185ED8] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="
                  mt-2 w-full rounded-full bg-[#185ED8] px-5 py-3
                  text-sm font-semibold text-white shadow-sm hover:bg-[#1554C3]
                  focus:outline-none focus:ring-4 focus:ring-[#6C9EE5]/35
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
                className=" relative z-10
                  flex w-full items-center justify-center gap-3 rounded-full
                  border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800
                  hover:bg-slate-50
                "
              >
                <GoogleIcon />
                Continue with Google
              </button>

              <p className="pt-2 text-center text-sm text-slate-600">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[#185ED8] hover:underline"
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
