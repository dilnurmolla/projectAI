import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getActiveUser,
  getStoredUsers,
  logoutUser,
  updateStoredUser,
} from "../../utils/accountStorage";

const SECTIONS = [
  { id: "general", label: "Genel Bilgiler", hint: "Kimlik ve çalışma alanı" },
  { id: "ai", label: "AI Tercihleri", hint: "Varsayılan üretim ayarları" },
  {
    id: "notifications",
    label: "Bildirim Tercihleri",
    hint: "E-posta ve ürün bildirimleri",
  },
  { id: "security", label: "Güvenlik", hint: "Şifre ve oturum yönetimi" },
];

const INTERFACE_LANGUAGES = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" },
];

const OUTPUT_LANGUAGES = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
];

const WRITING_TONES = [
  { value: "resmi", label: "Resmi" },
  { value: "teknik", label: "Teknik" },
  { value: "sade", label: "Sade" },
  { value: "ikna-edici", label: "İkna Edici" },
];

const PROJECT_FOCUS_OPTIONS = [
  { value: "tubitak", label: "TUBITAK Başvuruları" },
  { value: "teknogirisim", label: "Teknogirişim ve Hibe" },
  { value: "arge", label: "AR-GE ve İnovasyon" },
  { value: "yatirim", label: "Yatırımcı Sunumları" },
  { value: "kurumsal", label: "Kurumsal Proje Dosyaları" },
];

function normalizeSection(section) {
  return SECTIONS.some((item) => item.id === section) ? section : "general";
}

function buildSettingsState(user) {
  return {
    fullName: user?.fullName || "",
    email: user?.email || "",
    organization: user?.organization || "",
    jobTitle: user?.jobTitle || user?.role || "",
    interfaceLanguage: user?.interfaceLanguage || "tr",
    outputLanguage: user?.preferences?.outputLanguage || "tr",
    writingTone: user?.preferences?.writingTone || "resmi",
    projectFocus: user?.preferences?.projectFocus || "arge",
    autoAiSuggestions: user?.preferences?.autoAiSuggestions ?? true,
    autoFormSuggestions: user?.preferences?.autoFormSuggestions ?? true,
    emailNotifications: user?.notifications?.emailNotifications ?? true,
    projectCompleted: user?.notifications?.projectCompleted ?? true,
    aiReady: user?.notifications?.aiReady ?? true,
    systemAnnouncements: user?.notifications?.systemAnnouncements ?? false,
  };
}

function getInitial(fullName) {
  const value = fullName?.trim();
  return value ? value.charAt(0).toUpperCase() : "A";
}

