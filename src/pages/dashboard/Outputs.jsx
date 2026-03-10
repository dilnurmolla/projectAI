export default function Outputs() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Çıktılarım</h2>
          <p className="mt-1 text-sm text-slate-600">
            PDF / Word çıktılarınızı burada görürsünüz.
          </p>
        </div>

        <button className="rounded-full bg-[#185ED8] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1554C3]">
          Yeni çıktı oluştur
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
        Henüz çıktı yok. Bir proje oluşturup “Çıktı al” dediğinizde burada
        listelenecek.
      </div>
    </div>
  );
}
