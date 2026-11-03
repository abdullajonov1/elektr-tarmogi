import { React } from "jimu-core";
import type { EtLang, EtMessages } from "../i18n";

interface Props {
  t: EtMessages;
  lang: EtLang;
  dark?: boolean;
  subtitle?: string;
  kpis?: React.ReactNode;
  onToggleTheme?: () => void;
  onLangChange?: (lang: EtLang) => void;
}

export default function AppHeader(props: Props): React.ReactElement {
  const { t, lang, dark = true, subtitle, kpis, onToggleTheme, onLangChange } = props;

  return (
    <header className="et-app-header">
      <div className="et-app-header-brand">
        <span className="et-app-header-mark" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.2 2.5 5.8 13.2h5.4L10 21.5l8.2-12.1h-5.6L13.2 2.5z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div className="et-app-header-copy">
          <div className="et-app-header-title">{t.appTitle}</div>
          {subtitle ? <div className="et-app-header-sub">{subtitle}</div> : null}
        </div>
      </div>
      {kpis ? <div className="et-app-header-kpis">{kpis}</div> : null}
      <div className="et-app-header-actions">
        <div className="et-lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={`et-lang-btn${lang === "uz" ? " is-active" : ""}`}
            onClick={() => onLangChange?.("uz")}
          >
            {t.langUz}
          </button>
          <button
            type="button"
            className={`et-lang-btn${lang === "ru" ? " is-active" : ""}`}
            onClick={() => onLangChange?.("ru")}
          >
            {t.langRu}
          </button>
        </div>

        <button
          type="button"
          className="et-header-btn"
          aria-label={dark ? t.lightMode : t.darkMode}
          title={dark ? t.lightMode : t.darkMode}
          onClick={onToggleTheme}
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4.2" fill="#fbbf24" />
              <g stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 3.2v1.6M12 19.2v1.6M3.2 12h1.6M19.2 12h1.6M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1" />
              </g>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.5 14.2A6.6 6.6 0 0 1 9.8 7.5a6.2 6.2 0 1 0 6.7 6.7z"
                fill="#64748b"
              />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="et-header-btn et-header-bell"
          aria-label={t.notifications}
          title={t.notifications}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 10a5 5 0 0 1 10 0c0 4 1.5 5.5 1.5 5.5H5.5S7 14 7 10z" />
            <path d="M10.2 18.5a1.8 1.8 0 0 0 3.6 0" />
          </svg>
          <span className="et-header-badge" />
        </button>

        <button
          type="button"
          className="et-header-avatar"
          aria-label={t.profile}
          title={t.profile}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="3.4" fill="#f8fafc" />
            <path
              d="M5.5 19.2c1.4-3.2 3.6-4.6 6.5-4.6s5.1 1.4 6.5 4.6"
              stroke="#f8fafc"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