function SectionButton({ section, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(section.id)}
      className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
        isActive
          ? "border-[#185ED8] bg-[#EFF5FF] shadow-sm"
          : "border-transparent hover:border-slate-200 hover:bg-slate-50"
      }`}
    >
      <div
        className={`text-sm font-semibold ${
          isActive ? "text-[#185ED8]" : "text-slate-800"
        }`}
      >
        {section.label}
      </div>
      <p className="mt-1 text-xs text-slate-500">{section.hint}</p>
    </button>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  helperText,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-[#1B5CFF]/50 focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/10"
      />
      {helperText && <p className="mt-2 text-xs text-slate-500">{helperText}</p>}
    </label>
  );
}

function SelectField({ label, value, onChange, options, helperText }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition hover:border-[#1B5CFF]/50 focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <p className="mt-2 text-xs text-slate-500">{helperText}</p>}
    </label>
  );
}

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 transition hover:border-slate-300">
      <div>
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <span
        className={`relative mt-1 inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
          checked ? "bg-[#185ED8]" : "bg-slate-300"
        }`}
      >
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </span>
    </label>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="border-b border-slate-100 pb-5">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function FeedbackBanner({ feedback }) {
  if (!feedback) return null;

  const tone =
    feedback.type === "error"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <div className={`rounded-2xl border px-4 py-3 text-sm ${tone}`}>
      {feedback.message}
    </div>
  );
}

export default function AccountSettings() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ authEmail, user }, setUserState] = useState(() => getActiveUser());
  const [lookupEmail, setLookupEmail] = useState(authEmail);
  const [settings, setSettings] = useState(() => buildSettingsState(user));
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    nextPassword: "",
    confirmPassword: "",
  });
  const [feedback, setFeedback] = useState(null);

  const activeSection = useMemo(
    () => normalizeSection(searchParams.get("section")),
    [searchParams],
  );

  const syncFromStorage = () => {
    const snapshot = getActiveUser();
    setUserState(snapshot);
    setLookupEmail(snapshot.authEmail);
    setSettings(buildSettingsState(snapshot.user));
    return snapshot;
  };

  const updateSetting = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const setSection = (sectionId) => {
    setSearchParams({ section: sectionId });
    setFeedback(null);
  };

  const handleSaveGeneral = () => {
    const normalizedEmail = settings.email.trim().toLowerCase();
    const emailInUse = getStoredUsers().some(
      (storedUser) =>
        storedUser.email === normalizedEmail && storedUser.email !== lookupEmail,
    );

    if (!settings.fullName.trim()) {
      setFeedback({
        type: "error",
        message: "Lütfen ad soyad alanını doldurun.",
      });
      return;
    }

    if (emailInUse) {
      setFeedback({
        type: "error",
        message: "Bu e-posta adresi başka bir hesap tarafından kullanılıyor.",
      });
      return;
    }

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      setFeedback({
        type: "error",
        message: "Geçerli bir e-posta adresi girin.",
      });
      return;
    }

    const updatedUser = updateStoredUser(lookupEmail, (previousUser) => ({
      ...previousUser,
      fullName: settings.fullName.trim(),
      email: normalizedEmail,
      organization: settings.organization.trim(),
      jobTitle: settings.jobTitle.trim(),
      interfaceLanguage: settings.interfaceLanguage,
    }));

    if (!updatedUser) {
      setFeedback({
        type: "error",
        message: "Aktif kullanıcı bulunamadı. Lütfen tekrar giriş yapın.",
      });
      return;
    }

    const snapshot = syncFromStorage();
    setLookupEmail(snapshot.authEmail);
    setFeedback({
      type: "success",
      message: "Genel bilgiler başarıyla güncellendi.",
    });
  };

  const handleSaveAi = () => {
    const updatedUser = updateStoredUser(lookupEmail, (previousUser) => ({
      ...previousUser,
      preferences: {
        ...(previousUser.preferences || {}),
        outputLanguage: settings.outputLanguage,
        writingTone: settings.writingTone,
        projectFocus: settings.projectFocus,
        autoAiSuggestions: settings.autoAiSuggestions,
        autoFormSuggestions: settings.autoFormSuggestions,
      },
    }));

    if (!updatedUser) {
      setFeedback({
        type: "error",
        message: "AI tercihleri kaydedilemedi. Lütfen tekrar giriş yapın.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message: "AI tercihleri güncellendi.",
    });
  };

  const handleSaveNotifications = () => {
    const updatedUser = updateStoredUser(lookupEmail, (previousUser) => ({
      ...previousUser,
      notifications: {
        ...(previousUser.notifications || {}),
        emailNotifications: settings.emailNotifications,
        projectCompleted: settings.projectCompleted,
        aiReady: settings.aiReady,
        systemAnnouncements: settings.systemAnnouncements,
      },
    }));

    if (!updatedUser) {
      setFeedback({
        type: "error",
        message: "Bildirim tercihleri kaydedilemedi.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message: "Bildirim tercihleri kaydedildi.",
    });
  };

  const handleSecuritySave = () => {
    if (!user) {
      setFeedback({
        type: "error",
        message: "Aktif oturum bulunamadı. Lütfen tekrar giriş yapın.",
      });
      return;
    }

    if (passwordForm.currentPassword !== user.password) {
      setFeedback({
        type: "error",
        message: "Mevcut şifre doğrulanamadı.",
      });
      return;
    }

    if (passwordForm.nextPassword.length < 4) {
      setFeedback({
        type: "error",
        message: "Yeni şifre en az 4 karakter olmalıdır.",
      });
      return;
    }

    if (passwordForm.nextPassword !== passwordForm.confirmPassword) {
      setFeedback({
        type: "error",
        message: "Yeni şifre alanları eşleşmiyor.",
      });
      return;
    }

    const updatedUser = updateStoredUser(lookupEmail, (previousUser) => ({
      ...previousUser,
      password: passwordForm.nextPassword,
    }));

    if (!updatedUser) {
      setFeedback({
        type: "error",
        message: "Şifre güncellenemedi.",
      });
      return;
    }

    setPasswordForm({
      currentPassword: "",
      nextPassword: "",
      confirmPassword: "",
    });
    syncFromStorage();
    setFeedback({
      type: "success",
      message: "Şifre güvenli şekilde güncellendi.",
    });
  };

  const handleSignOutDevice = () => {
    logoutUser();
    navigate("/login");
  };

  const handleResetGeneral = () => {
    const snapshot = syncFromStorage();
    setLookupEmail(snapshot.authEmail);
    setFeedback(null);
  };

  const activeSectionMeta =
    SECTIONS.find((section) => section.id === activeSection) || SECTIONS[0];

  if (!user) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Hesap verisi bulunamadı
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Oturum kaydı mevcut ancak kullanıcı bilgisine ulaşılamadı. Hesap
          ayarlarına devam etmek için yeniden giriş yapmanız gerekiyor.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3]"
          >
            Girişe Dön
          </button>
          <button
            type="button"
            onClick={handleSignOutDevice}
            className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Oturumu Temizle
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-5 border-b border-slate-100 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#185ED8] text-lg font-semibold text-white">
            {getInitial(settings.fullName || user.fullName)}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#185ED8]">
              Account Settings
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              Hesabınızı ve çalışma tercihlerinizi yönetin
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              ProjectAI çıktılarınızı daha tutarlı hale getirmek için kullanıcı,
              AI ve bildirim tercihlerinizi buradan güncelleyebilirsiniz.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <div className="font-semibold text-slate-900">{user.email}</div>
          <div className="mt-1">Aktif bölüm: {activeSectionMeta.label}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r lg:border-slate-100">
          <div className="space-y-2">
            {SECTIONS.map((section) => (
              <SectionButton
                key={section.id}
                section={section}
                isActive={activeSection === section.id}
                onClick={setSection}
              />
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#EFF5FF] p-4">
            <div className="text-sm font-semibold text-[#185ED8]">
              Çalışma Alanı Notu
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Buradaki tercihler öneri panellerini, varsayılan form tonunu ve
              üretim çıktılarının ilk davranışını etkiler.
            </p>
          </div>
        </aside>

        <section className="p-6">
          <div className="space-y-6">
            <FeedbackBanner feedback={feedback} />

            {activeSection === "general" && (
              <>
                <SectionHeader
                  title="Genel Bilgiler"
                  description="Hesabınızla ilişkili temel bilgileri ve arayüz tercihlerini güncelleyin."
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <InputField
                    label="Ad Soyad"
                    value={settings.fullName}
                    onChange={(event) =>
                      updateSetting("fullName", event.target.value)
                    }
                    placeholder="Ad Soyad"
                  />
                  <InputField
                    label="E-posta"
                    value={settings.email}
                    onChange={(event) =>
                      updateSetting("email", event.target.value)
                    }
                    type="email"
                    placeholder="ornek@kurum.com"
                    helperText="E-posta adresinizi güncellerseniz oturum kimliği de aynı değerle güncellenir."
                  />
                  <InputField
                    label="Kurum / Organizasyon"
                    value={settings.organization}
                    onChange={(event) =>
                      updateSetting("organization", event.target.value)
                    }
                    placeholder="Şirket veya kurum adı"
                  />
                  <InputField
                    label="Rol / Unvan"
                    value={settings.jobTitle}
                    onChange={(event) =>
                      updateSetting("jobTitle", event.target.value)
                    }
                    placeholder="Ürün Yöneticisi, Proje Lideri..."
                  />
                  <div className="md:col-span-2 lg:max-w-xs">
                    <SelectField
                      label="Arayüz Dili"
                      value={settings.interfaceLanguage}
                      onChange={(event) =>
                        updateSetting("interfaceLanguage", event.target.value)
                      }
                      options={INTERFACE_LANGUAGES}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveGeneral}
                    className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] focus:outline-none focus:ring-4 focus:ring-[#185ED8]/20"
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    onClick={handleResetGeneral}
                    className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    İptal
                  </button>
                </div>
              </>
            )}

            {activeSection === "ai" && (
              <>
                <SectionHeader
                  title="AI Tercihleri"
                  description="ProjectAI önerilerinin varsayılan tonunu, dilini ve form desteği davranışını belirleyin."
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <SelectField
                    label="Varsayılan Çıktı Dili"
                    value={settings.outputLanguage}
                    onChange={(event) =>
                      updateSetting("outputLanguage", event.target.value)
                    }
                    options={OUTPUT_LANGUAGES}
                  />
                  <SelectField
                    label="Yazım Tonu"
                    value={settings.writingTone}
                    onChange={(event) =>
                      updateSetting("writingTone", event.target.value)
                    }
                    options={WRITING_TONES}
                  />
                  <div className="md:col-span-2 lg:max-w-md">
                    <SelectField
                      label="Varsayılan Proje Tipi / Başvuru Odağı"
                      value={settings.projectFocus}
                      onChange={(event) =>
                        updateSetting("projectFocus", event.target.value)
                      }
                      options={PROJECT_FOCUS_OPTIONS}
                      helperText="Yeni proje oluştururken ilk öneri seti bu odağa göre şekillenir."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <ToggleRow
                    label="AI önerilerini otomatik göster"
                    description="Yeni adımlara geçtiğinizde öneri paneli ilk bakışta hazır gelsin."
                    checked={settings.autoAiSuggestions}
                    onChange={(event) =>
                      updateSetting("autoAiSuggestions", event.target.checked)
                    }
                  />
                  <ToggleRow
                    label="Form alanlarını otomatik doldurma önerileri"
                    description="Form içinde bağlama göre hızlı doldurma önerileri sunulsun."
                    checked={settings.autoFormSuggestions}
                    onChange={(event) =>
                      updateSetting("autoFormSuggestions", event.target.checked)
                    }
                  />
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveAi}
                    className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] focus:outline-none focus:ring-4 focus:ring-[#185ED8]/20"
                  >
                    Kaydet
                  </button>
                </div>
              </>
            )}

            {activeSection === "notifications" && (
              <>
                <SectionHeader
                  title="Bildirim Tercihleri"
                  description="Sadece çalışma süreciniz için anlamlı bildirimleri açık tutun."
                />

                <div className="space-y-4">
                  <ToggleRow
                    label="Email bildirimleri"
                    description="Bildirimlerin e-posta üzerinden iletilmesine izin ver."
                    checked={settings.emailNotifications}
                    onChange={(event) =>
                      updateSetting("emailNotifications", event.target.checked)
                    }
                  />
                  <ToggleRow
                    label="Proje tamamlanınca bildir"
                    description="Taslak veya üretim akışı tamamlandığında haber ver."
                    checked={settings.projectCompleted}
                    onChange={(event) =>
                      updateSetting("projectCompleted", event.target.checked)
                    }
                  />
                  <ToggleRow
                    label="AI önerileri hazır olduğunda bildir"
                    description="Yeni öneri veya alternatif içerik hazır olduğunda uyar."
                    checked={settings.aiReady}
                    onChange={(event) =>
                      updateSetting("aiReady", event.target.checked)
                    }
                  />
                  <ToggleRow
                    label="Sistem duyuruları"
                    description="Ürün güncellemeleri ve bakım pencereleri hakkında bilgi al."
                    checked={settings.systemAnnouncements}
                    onChange={(event) =>
                      updateSetting("systemAnnouncements", event.target.checked)
                    }
                  />
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveNotifications}
                    className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] focus:outline-none focus:ring-4 focus:ring-[#185ED8]/20"
                  >
                    Kaydet
                  </button>
                </div>
              </>
            )}

            {activeSection === "security" && (
              <>
                <SectionHeader
                  title="Güvenlik"
                  description="Şifrenizi güncelleyin ve bu cihazdaki oturumu güvenli şekilde yönetin."
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <InputField
                    label="Mevcut Şifre"
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(event) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        currentPassword: event.target.value,
                      }))
                    }
                    placeholder="Mevcut şifreniz"
                  />
                  <div />
                  <InputField
                    label="Yeni Şifre"
                    type="password"
                    value={passwordForm.nextPassword}
                    onChange={(event) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        nextPassword: event.target.value,
                      }))
                    }
                    placeholder="Yeni şifre"
                  />
                  <InputField
                    label="Yeni Şifre Tekrar"
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(event) =>
                      setPasswordForm((prev) => ({
                        ...prev,
                        confirmPassword: event.target.value,
                      }))
                    }
                    placeholder="Yeni şifre tekrar"
                  />
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    onClick={handleSecuritySave}
                    className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] focus:outline-none focus:ring-4 focus:ring-[#185ED8]/20"
                  >
                    Güvenli Şekilde Güncelle
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Bu cihazdaki oturumu kapat
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Bu tarayıcıdaki mevcut oturum sonlandırılır ve tekrar
                        giriş istenir.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleSignOutDevice}
                      className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Oturumu Kapat
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
