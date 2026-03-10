function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_22px_60px_-20px_rgba(15,23,42,0.25)]">
            <div className="rounded-3xl bg-[#F6F9FF] p-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Toplam Hazırlanan <br /> Proje
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-slate-900">
                    128
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Başvuruya Dönüşen
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-slate-900">
                    104
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Destek Alan Proje
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-slate-900">
                    61
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-slate-500">
                    Başarı Oranı
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-slate-900">
                    %58,6
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-blue-100 bg-[#EFF5FF] px-5 py-4">
                  <span className="text-sm font-semibold text-[#1B5CFF]">
                    Sektör ortalaması
                  </span>
                  <span className="text-xl font-semibold text-[#1B5CFF]">
                    %32
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-blue-100 bg-[#EFF5FF] px-5 py-4">
                  <span className="text-sm font-semibold text-[#1B5CFF]">
                    Platform kullanıcı ortalaması
                  </span>
                  <span className="text-xl font-semibold text-[#1B5CFF]">
                    %54
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1B5CFF] text-sm font-semibold text-white">
                2
              </span>
              <span className="text-sm font-medium text-slate-400">
                Performans İstatistikleri
              </span>
            </div>

            <h3 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">
              Genel Başvuru Performansı
            </h3>

            <div className="mt-6 space-y-6 text-slate-600">
              <p className="leading-relaxed">
                Kullanıcı projelerinin başvuru sürecindeki ilerleyişini; başvuru
                sayısı, değerlendirme aşaması, kabul oranı ve elde edilen fon
                tutarı gibi temel performans göstergeleri üzerinden detaylı
                biçimde analiz edin.
              </p>

              <p className="leading-relaxed">
                Platform tarafından sunulan sayısal veriler sayesinde
                projelerinizin hangi aşamada güçlendiğini, hangi bölümlerde
                iyileştirmeye ihtiyaç duyduğunu ve fon kazanım performansının
                zaman içindeki değişimini net bir şekilde takip edebilirsiniz.
              </p>

              <p className="leading-relaxed">
                Bu veri odaklı yaklaşım, stratejik kararlar almanızı ve
                gelecekteki başvurularınızda başarı oranınızı artırmanızı
                sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
