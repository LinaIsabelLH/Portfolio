import { useLocale } from "../i18n/useLocale";
import { LocaleKey } from "../i18n/locales";

export default function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();

	const languages = [
		{ code: "fr" as LocaleKey, label: "FR", flag: "FR" },
		{ code: "en" as LocaleKey, label: "EN", flag: "EN" },
	];

	return (
		<div className="flex items-center space-x-1 bg-slate-900/50 rounded-lg p-1.5 border border-slate-700/50">
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => setLocale(lang.code)}
					className={`
            px-3 py-2 rounded-md text-xl font-medium transition-all duration-300 min-w-[44px] flex items-center justify-center
            ${locale === lang.code ? "bg-orange-400 shadow-neon" : "text-zinc-100 hover:text-slate-900 hover:bg-orange-300"}
          `}
				>
					<span className="text-sm font-semibold">{lang.label}</span>
				</button>
			))}
		</div>
	);
}