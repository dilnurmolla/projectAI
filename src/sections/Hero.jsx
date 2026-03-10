import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);

  function isValidEmail(value) {
    return value.includes("@") && value.includes(".");
  }

  function handleStart(e) {
    e.preventDefault();

    if (!normalizedEmail || !isValidEmail(normalizedEmail)) return;

    const users = JSON.parse(localStorage.getItem("projectAI_users") || "[]");
    const exists = Array.isArray(users) && users.includes(normalizedEmail);

    const target = exists ? "/login" : "/signup";
    navigate(`${target}?email=${encodeURIComponent(normalizedEmail)}`);
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-10 rounded-[32px] bg-[linear-gradient(180deg,#185ED8_0%,#2E6FDB_40%,#6C9EE5_100%)] p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
              <span className="h-2 w-2 rounded-full bg-white" />
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Pojenizi 30 Dakikada Yazmaya Hazır Mısınız?{" "}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              “AB, KOSGEB ve TÜBİTAK projelerinizi herhangi bir birimle ihtiyaç
              duymadan hazırlayın.”{" "}
            </p>

            <form
              onSubmit={handleStart}
              className="mt-7 flex flex-col gağ-3 sm:flex-row sm:items-center"
            >
              <div className="flex w-full items-center rounded-full bg-white px-3 py-2 shadow-sm sm:max-w-sm">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
                  placeholder="E-mail"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#185ED8] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1554C3]"
                >
                  Başlayalım
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:col-span-2 mt-2 rounded-2xl bg-white/10 px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-white/80"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
