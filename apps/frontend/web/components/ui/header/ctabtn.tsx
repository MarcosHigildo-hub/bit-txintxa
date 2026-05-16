
import { useTranslations } from "next-intl";

export default function CTA_BTN(){

    const t = useTranslations('authbtn');

    return(
        <div className="flex gap-3">

            <button
                type="button"
                className="cursor-pointer transition hover:text-[#ff6a00]"
            >
                {t('login')}
            </button>

            <button
                type="button"
                className="bg-[#FF6A00]/60 px-3 py-1 rounded-sm cursor-pointer hover:bg-[#FF6A00] transition"
            >
                {t('signup')}
            </button>

        </div>
    );
}