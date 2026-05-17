"use client"

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import { Menu, X } from 'lucide-react';
import CTA_BTN from './ctabtn';
import ToggleLangBtn from '../button/ToggleLangBtn';
import { useState } from 'react';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const t = useTranslations('navegation');

  return (
    <nav className=" ">
      <div className="hidden items-center gap-5 py-2 px-4 rounded-full bg-gray-700/20 text-sm text-black/60 dark:text-white/60 md:flex">

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


      </div>

      <button
        className="md:hidden toggleMenu cursor-pointer"
        onClick={() => setOpen(true)}
        >
        <Menu className='text-white'/>
      </button>

      <div 
        onClick={() => setOpen(false)}
        className={`absolute huburgerMenu bg-gray-600/50 right-0 transition-opacity duration-500 top-0 bottom-0 w-screen h-screen flex justify-end items-end md:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>

      <div className="w-[75%] h-full bg-black">

        <button className='relative w-full border-b cursor-pointer py-8 px-4 flex items-center justify-end '>
          <X className='hover:text-amber-50 text-white/30 cursor-pointer '/>
        </button>

        <div className="items-start gap-8 py-4 px-4 border-b text-md text-black/60 dark:text-white/60 flex flex-col">
          <Link
            className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
            href="/sell-btc"
          >
            {t('sellbtc')}
          </Link>

          <Link
            className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
            href="/buy-btc"
          >
            {t('buybtc')}
          </Link>
        </div>

        <CTA_BTN/>

        <ToggleLangBtn/>


        
      </div>

      </div>
      

    </nav>
  );
}