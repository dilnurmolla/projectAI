export const PROGRAM_TEMPLATES = [
    {
        id: "tubitak_1512",
        templateType: "startup_idea",
        name: "TÜBİTAK 1512 (BiGG)",
        desc: "Teknoloji odaklı girişimler için çekirdek sermaye desteği.",
        color: "bg-[#EFF5FF] text-[#1B5CFF] border-[#BFD4FF]",
        badge: "Popüler",
        introInfo: {
            suitableFor: "Bireysel girişimciler, akademisyenler, öğrenciler ve erken aşama teknoloji fikirleri.",
            whatToFill: "Girişim fikri, pazar analizi, yenilikçilik yönü, ticarileşme potansiyeli ve iş planı.",
            estimatedMinutes: 25,
            requiredDocs: "Özgeçmişler, fikri mülkiyet belgeleri (varsa), niyet mektupları."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        id: "kosgeb_yeni",
        templateType: "entrepreneur_support",
        name: "KOSGEB İleri Girişimci",
        desc: "Yeni girişimcilere kuruluş ve makine-teçhizat hibesi.",
        color: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
        badge: "KOBİ / Girişim",
        introInfo: {
            suitableFor: "Son 1 yıl içinde şirket kurmuş veya kuracak olan yeni ticari girişimler.",
            whatToFill: "İşletme profili, gider destek talepleri, üretim/hizmet planı ve makine alımları.",
            estimatedMinutes: 15,
            requiredDocs: "Vergi levhası, kapasite raporu (varsa), proforma faturalar."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        id: "ttgv",
        templateType: "finance_acceleration",
        name: "TTGV Finansmanı",
        desc: "Türkiye Teknoloji Geliştirme Vakfı yatırım destekleri.",
        color: "bg-[#ECFEFF] text-[#0891B2] border-[#A5F3FC]",
        introInfo: {
            suitableFor: "Prototipi bitmiş, ticarileşme ve büyüme (scale-up) aşamasına gelen teknoloji şirketleri.",
            whatToFill: "İlk müşteri anlaşmaları, pilot tasarımlar, büyüme ve ihracat stratejileri, finansal projeksiyonlar.",
            estimatedMinutes: 30,
            requiredDocs: "Geçmiş yıl bilançoları, yatırımcı sunumu, müşteri niyet/satın alma belgeleri."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: "kalkinma",
        templateType: "regional_grant",
        name: "Kalkınma Ajansları",
        desc: "Bölgesel projelere hibe ve kapasite geliştirme desteği.",
        color: "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]",
        introInfo: {
            suitableFor: "Kamu kurumları, STK'lar, KOBİ'ler ve bölgesel istihdama katkı sağlayacak organizasyonlar.",
            whatToFill: "Mantıksal Çerçeve Matrisi (LogFrame), bölgesel ihtiyaç analizi, faaliyet takvimi, hedef grup faydası.",
            estimatedMinutes: 45,
            requiredDocs: "Bağlı olunan bölgedeki resmi izinler, iştirakçi/ortaklık beyanları."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: "undp",
        templateType: "social_impact",
        name: "Birleşmiş Milletler (UNDP)",
        desc: "Sosyal girişim ve sürdürülebilirlik (SDG) odaklı hibe.",
        color: "bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]",
        badge: "Sosyal Etki",
        introInfo: {
            suitableFor: "Sosyal kooperatifler, yeşil girişimciler, çevre ve insani kalkınma odaklı projeler.",
            whatToFill: "Etki ölçümü, SDG(Sürdürülebilir Kalkınma Amaçları) uyumu, dezavantajlı grup faydası, kapsayıcılık.",
            estimatedMinutes: 40,
            requiredDocs: "STK onayları, ÇED raporları (gerekliyse), önceki sosyal proje referansları."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        )
    },
    {
        id: "teydeb",
        templateType: "rd_project",
        name: "TÜBİTAK TEYDEB",
        desc: "Ölçeklenebilir sanayi Ar-Ge projelerine özel destekler.",
        color: "bg-[#EFF6FF] text-[#1E3A8A] border-[#BFDBFE]",
        introInfo: {
            suitableFor: "Ar-Ge kültürü olan şirketler, üretim devleri ve teknik ürün/yazılım geliştiren firmalar.",
            whatToFill: "Derin teknik problem, detaylı İş Paketleri, Ar-Ge metodolojisi, teknik personel dağılımı.",
            estimatedMinutes: 60,
            requiredDocs: "Literatür taraması taslakları, mali tablolar, ilgili patent/faydalı model dokümanları."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        id: "teknopark",
        templateType: "incubation",
        name: "Teknoparklar (TGB)",
        desc: "Startup'lar için kuluçka, ofis ve vergi avantajı.",
        color: "bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]",
        introInfo: {
            suitableFor: "Yazılım geliştiren, Ar-Ge yapan ve mentorluk/kuluçka veya vergi muafiyeti arayan ekipler.",
            whatToFill: "Projenin neden Ar-Ge olduğu, takımın yetkinliği, teknoparkta fiziksel olarak neye ihtiyaç duyulduğu.",
            estimatedMinutes: 20,
            requiredDocs: "Ekip lisans/yüksek lisans diplomaları, prototip görselleri."
        },
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    }
];
