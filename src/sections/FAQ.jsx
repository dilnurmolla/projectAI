import { Link } from "react-router-dom";

function FAQ() {
  const faqs = [
    {
      q: "1",
      a: "İlk adımda program ve çağrı seçimi yapılır. Ardından işletme veya proje bilgilerinizi girmeniz istenir. Akıllı form yapısı sayesinde her bölüm size özel sorularla ilerler ve yapay zeka destekli sistem, verdiğiniz cevapları profesyonel proje diline dönüştürür.",
    },
    {
      q: "2",
      a: "Projenizin yenilikçi yönü, bütçe planlaması, risk analizi ve yaygın etki bölümleri otomatik olarak yapılandırılır ve çağrı kriterlerine göre optimize edilir. Sistem aynı zamanda eksik veya zayıf görülen alanlar için öneriler sunar.",
    },
    {
      q: "3",
      a: "Tüm adımlar tamamlandığında projenizi düzenleyebilir, uyum skorunu görüntüleyebilir ve çıktınızı indirerek başvuru sürecinizi güvenle tamamlayabilirsiniz.",
    },
  ];

  return (
    <section id="faq">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Kolay ve Hızlı Kullanımıyla Projenizi Hazırlayın
          </h2>
          <p className="mt-3 text-slate-600">
            Başvuru yapmak istediğiniz hibe veya destek programını seçin,
            bilgilerinizi girin ve yapay zeka destekli sistemle projenizi
            dakikalar içinde profesyonel bir şekilde hazırlayın.
          </p>
        </div>
        <div id="pricing" className="mt-6 flex justify-center">
          <Link
            to="/signup"
            className="rounded-full bg-[#185ED8] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1554C3]"
          >
            Projenizi Şimdi Oluşturun
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:shadow-lg hover:border-[#1B5CFF]/30"
            >
              <div className="flex items-start gap-4">
                <span
                  className="
      mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center
      rounded-full bg-[#1B5CFF] text-xs font-semibold text-white
      shadow-[0_8px_20px_-12px_rgba(27,92,255,0.9)]
    "
                >
                  {f.q}
                </span>

                <p className="text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
