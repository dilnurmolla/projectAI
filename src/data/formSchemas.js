const applicantInfoSection = {
  id: "applicant_info",
  stepId: "company",
  title: "Başvuru Sahibi Bilgileri",
  fields: [
    { name: "applicantName", label: "Ad Soyad", type: "text", required: true },
    { name: "applicantEmail", label: "E-Posta", type: "email", required: true },
    { name: "applicantPhone", label: "Telefon", type: "tel", required: true },
  ],
};

export const COMMON_FORM_SECTIONS = [applicantInfoSection];

export const FORM_SCHEMAS = {
  startup_idea: {
    title: "TÜBİTAK 1512 (BiGG) Başvuru Formu",
    description:
      "Erken aşama teknoloji girişimi ve çekirdek sermaye başvurusu.",
    sections: [
      applicantInfoSection,
      {
        id: "applicant_extra",
        stepId: "company",
        title: "Ek Kurucu Bilgileri",
        fields: [
          {
            name: "egitimDurumu",
            label: "Eğitim Durumu",
            type: "select",
            options: ["Lisans", "Yüksek Lisans", "Doktora"],
            required: true,
          },
          {
            name: "mevcutSirketDurumu",
            label: "Mevcut Şirketiniz Var Mı?",
            type: "radio",
            options: ["Evet", "Hayır"],
            required: true,
          },
        ],
      },
      {
        id: "startup_summary",
        stepId: "solution",
        title: "Girişim Özeti",
        fields: [
          {
            name: "girisimAdi",
            label: "Girişim Adı",
            type: "text",
            required: true,
          },
          {
            name: "tekCumleOzet",
            label: "Tek Cümle Özet",
            type: "textarea",
            rows: 2,
            required: true,
          },
          {
            name: "urunAsamasi",
            label: "Ürün Aşaması",
            type: "select",
            options: ["Fikir", "Prototip", "MVP", "Pazarda"],
          },
          {
            name: "urunAciklamasi",
            label: "Ürün Açıklaması",
            type: "textarea",
            rows: 4,
            required: true,
          },
        ],
      },
      {
        id: "problem_solution",
        stepId: "problem",
        title: "Problem ve Çözüm",
        fields: [
          {
            name: "cozulenProblem",
            label: "Çözülen Problem",
            type: "textarea",
            rows: 4,
            required: true,
            helpText: "Müşterinin yaşadığı temel acı noktasını anlatın.",
          },
          {
            name: "hedefKullanici",
            label: "Hedef Kullanıcı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "onerilenCozum",
            label: "Önerilen Çözüm",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "nedenSimdi",
            label: "Neden Şimdi?",
            type: "textarea",
            rows: 2,
          },
        ],
      },
      {
        id: "innovation",
        stepId: "innovation",
        title: "Yenilik ve Fark",
        fields: [
          {
            name: "mevcutAlternatifler",
            label: "Mevcut Alternatifler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "rekabettenFark",
            label: "Rekabetten Farkınız",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "teknolojikYenilik",
            label: "Teknolojik Yenilik",
            type: "textarea",
            rows: 4,
            required: true,
            helpText:
              "Kullandığınız teknolojinin/algoritmanın özgünlüğü nedir?",
          },
        ],
      },
      {
        id: "market_business",
        stepId: "impact",
        title: "Pazar ve İş Modeli",
        fields: [
          {
            name: "hedefMusteri",
            label: "Hedef Müşteri Segmenti",
            type: "textarea",
            rows: 3,
          },
          {
            name: "gelirModeli",
            label: "Gelir Modeli",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "pazaraGirisStratejisi",
            label: "Pazara Giriş Stratejisi",
            type: "textarea",
            rows: 4,
          },
        ],
      },
      {
        id: "team_budget",
        stepId: "budget",
        title: "Ekip ve Bütçe",
        fields: [
          {
            name: "kurucuEkip",
            label: "Kurucu Ekip Üyeleri",
            type: "repeater",
            fields: [
              { name: "adSoyad", label: "Ad Soyad", type: "text" },
              { name: "rol", label: "Projedeki Rolü", type: "text" },
              { name: "profilLinki", label: "LinkedIn/Profil", type: "text" },
            ],
          },
          {
            name: "eksikRoller",
            label: "Eksik Roller",
            type: "textarea",
            rows: 2,
          },
          {
            name: "talepEdilenFinansman",
            label: "Talep Edilen Finansman (TL)",
            type: "number",
            required: true,
          },
        ],
      },
      {
        id: "roadmap",
        stepId: "risks",
        title: "Yol Haritası",
        fields: [
          {
            name: "kisaVadeYolHaritasi",
            label: "Kısa Vadeli Yol Haritası",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "temelRiskler",
            label: "Temel Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "riskAzaltmaPlani",
            label: "Risk Azaltma Planı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  entrepreneur_support: {
    title: "KOSGEB İleri Girişimci Başvurusu",
    description:
      "İşletme kuruluş, makine-teçhizat ve personel destek talepleri.",
    sections: [
      applicantInfoSection,
      {
        id: "company_info",
        stepId: "company",
        title: "Proje / İşletme Bilgileri",
        fields: [
          {
            name: "projeAdi",
            label: "Proje / Fikir Adı",
            type: "text",
            required: true,
          },
          {
            name: "sirketAdi",
            label: "Şirket Adı",
            type: "text",
            required: true,
          },
          { name: "kurulusTarihi", label: "Kuruluş Tarihi", type: "date" },
          {
            name: "sirketTuru",
            label: "Şirket Türü",
            type: "select",
            options: ["Şahıs", "Limited", "Anonim"],
          },
          {
            name: "naceKodu",
            label: "NACE Kodu",
            type: "text",
            required: true,
          },
          {
            name: "uygulamaSuresi",
            label: "Proje Uygulama Süresi (Ay)",
            type: "number",
            required: true,
          },
        ],
      },
      {
        id: "entrepreneur_profile",
        stepId: "problem",
        title: "İşletme Problemi ve Girişimci Profili",
        fields: [
          {
            name: "isletmeProblemi",
            label: "Çözülmek İstenen İşletme Problemi",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "destekIhtiyacGerekcesi",
            label: "Destek İhtiyacı Gerekçesi",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "kurucuSektorDeneyimi",
            label: "Sektör Deneyimi",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "business_model",
        stepId: "solution",
        title: "İş Modeli ve Pazar",
        fields: [
          {
            name: "urunHizmetTanimi",
            label: "Ürün/Hizmet Tanımı",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "hedefMusteri",
            label: "Hedef Müşteri",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "innovation_summary",
        stepId: "innovation",
        title: "Yenilik ve Katma Değer",
        fields: [
          {
            name: "yenilikciYonu",
            label: "Yenilikçi Yönü",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "rekabetAvantaji",
            label: "Rekabet Avantajı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "teknolojiKullanim",
            label: "Teknoloji Kullanımı (Varsa)",
            type: "textarea",
            rows: 3,
          },
          {
            name: "isSureciIyilestirme",
            label: "İş Süreci İyileştirme Etkisi",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "support_needs",
        stepId: "budget",
        title: "Destek İhtiyacı",
        fields: [
          {
            name: "talepEdilenDestekKalemleri",
            label: "Talep Edilen Destek Kalemleri",
            type: "repeater",
            fields: [
              { name: "kalemAdi", label: "Destek Kalem Adı", type: "text" },
              { name: "aciklama", label: "Açıklama / Gerekçe", type: "text" },
              { name: "adet", label: "Adet", type: "number" },
              { name: "birimFiyat", label: "Birim Fiyat (TL)", type: "number" },
              {
                name: "toplamTutar",
                label: "Toplam Tutar (TL)",
                type: "number",
              },
            ],
          },
          {
            name: "destekGerekcesi",
            label: "Destek Gerekçesi (Genel)",
            type: "textarea",
            rows: 4,
            required: true,
            helpText:
              "Bu destekler kapasitenizi veya kalitenizi nasıl artıracak?",
          },
          {
            name: "toplamDestekTalebi",
            label: "Toplam Destek Talebi (TL)",
            type: "number",
            required: true,
          },
        ],
      },
      {
        id: "growth_plan",
        stepId: "impact",
        title: "Büyüme Planı",
        fields: [
          {
            name: "istihdamPlani",
            label: "İstihdam Planı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "satisBeklentisi",
            label: "Satış Beklentisi",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "risk_management",
        stepId: "risks",
        title: "Riskler ve Önlemler",
        fields: [
          {
            name: "temelRiskler",
            label: "Temel Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "riskAzaltmaPlani",
            label: "Risk Azaltma Planı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  finance_acceleration: {
    title: "TTGV Yatırım / Araştırma Başvurusu",
    description: "Tematik hızlandırma, ticari doğrulama ve pilot çalışmalar.",
    sections: [
      applicantInfoSection,
      {
        id: "tech_summary",
        stepId: "solution",
        title: "Girişim ve Teknoloji Özeti",
        fields: [
          {
            name: "girisimAdi",
            label: "Girişim Adı",
            type: "text",
            required: true,
          },
          {
            name: "teknolojiAlani",
            label: "Teknoloji Alanı",
            type: "text",
            required: true,
          },
          {
            name: "cozumOzeti",
            label: "Çözüm Özeti",
            type: "textarea",
            rows: 4,
            required: true,
          },
        ],
      },
      {
        id: "team_market",
        stepId: "company",
        title: "Ekip ve Pazar",
        fields: [
          {
            name: "ekipBilgisi",
            label: "Kurucu ve Yönetici Ekip",
            type: "repeater",
            fields: [
              { name: "adSoyad", label: "Ad Soyad", type: "text" },
              { name: "rol", label: "Rol", type: "text" },
              { name: "deneyim", label: "Kısa Deneyim Özeti", type: "text" },
            ],
          },
          {
            name: "hedefPazarBuyuklugu",
            label: "Hedef Pazar Büyüklüğü (Sayısal veya Tanım)",
            type: "textarea",
            rows: 3,
            required: true,
          },
        ],
      },
      {
        id: "validation",
        stepId: "problem",
        title: "Müşteri ve Pilot Doğrulama",
        fields: [
          {
            name: "musteriProblemi",
            label: "Müşteri Problemi / İhtiyaç",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "pilotAnlasmaDurumu",
            label: "Mevcut Pilot/Devam Eden Anlaşma Durumu",
            type: "radio",
            options: ["Evet", "Hayır"],
          },
          {
            name: "ilkMusteriPlani",
            label: "İlk Müşteri Planı",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "mevcutDogrulama",
            label: "Ticari Doğrulama Metrikleri",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "innovation_edge",
        stepId: "innovation",
        title: "Yenilikçilik ve Rekabet Avantajı",
        fields: [
          {
            name: "teknolojikYenilik",
            label: "Teknolojik Yenilik",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "farklilastiriciFaktor",
            label: "Farklılaştırıcı Faktör",
            type: "textarea",
            rows: 3,
          },
          {
            name: "korunabilirlik",
            label: "Korunabilirlik (IP/Know-how)",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "growth_funding",
        stepId: "budget",
        title: "Büyüme ve Finansman İhtiyacı",
        fields: [
          {
            name: "gelirModeli",
            label: "Gelir Modeli",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "finansmanIhtiyaci",
            label: "Finansman İhtiyacı (TL)",
            type: "number",
            required: true,
          },
          {
            name: "fonNeredeKullanilacak",
            label: "Fon Kullanım Alanları",
            type: "textarea",
            rows: 4,
            required: true,
          },
        ],
      },
      {
        id: "risk_assumptions",
        stepId: "risks",
        title: "Riskler ve Varsayımlar",
        fields: [
          {
            name: "kritikVarsayimlar",
            label: "Kritik Varsayımlar",
            type: "textarea",
            rows: 3,
          },
          {
            name: "riskler",
            label: "Başlıca Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "olceklenmeRiski",
            label: "Ölçeklenme Riski",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "impact_growth",
        stepId: "impact",
        title: "Büyüme Etkisi ve Çıktılar",
        fields: [
          {
            name: "beklenenCikti",
            label: "Beklenen Çıktılar",
            type: "textarea",
            rows: 3,
          },
          {
            name: "pazarEtki",
            label: "Pazar/Ölçek Etkisi",
            type: "textarea",
            rows: 3,
          },
          {
            name: "ticarilesmeHedefi",
            label: "Ticarileşme Hedefi",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  regional_grant: {
    title: "Kalkınma Ajansı Proje Teklifi",
    description: "Bölgesel kapasite artırımı, istihdam ve altyapı hibesi.",
    sections: [
      applicantInfoSection,
      {
        id: "project_info",
        stepId: "company",
        title: "Proje Künyesi",
        fields: [
          {
            name: "projeAdi",
            label: "Proje Adı",
            type: "text",
            required: true,
          },
          {
            name: "projeSuresi",
            label: "Proje Süresi (Ay)",
            type: "number",
            required: true,
          },
          {
            name: "projeKoordinatoruAd",
            label: "Proje Koordinatörü Adı",
            type: "text",
            required: true,
          },
          {
            name: "projeKoordinatoruTel",
            label: "Proje Koordinatörü Tel",
            type: "tel",
            required: true,
          },
        ],
      },
      {
        id: "applicant_partners",
        stepId: "company",
        title: "Başvuru Sahibi ve Ortaklar",
        fields: [
          {
            name: "kurumAdi",
            label: "Kurum/Kuruluş Adı",
            type: "text",
            required: true,
          },
          {
            name: "kurumTuru",
            label: "Kurum Türü",
            type: "select",
            options: ["Kamu", "Üniversite", "STK", "KOBİ"],
          },
          {
            name: "projeOrtaklari",
            label: "Proje Ortakları",
            type: "repeater",
            fields: [
              { name: "ortakKurumAdi", label: "Ortak Kurum Adı", type: "text" },
              { name: "katkiTuru", label: "Projeye Katkı Türü", type: "text" },
              { name: "iletisimKisi", label: "İletişim Kişisi", type: "text" },
            ],
          },
        ],
      },
      {
        id: "project_reasoning",
        stepId: "problem",
        title: "Proje Gerekçesi ve Uyumu",
        fields: [
          {
            name: "sorunTanimi",
            label: "Bölgesel Sorun Tanımı",
            type: "textarea",
            rows: 5,
            required: true,
          },
          {
            name: "ihtiyacAnalizi",
            label: "İhtiyaç Analizi",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "oncelikUyumu",
            label: "Program Önceliklerine Uyum",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "hedefSorunKapsami",
            label: "Sorunun Kapsamı ve Etkilenen Alanlar",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "implementation_plan",
        stepId: "solution",
        title: "Uygulama Yaklaşımı",
        fields: [
          {
            name: "faaliyetPlani",
            label: "Ana Faaliyetler",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "zamanPlani",
            label: "Zamanlama ve Aşamalar",
            type: "textarea",
            rows: 3,
          },
          {
            name: "beklenenUrunler",
            label: "Beklenen Ürünler/Hizmetler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "uygulamaKapasitesi",
            label: "Uygulama Kapasitesi ve Kaynaklar",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "regional_innovation",
        stepId: "innovation",
        title: "Yenilikçi Yaklaşım ve Bölgesel Katma Değer",
        fields: [
          {
            name: "yenilikciYaklasim",
            label: "Yenilikçi Yaklaşım",
            type: "textarea",
            rows: 3,
          },
          {
            name: "bolgeselKatki",
            label: "Bölgesel Katkı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "yontemselFark",
            label: "Yöntemsel Fark ve Katma Değer",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "target_group",
        stepId: "impact",
        title: "Hedef Grup",
        fields: [
          {
            name: "dogrudanYararlanicilar",
            label: "Doğrudan Yararlanıcılar",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "nihaiYararlanicilar",
            label: "Nihai Yararlanıcılar",
            type: "textarea",
            rows: 3,
          },
          {
            name: "beklenenEtki",
            label: "Beklenen Etki",
            type: "textarea",
            rows: 3,
          },
          {
            name: "surdurulebilirlikPlani",
            label: "Sürdürülebilirlik Planı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "logframe_budget",
        stepId: "budget",
        title: "Sonuçlar ve Bütçe",
        fields: [
          {
            name: "beklenenSonuclar",
            label: "Beklenen Sonuçlar",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "toplamButce",
            label: "Toplam Bütçe (TL)",
            type: "number",
            required: true,
          },
          {
            name: "esFinansman",
            label: "Eş Finansman Tutarı (TL)",
            type: "number",
          },
          {
            name: "satinAlmaKalemleri",
            label: "Satın Alma Kalemleri",
            type: "repeater",
            fields: [
              { name: "kalemAdi", label: "Kalem Adı", type: "text" },
              { name: "tutar", label: "Tahmini Tutar (TL)", type: "number" },
            ],
          },
        ],
      },
      {
        id: "risk_management",
        stepId: "risks",
        title: "Riskler ve Önlemler",
        fields: [
          {
            name: "projeRiskleri",
            label: "Proje Riskleri",
            type: "textarea",
            rows: 3,
          },
          {
            name: "onleyiciTedbirler",
            label: "Önleyici Tedbirler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "idariFinansalRiskler",
            label: "İdari ve Finansal Riskler",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  social_impact: {
    title: "UNDP Sosyal Etki Başvurusu",
    description: "BM Sürdürülebilir Kalkınma Amaçları'na yönelik hibe formu.",
    sections: [
      applicantInfoSection,
      {
        id: "project_id",
        stepId: "company",
        title: "Proje Künyesi ve Bütçe",
        fields: [
          {
            name: "projeAdi",
            label: "Proje Adı",
            type: "text",
            required: true,
          },
          {
            name: "projeSuresi",
            label: "Proje Süresi (Ay)",
            type: "number",
            required: true,
          },
          {
            name: "toplamButce",
            label: "Toplam Hibe Talebi/Bütçe (TL)",
            type: "number",
            required: true,
          },
        ],
      },
      {
        id: "team_info",
        stepId: "company",
        title: "Proje Ekibi",
        fields: [
          {
            name: "ekipBilgisi",
            label: "Çekirdek Ekip",
            type: "repeater",
            fields: [
              { name: "adSoyad", label: "Ad Soyad", type: "text" },
              { name: "gorev", label: "Görevi", type: "text" },
            ],
          },
        ],
      },
      {
        id: "context",
        stepId: "problem",
        title: "Sorun ve Bağlam",
        fields: [
          {
            name: "sosyalCevreselSorun",
            label: "Sosyal veya Çevresel Sorun",
            type: "textarea",
            rows: 5,
            required: true,
          },
          {
            name: "problemKanitlari",
            label: "Problem Kanıtı / Veri Dayanağı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "intervention_plan",
        stepId: "solution",
        title: "Müdahale ve Faaliyet Planı",
        fields: [
          {
            name: "faaliyetOzeti",
            label: "Temel Faaliyetler",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "uygulamaYaklasimi",
            label: "Uygulama Yaklaşımı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "izlemeDegerlendirmePlani",
            label: "İzleme ve Değerlendirme Planı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "yerelOrtakliklar",
            label: "Yerel Ortaklıklar ve Paydaşlar",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "social_innovation",
        stepId: "innovation",
        title: "Sosyal Yenilik ve Fark",
        fields: [
          {
            name: "yenilikciYonu",
            label: "Yenilikçi Yönü",
            type: "textarea",
            rows: 3,
          },
          {
            name: "surdurulebilirlikModeli",
            label: "Sürdürülebilirlik Modeli",
            type: "textarea",
            rows: 3,
          },
          {
            name: "toplumsalDegisimYaklasimi",
            label: "Toplumsal Değişim Yaklaşımı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "beneficiaries_impact",
        stepId: "impact",
        title: "Hedef Kitle ve Etki",
        fields: [
          {
            name: "hedefYararlanicilar",
            label: "Hedef Yararlanıcı Grup",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "projeAmaci",
            label: "Projenin Amacı",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "etkiHedefi",
            label: "Etki Hedefi",
            type: "textarea",
            rows: 3,
          },
          {
            name: "etkiGostergeleri",
            label: "Etki Göstergeleri (KPI)",
            type: "repeater",
            fields: [
              { name: "gostergeAdi", label: "Gösterge Adı", type: "text" },
              { name: "hedefDeger", label: "Hedeflenen Değer", type: "text" },
              { name: "olcumYontemi", label: "Ölçüm Yöntemi", type: "text" },
              { name: "aciklama", label: "Açıklama", type: "text" },
            ],
          },
        ],
      },
      {
        id: "inclusion_sustainability",
        stepId: "impact",
        title: "Kapsayıcılık ve Sürdürülebilirlik",
        fields: [
          {
            name: "toplumsalCinsiyetYaklasimi",
            label: "Toplumsal Cinsiyet Eşitliği Yaklaşımı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "cevreselSurdurulebilirlik",
            label: "Çevresel Sürdürülebilirlik Planı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "uzunVadeliSurdurulebilirlik",
            label: "Uzun Vadeli Sürdürülebilirlik",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "budget_plan",
        stepId: "budget",
        title: "Bütçe ve Kaynak Planı",
        fields: [
          {
            name: "butceKalemleri",
            label: "Bütçe Kalemleri",
            type: "repeater",
            fields: [
              { name: "kalemAdi", label: "Kalem Adı", type: "text" },
              { name: "tutar", label: "Tutar (TL)", type: "number" },
              { name: "gerekce", label: "Gerekçe", type: "text" },
            ],
          },
          {
            name: "finansmanKaynagi",
            label: "Finansman Kaynağı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "esFinansman",
            label: "Eş Finansman / Katkı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "butceSurekliligi",
            label: "Bütçe Sürekliliği",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "risk_assessment",
        stepId: "risks",
        title: "Riskler ve Önlemler",
        fields: [
          {
            name: "temelRiskler",
            label: "Temel Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "azaltmaPlani",
            label: "Azaltma Planı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "toplulukErisimRiski",
            label: "Topluluk Erişimi Riski",
            type: "textarea",
            rows: 3,
          },
          {
            name: "kaynakRiski",
            label: "Kaynak ve Süreklilik Riski",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  rd_project: {
    title: "TÜBİTAK TEYDEB Ar-Ge Başvurusu",
    description:
      "Şirketlerin ölçülebilir sanayi Ar-Ge projeleri için teknik form.",
    sections: [
      applicantInfoSection,
      {
        id: "project_id",
        stepId: "company",
        title: "Firma ve Proje Künyesi",
        fields: [
          {
            name: "firmaUnvani",
            label: "Firma Ünvanı",
            type: "text",
            required: true,
          },
          {
            name: "genelFirmaProfili",
            label: "Genel Firma Profili",
            type: "textarea",
            rows: 3,
          },
          {
            name: "projeKoordinatoru",
            label: "Proje Yürütücüsü/Koordinatörü",
            type: "text",
            required: true,
          },
          {
            name: "projeAdi",
            label: "Proje Adı",
            type: "text",
            required: true,
          },
          {
            name: "teknolojiAlani",
            label: "Teknoloji Alanı",
            type: "text",
            required: true,
          },
          {
            name: "projeSuresi",
            label: "Proje Süresi (Ay)",
            type: "number",
            required: true,
          },
          {
            name: "projeOzeti",
            label: "Proje Özeti",
            type: "textarea",
            rows: 4,
            required: true,
          },
        ],
      },
      {
        id: "tech_problem_innovation",
        stepId: "problem",
        title: "Teknik Problem ve Yenilik Unsuru",
        fields: [
          {
            name: "teknikSorun",
            label: "Aşılmaya Çalışılan Teknik Sorun",
            type: "textarea",
            rows: 5,
            required: true,
          },
          {
            name: "mevcutCozumler",
            label: "Mevcut Çözümler ve Yetersizlikleri",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "teknikHedefler",
            label: "Teknik Hedefler",
            type: "textarea",
            rows: 4,
            required: true,
          },
        ],
      },
      {
        id: "innovation_summary",
        stepId: "innovation",
        title: "Yenilikçilik ve Farklılaşma",
        fields: [
          {
            name: "yenilikSeviyesi",
            label: "Projenin Yenilik Seviyesi",
            type: "textarea",
            rows: 4,
            required: true,
            helpText: "Firma içi yenilik mi, ulusal mı, global mi?",
          },
          {
            name: "yenilikVurgusu",
            label: "Yenilik Vurgusu",
            type: "textarea",
            rows: 3,
            required: true,
          },
          {
            name: "teknikFark",
            label: "Teknik Farklılaştırma Unsurları",
            type: "textarea",
            rows: 3,
          },
          {
            name: "fikriHaklar",
            label: "Fikri Haklar / Korunabilirlik",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "work_packages",
        stepId: "solution",
        title: "İş Paketleri Formati",
        fields: [
          {
            name: "isPaketleriTablosu",
            label: "İş Paketleri",
            type: "repeater",
            fields: [
              { name: "paketAdi", label: "İş Paketi Adı", type: "text" },
              { name: "amac", label: "Amacı", type: "text" },
              { name: "faaliyetler", label: "Temel Faaliyetler", type: "text" },
              { name: "ciktilar", label: "Beklenen Çıktılar", type: "text" },
              {
                name: "sorumluKisi",
                label: "Sorumlu Kişi/Bölüm",
                type: "text",
              },
              { name: "sure", label: "Süre (Ay)", type: "number" },
              { name: "basariKriteri", label: "Başarı Kriteri", type: "text" },
            ],
          },
        ],
      },
      {
        id: "budget_team",
        stepId: "budget",
        title: "Bütçe ve Ekip",
        fields: [
          {
            name: "personelButcesi",
            label: "Personel Bütçesi (TL)",
            type: "number",
          },
          {
            name: "malzemeButcesi",
            label: "Makine/Malzeme Bütçesi (TL)",
            type: "number",
          },
          {
            name: "teknikEkipTablosu",
            label: "Ar-Ge Teknik Ekip Listesi",
            type: "repeater",
            fields: [
              { name: "adSoyad", label: "Ad Soyad", type: "text" },
              { name: "uzmanlik", label: "Uzmanlık Alanı", type: "text" },
              {
                name: "projeyeAyrilanZaman",
                label: "Projeye Ayrılan Zaman (%)",
                type: "number",
              },
            ],
          },
        ],
      },
      {
        id: "risk_management",
        stepId: "risks",
        title: "Teknik Riskler ve Önlemler",
        fields: [
          {
            name: "teknikRiskler",
            label: "Teknik Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "takvimRiski",
            label: "Takvim ve Kaynak Riskleri",
            type: "textarea",
            rows: 3,
          },
          {
            name: "onlemPlani",
            label: "Önlem Planı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "project_outputs",
        stepId: "impact",
        title: "Beklenen Çıktılar ve Etki",
        fields: [
          {
            name: "beklenenTeknikCikti",
            label: "Beklenen Teknik Çıktılar",
            type: "textarea",
            rows: 3,
          },
          {
            name: "dogrulamaKriterleri",
            label: "Doğrulama / Başarı Kriterleri",
            type: "textarea",
            rows: 3,
          },
          {
            name: "ticariEtki",
            label: "Ticarileşme / Sektörel Etki",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
  incubation: {
    title: "Teknopark (TGB) Kuluçka Başvurusu",
    description: "Hızlandırıcı, ofis tahsisi ve vergi muafiyeti başvurusu.",
    sections: [
      applicantInfoSection,
      {
        id: "incubation_summary",
        stepId: "solution",
        title: "Girişim ve Teknoloji Özeti",
        fields: [
          {
            name: "girisimAdi",
            label: "Girişim Adı",
            type: "text",
            required: true,
          },
          {
            name: "mevcutSirketDurumu",
            label: "Şirketleşme Durumu",
            type: "select",
            options: [
              "Şirket Kuruldu",
              "Kuruluş Aşamasında",
              "Fikir Aşamasında",
            ],
          },
          {
            name: "urunHizmetOzeti",
            label: "Ürün/Hizmet Özeti",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "teknolojiAlani",
            label: "Teknoloji Alanı / Ar-Ge Niteliği",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "gelirModeli",
            label: "Gelir Modeli / İş Modeli",
            type: "textarea",
            rows: 3,
            required: true,
          },
        ],
      },
      {
        id: "problem_need",
        stepId: "problem",
        title: "Problem ve İhtiyaç",
        fields: [
          {
            name: "cozulenProblem",
            label: "Çözmek İstediğiniz Problem",
            type: "textarea",
            rows: 4,
            required: true,
          },
          {
            name: "pazarAcisi",
            label: "Pazarın Acı Noktası",
            type: "textarea",
            rows: 3,
          },
          {
            name: "hedefKitle",
            label: "Hedef Kitle",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "innovation_focus",
        stepId: "innovation",
        title: "Yenilik ve Ar-Ge Odağı",
        fields: [
          {
            name: "teknolojikYenilik",
            label: "Teknolojik Yenilik",
            type: "textarea",
            rows: 3,
          },
          {
            name: "arGeNiteligi",
            label: "Ar-Ge Niteliği",
            type: "textarea",
            rows: 3,
          },
          {
            name: "teknoparkUyumu",
            label: "Teknopark Uyumu",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "resource_plan",
        stepId: "budget",
        title: "Kaynak ve Bütçe İhtiyacı",
        fields: [
          {
            name: "finansmanIhtiyaci",
            label: "Finansman İhtiyacı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "harcamaKalemleri",
            label: "Ana Harcama Kalemleri",
            type: "textarea",
            rows: 3,
          },
          {
            name: "altyapiIhtiyaci",
            label: "Altyapı / Ofis İhtiyacı",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "risk_factors",
        stepId: "risks",
        title: "Riskler ve Önlemler",
        fields: [
          {
            name: "riskler",
            label: "Başlıca Riskler",
            type: "textarea",
            rows: 3,
          },
          {
            name: "erkenAsamaRiskleri",
            label: "Erken Aşama Riskleri",
            type: "textarea",
            rows: 3,
          },
          {
            name: "riskOnlemleri",
            label: "Öngörülen Önlemler",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "growth_impact",
        stepId: "impact",
        title: "Büyüme ve Program Etkisi",
        fields: [
          {
            name: "kuluckaKatkisi",
            label: "Kuluçka Programı Katkısı",
            type: "textarea",
            rows: 3,
          },
          {
            name: "programCiktiHedefi",
            label: "Program Çıktı Hedefi",
            type: "textarea",
            rows: 3,
          },
          {
            name: "olceklenmeHedefi",
            label: "Ölçeklenme Hedefi",
            type: "textarea",
            rows: 3,
          },
        ],
      },
      {
        id: "team_needs",
        stepId: "company",
        title: "Ekip ve İhtiyaç Analizi",
        fields: [
          {
            name: "ekipBilgisi",
            label: "Kurucu ve Teknik Ekip",
            type: "repeater",
            fields: [
              { name: "adSoyad", label: "Ad Soyad", type: "text" },
              { name: "rol", label: "Projedeki Rol", type: "text" },
            ],
          },
          {
            name: "ofisIhtiyaci",
            label: "Ofis / Masa İhtiyacı Durumu",
            type: "select",
            options: [
              "Açık Ofis",
              "2-4 Kişilik Kapalı Ofis",
              "5+ Kişilik Kapalı Ofis",
              "Sanal Ofis / Sadece Adres",
              "Emin Değilim",
            ],
          },
          {
            name: "nedenBuTeknopark",
            label: "Neden Bu Teknoparkı Seçiyorsunuz?",
            type: "textarea",
            rows: 3,
          },
          {
            name: "programUyumu",
            label: "Programla Uyum",
            type: "textarea",
            rows: 3,
          },
        ],
      },
    ],
  },
};
