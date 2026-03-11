import React from "react";

export function AiPanel({ stepLabel, templateType }) {
  const getTips = () => {
    switch (templateType) {
      case "startup_idea":
        return [
          "• Yenilikçi yönü donanım/yazılım düzeyinde somut bir örnekle vurgulayın.",
          "• Hedef pazarınızı olabildiğince dar (niche) ve net tanımlayın.",
          "• Çözülen problemi yatırımcının / hakemin anlayabileceği dilde basitleştirin.",
        ];
      case "entrepreneur_support":
        return [
          "• Talep edilen makine ve yazılım giderlerinin kapasiteyi/ciroyu nasıl artıracağını belirtin.",
          "• İşletme profilinizi 'kurumsal vizyon' ekseninde ticari başarı odaklı öne çıkarın.",
          "• Gelir modelinizdeki başabaş (break-even) noktanızı vurgulayın.",
        ];
      case "regional_grant":
        return [
          "• Projenin bölgesel istihdama (kadın, genç) doğrudan katkısını belirtin.",
          "• Bütçedeki ana ekipmanların yerel kapasiteye çarpan etkisini netleştirin.",
          "• Hibe sonrasında sürdürülebilirlik senaryolarını detaylandırın.",
        ];
      case "social_impact":
        return [
          "• Sosyal sorunun güçlü verilere, raporlara ve istatistiklere dayandığını vurgulayın.",
          "• Etki göstergelerinizin (KPI) sahada nasıl ölçüleceğini belirginleştirin.",
          "• Kapsayıcılık ilkelerine (ör: dezavantajlı gruplar, Sürdürülebilir Kalkınma Amaçları) atıf yapın.",
        ];
      case "rd_project":
        return [
          "• Mevcut teknolojilerin projenizdeki problemi çözmekte neden yetersiz kaldığını vurgulayın.",
          "• Ar-Ge metodolojisini (Tasarım -> Prototip -> Test) somut iş paketlerine bölün.",
          "• Başarı ve test doğrulama kriterlerinin tamamen sayısallaştırılabilir olduğuna emin olun.",
        ];
      case "finance_acceleration":
        return [
          "• Müşteri veya pilot (PoC) anlaşmalarındaki başarı ölçütlerini sayısal olarak sunun.",
          "• Ölçeklenmenin önündeki asıl engeli (sermaye, pazarlama vs) açıkça belirtip aşma planı sunun.",
          "• Finansmanın şirketin büyüme hızına kaç kat ivme katacağını kanıtlayın.",
        ];
      case "incubation":
        return [
          "• Mentorlük, network ve ofis ihtiyacının girişiminizin çekirdek gelişimine somut etkisini anlatın.",
          "• Ekibin teknik eksikliklerini teknopark ekosistemiyle nasıl kapatmayı hedeflediğini belirtin.",
          "• Varsa akademik/üniversite işbirliklerine dair potansiyeli öne çıkarın.",
        ];
      default:
        return [
          "• Formu doldurmaya başlamadan önce uygun bir program şablonu seçtiğinizden emin olun.",
          "• Bu panelde, seçtiğiniz programa özel stratejik yazım önerileri listelenecektir.",
          "• İpuçlarını uygulayarak onay sürecinden başarıyla geçme şansınızı artırabilirsiniz.",
        ];
    }
  };

  const getToneText = () => {
    switch (templateType) {
      case "startup_idea":
        return "Yatırımcı İknası + Vizyon Odaklı";
      case "rd_project":
        return "Ar-Ge Disiplini + Teknik Kavramlar";
      case "social_impact":
        return "Toplumsal Etki + Kapsayıcılık Dili";
      case "entrepreneur_support":
        return "Ticari Pragmatizm + Pazarlama Dili";
      case "regional_grant":
        return "Kurumsal Proje Yönetimi Formasyonu";
      case "finance_acceleration":
        return "Büyüme + Metrik/KPI Odaklılık";
      default:
        return "Genel Formal Türkçe Standartları";
    }
  };

  const tips = getTips();
  const tone = getToneText();

  return (
    <div className="sticky top-6 space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">
            {templateType ? "Programa Özel İpuçları" : "AI Asistanı"}
          </div>
          <span className="rounded-full bg-[#EFF5FF] px-3 py-1 text-xs font-semibold text-[#185ED8]">
            {stepLabel || "Aktif"}
          </span>
        </div>

        <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
          {tips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <button
        disabled={!templateType}
        className="w-full rounded-3xl bg-[#1B5CFF] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1554C3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Metinleri İyileştir {templateType ? "✨" : ""}
      </button>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">
          Otomatik Yazım Tonu
        </div>
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 border border-slate-100">
          <div>
            <div className="text-sm font-medium text-[#1B5CFF]">
              {templateType ? "Aktif Ton" : "Standart Ton"}
            </div>
            <div className="text-xs font-medium text-slate-600 mt-0.5">
              {tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
