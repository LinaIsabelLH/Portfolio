import { useLocale } from "../i18n/useLocale";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center ">
      <button
        className={`text-3xl cursor-pointer hover:bg-orange-300 px-2 rounded ${locale === "fr" ? "font-bold" : ""}`}
        onClick={() => setLocale("fr")}
      >
        🇫🇷
      </button>
      <button
        className={`text-3xl cursor-pointer hover:bg-orange-300 px-2 rounded ${locale === "en" ? "font-bold" : ""}`}
        onClick={() => setLocale("en")}
      >
        🇬🇧
      </button>
    </div>
  );
}
