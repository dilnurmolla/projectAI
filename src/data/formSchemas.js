export const FORM_SCHEMAS = {
    startup_idea: {
        title: "TÜBİTAK 1512 (BiGG) Başvuru Formu",
        description: "Erken aşama teknoloji girişimi ve çekirdek sermaye başvurusu.",
        sections: [
            {
                id: "applicant_info",
                title: "Başvuru Sahibi",
                fields: [
                    { name: "adSoyad", label: "Ad Soyad", type: "text", required: true },
                    { name: "email", label: "E-Posta", type: "text", required: true },
                    { name: "telefon", label: "Telefon", type: "text", required: true },
                    { name: "egitimDurumu", label: "Eğitim Durumu", type: "select", options: ["Lisans", "Yüksek Lisans", "Doktora"], required: true },
                    { name: "mevcutSirketVarMi", label: "Mevcut Şirketiniz Var Mı?", type: "radio", options: ["Evet", "Hayır"], required: true }
                ]
            },
            {
                id: "startup_summary",
                title: "Girişim Özeti",
                fields: [
                    { name: "girisimAdi", label: "Girişim Adı", type: "text", required: true },
                    { name: "tekCumleOzet", label: "Tek Cümle Özet", type: "textarea", rows: 2, required: true },
                    { name: "urunAsamasi", label: "Ürün Aşaması", type: "select", options: ["Fikir", "Prototip", "MVP", "Pazarda"] },
                    { name: "urunAciklamasi", label: "Ürün Açıklaması", type: "textarea", rows: 4, required: true }
                ]
            },
            {
                id: "problem_solution",
                title: "Problem ve Çözüm",
                fields: [
                    { name: "cozulenProblem", label: "Çözülen Problem", type: "textarea", rows: 4, required: true, helpText: "Müşterinin yaşadığı temel acı noktasını anlatın." },
                    { name: "hedefKullanici", label: "Hedef Kullanıcı", type: "textarea", rows: 3 },
                    { name: "onerilenCozum", label: "Önerilen Çözüm", type: "textarea", rows: 4, required: true },
                    { name: "nedenSimdi", label: "Neden Şimdi?", type: "textarea", rows: 2 }
                ]
            },
            {
                id: "innovation",
                title: "Yenilik ve Fark",
                fields: [
                    { name: "mevcutAlternatifler", label: "Mevcut Alternatifler", type: "textarea", rows: 3 },
                    { name: "rekabettenFark", label: "Rekabetten Farkınız", type: "textarea", rows: 4, required: true },
                    { name: "teknolojikYenilik", label: "Teknolojik Yenilik", type: "textarea", rows: 4, required: true, helpText: "Kullandığınız teknolojinin/algoritmanın özgünlüğü nedir?" }
                ]
            },
            {
                id: "market_business",
                title: "Pazar ve İş Modeli",
                fields: [
                    { name: "hedefMusteri", label: "Hedef Müşteri Segmenti", type: "textarea", rows: 3 },
                    { name: "gelirModeli", label: "Gelir Modeli", type: "textarea", rows: 3, required: true },
                    { name: "pazaraGirisStratejisi", label: "Pazara Giriş Stratejisi", type: "textarea", rows: 4 }
                ]
            },
            {
                id: "team",
                title: "Ekip",
                fields: [
                    { name: "kurucuEkip", label: "Kurucu Ekip", type: "textarea", rows: 4, required: true },
                    { name: "eksikRoller", label: "Eksik Roller", type: "textarea", rows: 2 }
                ]
            },
            {
                id: "roadmap",
                title: "Yol Haritası",
                fields: [
                    { name: "ilk6AyPlan", label: "İlk 6 Aylık Plan", type: "textarea", rows: 4, required: true }
                ]
            }
        ]
    },
    entrepreneur_support: {
        title: "KOSGEB İleri Girişimci Başvurusu",
        description: "İşletme kuruluş, makine-teçhizat ve personel destek talepleri.",
        sections: [
            {
                id: "company_info",
                title: "İşletme Bilgileri",
                fields: [
                    { name: "sirketAdi", label: "Şirket Adı", type: "text", required: true },
                    { name: "kurulusTarihi", label: "Kuruluş Tarihi", type: "date" },
                    { name: "sirketTuru", label: "Şirket Türü", type: "select", options: ["Şahıs", "Limited", "Anonim"] },
                    { name: "naceKodu", label: "NACE Kodu", type: "text", required: true }
                ]
            },
            {
                id: "entrepreneur_profile",
                title: "Girişimci Profili",
                fields: [
                    { name: "kurucuAdi", label: "Kurucu Adı", type: "text", required: true },
                    { name: "deneyim", label: "Sektör Deneyimi", type: "textarea", rows: 3 }
                ]
            },
            {
                id: "business_model",
                title: "İş Modeli ve Pazar",
                fields: [
                    { name: "urunHizmetTanimi", label: "Ürün/Hizmet Tanımı", type: "textarea", rows: 4, required: true },
                    { name: "hedefMusteri", label: "Hedef Müşteri", type: "textarea", rows: 3 }
                ]
            },
            {
                id: "support_needs",
                title: "Destek İhtiyacı",
                fields: [
                    { name: "talepEdilenDestek", label: "Talep Edilen Destek Kalemleri", type: "textarea", rows: 4, required: true, helpText: "Hangi makineleri, teçhizatları veya yazılımları almak istiyorsunuz?" },
                    { name: "destekGerekcesi", label: "Destek Gerekçesi", type: "textarea", rows: 4, required: true, helpText: "Bu destekler kapasitenizi veya kalitenizi nasıl artıracak?" },
                    { name: "tahminiTutar", label: "Tahmini Tutar (TL)", type: "number", required: true }
                ]
            },
            {
                id: "growth_plan",
                title: "Büyüme Planı",
                fields: [
                    { name: "istihdamPlani", label: "İstihdam Planı", type: "textarea", rows: 3 },
                    { name: "satisBeklentisi", label: "Satış Beklentisi", type: "textarea", rows: 3 }
                ]
            }
        ]
    },
    finance_acceleration: {
        title: "TTGV Yatırım / Araştırma Başvurusu",
        description: "Tematik hızlandırma, ticari doğrulama ve pilot çalışmalar.",
        sections: [
            {
                id: "tech_summary",
                title: "Girişim ve Teknoloji Özeti",
                fields: [
                    { name: "girisimAdi", label: "Girişim Adı", type: "text", required: true },
                    { name: "teknolojiAlani", label: "Teknoloji Alanı", type: "text", required: true },
                    { name: "cozumOzeti", label: "Çözüm Özeti", type: "textarea", rows: 4, required: true }
                ]
            },
            {
                id: "validation",
                title: "Müşteri ve Pilot Doğrulama",
                fields: [
                    { name: "pilotVarMi", label: "Mevcut Pilot/Devam Eden Anlaşma Var Mı?", type: "radio", options: ["Evet", "Hayır"] },
                    { name: "ilkMusteriPlani", label: "İlk Müşteri Planı", type: "textarea", rows: 4, required: true },
                    { name: "mevcutDogrulama", label: "Ticari Doğrulama Metrikleri", type: "textarea", rows: 3 }
                ]
            },
            {
                id: "growth_funding",
                title: "Büyüme ve Finansman İhtiyacı",
                fields: [
                    { name: "gelirModeli", label: "Gelir Modeli", type: "textarea", rows: 3, required: true },
                    { name: "finansmanIhtiyaci", label: "Finansman İhtiyacı", type: "textarea", rows: 3, required: true },
                    { name: "fonNeredeKullanilacak", label: "Fon Kullanım Alanları", type: "textarea", rows: 4, required: true }
                ]
            }
        ]
    },
    regional_grant: {
        title: "Kalkınma Ajansı Proje Teklifi",
        description: "Bölgesel kapasite artırımı, istihdam ve altyapı hibesi.",
        sections: [
            {
                id: "applicant_partners",
                title: "Başvuru Sahibi ve Ortaklar",
                fields: [
                    { name: "kurumAdi", label: "Kurum/Kuruluş Adı", type: "text", required: true },
                    { name: "kurumTuru", label: "Kurum Türü", type: "select", options: ["Kamu", "Üniversite", "STK", "KOBİ"] },
                    { name: "ortaklar", label: "Proje Ortakları", type: "textarea", rows: 2 }
                ]
            },
            {
                id: "project_reasoning",
                title: "Proje Gerekçesi ve Uyumu",
                fields: [
                    { name: "sorunTanimi", label: "Bölgesel Sorun Tanımı", type: "textarea", rows: 5, required: true },
                    { name: "ihtiyacAnalizi", label: "İhtiyaç Analizi", type: "textarea", rows: 4, required: true },
                    { name: "oncelikUyumu", label: "Program Önceliklerine Uyum", type: "textarea", rows: 3, required: true }
                ]
            },
            {
                id: "target_group",
                title: "Hedef Grup",
                fields: [
                    { name: "dogrudanYararlanicilar", label: "Doğrudan Yararlanıcılar", type: "textarea", rows: 3, required: true },
                    { name: "nihaiYararlanicilar", label: "Nihai Yararlanıcılar", type: "textarea", rows: 3 }
                ]
            },
            {
                id: "logframe_budget",
                title: "Sonuçlar ve Bütçe",
                fields: [
                    { name: "beklenenSonuclar", label: "Beklenen Sonuçlar", type: "textarea", rows: 4, required: true },
                    { name: "toplamButce", label: "Toplam Bütçe", type: "number", required: true },
                    { name: "esFinansman", label: "Eş Finansman Oranı/Miktarı", type: "text" },
                    { name: "satinAlmaKalemleri", label: "Ana Satın Alma Kalemleri", type: "textarea", rows: 4 }
                ]
            }
        ]
    },
    social_impact: {
        title: "UNDP Sosyal Etki Başvurusu",
        description: "BM Sürdürülebilir Kalkınma Amaçları'na yönelik hibe formu.",
        sections: [
            {
                id: "context",
                title: "Sorun ve Bağlam",
                fields: [
                    { name: "sosyalCevreselSorun", label: "Sosyal veya Çevresel Sorun", type: "textarea", rows: 5, required: true },
                    { name: "veriDayanagi", label: "Kanıt ve Veri Dayanağı", type: "textarea", rows: 3 }
                ]
            },
            {
                id: "beneficiaries_impact",
                title: "Hedef Kitle ve Etki",
                fields: [
                    { name: "anaYararlaniciGrup", label: "Ana Yararlanıcı Grup", type: "textarea", rows: 3, required: true },
                    { name: "projeAmaci", label: "Projenin Amacı", type: "textarea", rows: 3, required: true },
                    { name: "etkiGostergeleri", label: "Etki Göstergeleri (KPI)", type: "textarea", rows: 4, required: true }
                ]
            },
            {
                id: "inclusion_sustainability",
                title: "Kapsayıcılık ve Sürdürülebilirlik",
                fields: [
                    { name: "toplumsalCinsiyetYaklasimi", label: "Toplumsal Cinsiyet Eşitliği Yaklaşımı", type: "textarea", rows: 3 },
                    { name: "cevreselSurdurulebilirlik", label: "Çevresel Sürdürülebilirlik Planı", type: "textarea", rows: 3 }
                ]
            }
        ]
    },
    rd_project: {
        title: "TÜBİTAK TEYDEB Ar-Ge Başvurusu",
        description: "Şirketlerin ölçülebilir sanayi Ar-Ge projeleri için teknik form.",
        sections: [
            {
                id: "project_id",
                title: "Proje Künyesi",
                fields: [
                    { name: "projeAdi", label: "Proje Adı", type: "text", required: true },
                    { name: "teknolojiAlani", label: "Teknoloji Alanı", type: "text", required: true },
                    { name: "projeSuresi", label: "Proje Süresi (Ay)", type: "number", required: true },
                    { name: "projeOzeti", label: "Proje Özeti", type: "textarea", rows: 4, required: true }
                ]
            },
            {
                id: "tech_problem_innovation",
                title: "Teknik Problem ve Yenilik Unsuru",
                fields: [
                    { name: "teknikSorun", label: "Aşılmaya Çalışılan Teknik Sorun", type: "textarea", rows: 5, required: true },
                    { name: "mevcutCozumler", label: "Mevcut Çözümler ve Yetersizlikleri", type: "textarea", rows: 4, required: true },
                    { name: "yenilikSeviyesi", label: "Projenin Yenilik Seviyesi", type: "textarea", rows: 4, required: true, helpText: "Firma içi yenilik mi, ulusal mı, global mi?" }
                ]
            },
            {
                id: "work_packages",
                title: "İş Paketleri Formati",
                fields: [
                    { name: "isPaketleri", label: "İş Paketleri", type: "textarea", rows: 8, required: true, helpText: "Kavramsal Tasarım, Detaylı Tasarım, Prototip ve Test aşamalarını anlatınız." }
                ]
            },
            {
                id: "budget_team",
                title: "Bütçe ve Ekip",
                fields: [
                    { name: "personelButcesi", label: "Personel Bütçesi", type: "number" },
                    { name: "malzemeButcesi", label: "Makine/Malzeme Bütçesi", type: "number" },
                    { name: "teknikEkip", label: "Ar-Ge Teknik Ekip Listesi", type: "textarea", rows: 4, required: true }
                ]
            }
        ]
    },
    incubation: {
        title: "Teknopark (TGB) Kuluçka Başvurusu",
        description: "Hızlandırıcı, ofis tahsisi ve vergi muafiyeti başvurusu.",
        sections: [
            {
                id: "incubation_summary",
                title: "Girişim ve Teknoloji Özeti",
                fields: [
                    { name: "girisimAdi", label: "Girişim Adı", type: "text", required: true },
                    { name: "urunHizmetOzeti", label: "Ürün/Hizmet Özeti", type: "textarea", rows: 4, required: true },
                    { name: "teknolojiAlani", label: "Teknoloji Alanı / Ar-Ge Niteliği", type: "textarea", rows: 4, required: true }
                ]
            },
            {
                id: "team_needs",
                title: "Ekip ve İhtiyaç Analizi",
                fields: [
                    { name: "kurucuEkip", label: "Kurucu ve Teknik Ekip", type: "textarea", rows: 4, required: true },
                    { name: "ofisIhtiyaci", label: "Ofis / Masa İhtiyacı Durumu", type: "text" },
                    { name: "nedenBuTeknopark", label: "Neden Bu Teknoparkı Seçiyorsunuz?", type: "textarea", rows: 3 }
                ]
            }
        ]
    }
};
