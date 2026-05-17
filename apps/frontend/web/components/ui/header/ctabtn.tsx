
import { useTranslations } from "next-intl";

export default function CTA_BTN(){

    const t = useTranslations('authbtn');

    return(
        <div className="flex flex-col w-full p-8 md:p-0 my-5 md:my-0 border-b md:border-none md:flex-row md:w-auto gap-3 text-white">

            <button
                type="button"
                className="cursor-pointer transition hover:text-[#ff6a00] hover:font-semibold"
            >
                {t('login')}
            </button>

            <button
                type="button"
                className="bg-[#FF6A00]/60 px-3 py-1 rounded-sm cursor-pointer hover:bg-[#FF6A00] hover:font-semibold transition"
            >
                {t('signup')}
            </button>

        </div>
    );
}