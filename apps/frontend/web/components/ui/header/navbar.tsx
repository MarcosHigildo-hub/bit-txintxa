import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Navbar() {
  const t = useTranslations('navegation');

  return (
    <nav className="hidden items-center gap-5 py-2 px-4 rounded-full bg-gray-700/20 text-sm text-black/60 dark:text-white/60 lg:flex">

      <Link
        className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
        href="/sell-btc"
      >
        {t('sellbtc')}
      </Link>

      <span className='h-6 w-px bg-gray-500 block'></span>

      <Link
        className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
        href="/buy-btc"
      >
        {t('buybtc')}
      </Link>

    </nav>
  );
}