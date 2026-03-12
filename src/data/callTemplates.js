export const CALL_TEMPLATES = {
    startup_idea: {
        filters: ["Hepsi", "Prototip Var", "Takım Yok", "Yazılım", "Donanım"],
        calls: [
            {
                id: "bigg_tech",
                title: "Genel Teknoloji Girişimi",
                shortDescription: "Yazılım, donanım veya karma teknoloji odaklı girişimler.",
                eligibilitySummary: "TR sınırları içinde uygulanabilir, yenilikçi ve teknolojik tabana oturan projeler.",
                tags: ["Popüler", "Yazılım/Donanım"],
                recommendationHint: "Ticarileşme potansiyeli yüksek ve geniş pazarlara hitap eden iş fikirleri için idealdir.",
                matchingRules: ["Hepsi", "Yazılım", "Donanım"],
                nextStepEffects: ["İş planı tonunu pazar potansiyeline odaklar", "Geniş MVP tanımları sunar"]
            },
            {
                id: "bigg_early_mvp",
                title: "Erken Aşama MVP",
                shortDescription: "Geliştirilmesi büyük ölçüde tamamlanmış, ilk prototipi veya MVP'si olan girişimler.",
                eligibilitySummary: "Somut bir prototipi veya asgari uygulanabilir ürünü (MVP) olan, pazar doğrulamasını yapmak için fona ihtiyaç duyan projeler.",
                tags: ["Prototip Var", "Hızlı Pazara Çıkış"],
                recommendationHint: "Eğer elinizde çalışan bir prototip varsa, prototipinizi ürünleştirmek için bu alt çağrı en doğrusudur.",
                matchingRules: ["Hepsi", "Prototip Var"],
                nextStepEffects: ["MVP doğrulama metriklerine odaklanır", "Müşteri testlerine ağırlık verir"]
            },
            {
                id: "bigg_green",
                title: "Yeşil Büyüme ve Temiz Enerji",
                shortDescription: "İklim değişikliği, enerji verimliliği ve yeşil teknoloji girişimleri.",
                eligibilitySummary: "Karbon ayak izini düşüren, yenilenebilir enerji, döngüsel ekonomi veya yeşil dönüşüm odaklı projeler.",
                tags: ["Sürdürülebilirlik", "Yeşil Büyüme", "Etki"],
                recommendationHint: "Projenizin çevreye doğrudan pozitif etkisi veya karbon azaltıcı teknolojisi varsa seçilmelidir.",
                matchingRules: ["Hepsi"],
                nextStepEffects: ["Çevresel etki metriklerini vurgular", "Sürdürülebilirlik tonuna geçer"]
            },
            {
                id: "bigg_ai_suggest",
                title: "Emin Değilim / AI Seçsin",
                shortDescription: "Projemin detaylarına inildikçe asistanın en uygun TÜBİTAK alt çağrısını bana önermesini istiyorum.",
                eligibilitySummary: "Önceden kısıtlama yapmak istemeyen, esnek yapıdaki başvurular.",
                tags: ["AI Desteği"],
                recommendationHint: "Ne seçeceğinizden emin değilseniz bu modla devam edin, ileriki adımlarda yapay zeka sizi yönlendirecektir.",
                matchingRules: ["Hepsi", "Takım Yok", "Prototip Var", "Yazılım", "Donanım"],
                nextStepEffects: ["Tüm genel soruları dinamik olarak sorar", "Seçimi açık bırakır"]
            }
        ]
    },
    entrepreneur_support: {
        filters: ["Hepsi", "Yeni Kuruldu", "Makine Talebi", "Personel Talebi"],
        calls: [
            {
                id: "kosgeb_establishment",
                title: "İş Kurma Desteği",
                shortDescription: "Yeni kurulan veya kurulma aşamasında olan işletmeler için temel gider destekleri.",
                eligibilitySummary: "1 yaşından küçük işletmelerin kuruluş kira, donanım veya ofis paket programı harcamaları.",
                tags: ["Yeni Kuruldu", "Kuruluş Gideri"],
                recommendationHint: "Şirketinizi yeni kuruyorsanız ve henüz temel demirbaş eksikleriniz varsa bunu seçmelisiniz.",
                matchingRules: ["Hepsi", "Yeni Kuruldu"],
                nextStepEffects: ["Kurucu profiline odaklanır", "Pazara giriş maliyetlerini işler"]
            },
            {
                id: "kosgeb_machinery",
                title: "Makine / Teçhizat Odaklı Başvuru",
                shortDescription: "Üretim kapasitesini artırmak için spesifik makine, teçhizat veya kalıp alımı.",
                eligibilitySummary: "Faal olarak üretime yönelik bir kapasite artışı yaşamak isteyen, imalat yapan veya yapacak KOBİ'ler.",
                tags: ["İmalat", "Makine Talebi"],
                recommendationHint: "Bütçenizin asıl kalemi donanım ve makine ise, değerlendirme kurulu bu çağrıda kapasite raporunuza bakacaktır.",
                matchingRules: ["Hepsi", "Makine Talebi"],
                nextStepEffects: ["Üretim kapasitesini sorgular", "Birim maliyet/satış planını öne çıkarır"]
            },
            {
                id: "kosgeb_software",
                title: "Yazılım / Dijitalleşme Odaklı",
                shortDescription: "İşletmenin dijital altyapısını kurmak için yazılım ve teknoloji yatırımı.",
                eligibilitySummary: "E-ticaret sistemleri, endüstri 4.0, ERP/CRM yazılımları veya sunucu maliyetleri yatırım talebi.",
                tags: ["Dijital Dönüşüm", "Yazılım"],
                recommendationHint: "Geleneksel bir işletmeyi dijitale taşımak (Örn: sipariş otomasyonu kurmak) istiyorsanız bu başlığı seçin.",
                matchingRules: ["Hepsi"],
                nextStepEffects: ["Teknoloji pazarını hedefler", "Verimlilik artış metriklerini sorgular"]
            },
            {
                id: "kosgeb_rnd_personnel",
                title: "Personel / Kapasite Geliştirme",
                shortDescription: "Özellikle nitelikli personel veya Ar-Ge personeli istihdamına yönelik maaş desteği.",
                eligibilitySummary: "Nitelikli mezunları veya lisans/lisansüstü personelleri Ar-Ge süreçlerine katmak isteyen girişimler.",
                tags: ["İstihdam", "Personel Talebi", "Ar-Ge"],
                recommendationHint: "Gider kaleminiz donanım yerine tamamen insan kaynağı (maaş/sigorta) ise başvuruyu bu kapsamda daraltın.",
                matchingRules: ["Hepsi", "Personel Talebi"],
                nextStepEffects: ["Takım yapısına odaklanır", "Mevcut ekibin büyüme stratejisini irdeler"]
            }
        ]
    },
    finance_acceleration: {
        filters: ["Hepsi", "Pilot Yapıldı", "İlk Satış Yok", "Donanım Pazarı", "Yazılım SaaS"],
        calls: [
            {
                id: "ttgv_pilot",
                title: "Pilot / İlk Müşteri Odaklı Doğrulama",
                shortDescription: "Ürünün B2B ekosistemde büyük kurumsal firmalarla pilot olarak denenmesi aşaması.",
                eligibilitySummary: "Beta sürecinde olup teknolojisini gerçek bir sanayi veya kurum müşterisinde denemek isteyen girişimler.",
                tags: ["Ticarileşme", "İlk Satış Yok"],
                recommendationHint: "Anlaştığınız (veya anlaşmaya çok yakın olduğunuz) kurumsal bir test müşteriniz varsa en uygun fon bu çağrıdır.",
                matchingRules: ["Hepsi", "İlk Satış Yok"],
                nextStepEffects: ["Ticari doğrulama soruları sorar", "PoC metriklerine odaklanır"]
            },
            {
                id: "ttgv_commercial",
                title: "Ticarileşme Hızlandırma",
                shortDescription: "Pazarda ilk satışlarını (PoC) tamamlamış, satışları hızlandırmak (scale-up) isteyen şirketler.",
                eligibilitySummary: "Satışa başlamış, müşteri kanallarını oturtmuş ancak pazarlama veya kapasite finansmanı arayan KOBİ'ler/Girişimler.",
                tags: ["Pilot Yapıldı", "Büyüme Odaklı", "SaaS/Donanım"],
                recommendationHint: "Ürünün çalıştığını kanıtladıysanız ve asıl engelin pazara yayılmak (reklam, bayileşme vb) olduğunu düşünüyorsanız bunu seçin.",
                matchingRules: ["Hepsi", "Pilot Yapıldı", "Donanım Pazarı", "Yazılım SaaS"],
                nextStepEffects: ["Büyüme/Pazarlama Hunisi (CAC/LTV) soruları sorar", "Ciro hedeflerine odaklanır"]
            },
            {
                id: "ttgv_thematic",
                title: "Tematik / Derin Teknoloji Finansmanı",
                shortDescription: "Yüksek teknoloji gerektiren alanlara (Sağlık, Malzeme, Uzay vb) özel TTGV finansmanı.",
                eligibilitySummary: "Uzun süre Ar-Ge gerektirdiği için pazara çıkışı zor olan derin teknoloji (Deepetch) projeleri.",
                tags: ["Deeptech", "Tematik Sektörler"],
                recommendationHint: "Geliştirdiğiniz teknoloji eğer patentlenebilir, donanımsal veya Ar-Ge bariyeri çok yüksek bir işse tercih edilmeli.",
                matchingRules: ["Hepsi", "Donanım Pazarı"],
                nextStepEffects: ["Fikri Mülkiyet (IP) hakları sorularını getirir", "Global pazardaki regülasyonları sorar"]
            }
        ]
    },
    regional_grant: {
        filters: ["Hepsi", "İmalat Sanayii", "Eş Finansman Var", "Sosyal Tema"],
        calls: [
            {
                id: "kalkinma_industrial",
                title: "Üretim ve Sanayi Rekabetçiliği",
                shortDescription: "Bölgedeki fabrikaların, organize sanayilerin veya imalatçıların kalitesini artıran altyapı projeleri.",
                eligibilitySummary: "Özellikle KOBİ'lerin veya Sanayi Odalarının ortaklaşa kullanım merkezi veya verimlilik makinaları alması.",
                tags: ["İmalat Sanayii", "Altyapı"],
                recommendationHint: "Sadece tek bir firma için değil, bölgedeki bir tedarik zincirine hitap eden üretim yatırımınız varsa çok uygundur.",
                matchingRules: ["Hepsi", "İmalat Sanayii"],
                nextStepEffects: ["Eş finansman tablosunu odaklar", "Bölgesel kapasite çarpanını sorar"]
            },
            {
                id: "kalkinma_digital_green",
                title: "Dijital ve Yeşil Dönüşüm",
                shortDescription: "İşletmelerin AB Mutabakatı'na uyumu (sıfır atık, dijital izleme) konulu bölgesel hibeler.",
                eligibilitySummary: "Karbon salınımını azaltan teknolojik sensör otomasyonları veya enerji/su tasarrufu yatırımları.",
                tags: ["Eş Finansman Var", "Yeşil Dönüşüm", "Sanayi 4.0"],
                recommendationHint: "Firmanızın atık veya enerji tüketimini dijitalleştirerek düşürecek spesifik bir modeliniz varsa en puanlı başlıktır.",
                matchingRules: ["Hepsi", "Eş Finansman Var"],
                nextStepEffects: ["Çevresel analiz bölümünü aktif eder", "Somut veri tasarruf oranlarını bekler"]
            },
            {
                id: "kalkinma_social",
                title: "Genç İstihdamı ve Sosyal Kapsayıcılık",
                shortDescription: "Bölgedeki dezavantajlı grupların veya gençlerin teknolojiyle desteklenip istihdama katılması.",
                eligibilitySummary: "Sosyal etki hedefi yüksek, mesleki eğitime veya kadın istihdamına yönelik Kar Amacı Gütmeyen projeler.",
                tags: ["Sosyal Tema", "İstihdam"],
                recommendationHint: "Projenizde kurulacak bir atölye veya yazılım alanından bölge gençleri ve kadınlar istihdam edilecekse doğrudan bu çağrıya başvurun.",
                matchingRules: ["Hepsi", "Sosyal Tema"],
                nextStepEffects: ["Kar amacı gütmeyen sosyal iş modeline geçer", "Yararlanıcı profiline derinlemesine iner"]
            }
        ]
    },
    social_impact: {
        filters: ["Hepsi", "Eğitim", "Çevre", "Eşitsizliklerin Azaltılması"],
        calls: [
            {
                id: "undp_education",
                title: "Nitelikli Eğitim Destek (SDG-4)",
                shortDescription: "Eğitime erişimi kısıtlı bölgelere dijital, yenilikçi ve kapsayıcı eğitim çözümleri sunan projeler.",
                eligibilitySummary: "E-öğrenme platformları, köy okullarına teknoloji altyapısı veya nitelikli teknoloji okuryazarlığı programları.",
                tags: ["Eğitim", "Ölçülebilir KPI"],
                recommendationHint: "Oluşturacağınız projenin ana ekseni temel insan hakkı olarak kaliteli eğitime katkı sağlıyorsa doğrudan uygundur.",
                matchingRules: ["Hepsi", "Eğitim"],
                nextStepEffects: ["Kapsayıcı eğitim metriklerini oluşturur", "Saha uygulama zorluklarını sorgular"]
            },
            {
                id: "undp_gender",
                title: "Toplumsal Cinsiyet Eşitliği ve Kapsayıcılık",
                shortDescription: "Kadınların teknoloji girişimciliğine katılımını artırmak veya kırılgan grupları güçlendirmek.",
                eligibilitySummary: "Üretimde kadın emeğini maksimize eden, veya fırsat eşitliğini teknolojiyle çözen organizasyonlar.",
                tags: ["Toplumsal Etki", "Eşitsizliklerin Azaltılması"],
                recommendationHint: "Kurumunuzda eşitlikçi politikalar varsa ve hibe projesi doğrudan dezavantajlı kadınları/gençleri hedefliyorsa bu başlığı seçmelisiniz.",
                matchingRules: ["Hepsi", "Eşitsizliklerin Azaltılması"],
                nextStepEffects: ["Demografik ve cinsiyet kırılımlı KPI formunu acar", "Savunuculuk hedeflerini (Adovcacy) sorar"]
            },
            {
                id: "undp_climate",
                title: "İklim Eylemi ve Çevre (SDG-13)",
                shortDescription: "Yerel karbon salınımını azaltıcı, doğayı koruyan veya çevre bilinci yaratan teknoloji işbirlikleri.",
                eligibilitySummary: "Su izleme teknolojileri, akıllı tarım veya döngüsel ekonomiye dayalı (atık yönetimi vb.) yenilikçi startuplar veya NGO'lar.",
                tags: ["Çevre", "Sürdürülebilirlik", "Ortaklık Gerekli"],
                recommendationHint: "İşiniz fiziki veya yazılımsal olarak bir ekosistemi 'iklim dostu' hale dönüştürüyorsa BM nezdinde etki yatırımı potansiyeli yüksektir.",
                matchingRules: ["Hepsi", "Çevre"],
                nextStepEffects: ["Karbon metriklerini ton cinsinden hesaba katar", "Yenilenebilir döngüyü vurgular"]
            }
        ]
    },
    rd_project: {
        filters: ["Hepsi", "İlk Ar-Ge", "Öncelikli Teknoloji", "Sadece Yazılım", "Karma Proje"],
        calls: [
            {
                id: "teydeb_1507",
                title: "1507 KOBİ Ar-Ge Başlangıç Desteği Programı",
                shortDescription: "Daha önce Ar-Ge tecrübesi kısıtlı veya hiç olmayan KOBİ'ler için ilk Ar-Ge projesi hibesi.",
                eligibilitySummary: "Ar-Ge kültürünü aşılamak için 1501'e kıyasla daha küçük bütçeli, görece daha esnek (ilk 3 proje) KOBİ başvuruları.",
                tags: ["KOBİ", "İlk Ar-Ge", "75% Destek"],
                recommendationHint: "Firmanız daha önce TÜBİTAK'tan hiç hibe almadıysa bu programa girmek kabul edilme şansınızı dramatik artırır.",
                matchingRules: ["Hepsi", "İlk Ar-Ge", "Sadece Yazılım", "Karma Proje"],
                nextStepEffects: ["Firma kültüründe Ar-Ge kazanımlarına odaklanır", "Akademik işbirliği kurma ihtimalini sorgular"]
            },
            {
                id: "teydeb_1501",
                title: "1501 Sanayi Ar-Ge Projeleri Destekleme Programı",
                shortDescription: "Mevcut ürünü, süreci veya yöntemi dünya ile rekabetçi seviyede geliştirecek yüksek bütçeli Ar-Ge fonu.",
                eligibilitySummary: "Sistematik bir iş paketi olan, akademik altyapısı güçlü, karmaşık ve teknik belirsizlikler barındıran ticari ve endüstriyel yenilik projeleri.",
                tags: ["KOBİ", "Teknik Derinlik", "Karma Proje"],
                recommendationHint: "Eğer proje tamamen yeni bir algoritma veya dünyada emsali az bir teknolojik prototip barındırıyorsa 1501 doğru seçimdir.",
                matchingRules: ["Hepsi", "Öncelikli Teknoloji", "Karma Proje"],
                nextStepEffects: ["Patent/Makale araştırmasını zorunlu tutar", "İş paketlerinde teknik risk tablosunu ağırlaştırır"]
            },
            {
                id: "teydeb_1511",
                title: "1511 Öncelikli Alanlar Araştırma Desteği",
                shortDescription: "TÜBİTAK tarafından yayınlanan stratejik çağrı başlıklarına doğrudan çözüm üreten KOBİ ve Büyük Ölçekli projeler.",
                eligibilitySummary: "Çağrı açılan konularda (Örn: Sağlık Teknolojileri, İleri Malzemeler vb.) yapılan derin Ar-Ge başvuruları.",
                tags: ["Stratejik Alan", "Öncelikli Teknoloji"],
                recommendationHint: "Bakanlık öncelikli açık çağrılarından birinin tanımına tamı tamına oturuyorsanız en yüksek yatırım sınırları buradadır.",
                matchingRules: ["Hepsi", "Öncelikli Teknoloji"],
                nextStepEffects: ["Ulusal açık çağrı kodu ile teknik ilişki kurar", "İthal ikamesi/ihracat potansiyelini öne çeker"]
            }
        ]
    },
    incubation: {
        filters: ["Hepsi", "Sadece Fikir", "MVP Hazır", "Ofis İhtiyacı Var", "Ciro Var"],
        calls: [
            {
                id: "tgb_preincubation",
                title: "Ön Kuluçka",
                shortDescription: "Henüz şirketini kurmamış, teknolojisini/fikrini olgunlaştırmak isteyen girişimci adayları.",
                eligibilitySummary: "Şahıs veya şirket kurulumu olmayan, akademik danışmanlığa veya prototip yapımı için temel açık ofis/masa desteğine ihtiyaç duyanlar.",
                tags: ["Sadece Fikir", "Öğrenci/Akademisyen", "Ücretsiz Ofis"],
                recommendationHint: "İş fikriniz harika ama henüz faturanız, markanız ve şirketiniz yoksa (ön çalışmaysanız) doğru yer Ön Kuluçka'dır.",
                matchingRules: ["Hepsi", "Sadece Fikir", "Ofis İhtiyacı Var"],
                nextStepEffects: ["Ciro beklentilerini düşürür", "Danışmanlık ve takım kurma hedeflerini yazar"]
            },
            {
                id: "tgb_incubation",
                title: "Kuluçka / Ofis Tahsisi",
                shortDescription: "Geliştirmekte olduğu ürünü (MVP) olan, resmi teknopark ofisinde faaliyet geçirip vergi/SSK avantajı isteyen işletmeler.",
                eligibilitySummary: "Kuruluşunu tamamlamış veya tamamlama aşamasında olup, TGB kanunu kapsamında fiili Ar-Ge yapacak teknogirişimler.",
                tags: ["MVP Hazır", "Ar-Ge Vergi Avantajı", "Tahsis"],
                recommendationHint: "Daha profesyonel bir şirket yapısına, gelir akışına ve teknoparkın sağladığı stopaj/SGK muafiyetlerine odaklıysanız seçmelisiniz.",
                matchingRules: ["Hepsi", "MVP Hazır", "Ofis İhtiyacı Var", "Ciro Var"],
                nextStepEffects: ["Somut personel istihdam ve ofis alanı sorar", "Vergi/Finansal öngörülere yer verir"]
            },
            {
                id: "tgb_acceleration",
                title: "Hızlandırma (Post-Incubation / Scale-up)",
                shortDescription: "Satışlarını kanıtlamış, kurumsallaşmış ve global ölçeklenme aşamasındaki teknopark kuluçka mezunu firmalar.",
                eligibilitySummary: "Artık ürün geliştirmekten ziyade (product-market fit tamamlanmış) global satış, pazarlama ağı veya VC yatırımı (A-serisi) arayan şirketler.",
                tags: ["Ciro Var", "Küresel Büyüme", "Scale-up"],
                recommendationHint: "Hali hazırda 100+ müşteriniz veya ciddi cironuz var, hedefiniz yurt dışına açılmaksa veya seri yatırım almaksa uygun formattır.",
                matchingRules: ["Hepsi", "Ciro Var"],
                nextStepEffects: ["Scale-up yatırımcı stratejisiyle dolar bazlı hedef sorar", "Global pazar büyüklüğüne odaklanır"]
            }
        ]
    }
}
