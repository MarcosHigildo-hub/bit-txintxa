"use client";

import Header from "@/components/ui/header/header";
import { useTranslations } from "next-intl";


export default function Home() {

  const t = useTranslations("HomePage");

 

 
  return (
    <main className="min-h-screen bg-[#f3efeb] dark:bg-black transition-colors duration-500">
      <section className="relative overflow-hidden">
       
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff6a0020,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)] dark:bg-[radial-gradient(circle_at_bottom_left,#ff6a0045,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)]" />

        <div className="w-full">

          <div className="bg-primary text-white shadow-[var(--shadow-orange)]relative   bg-white text-black shadow-2xl dark:border-white/10 dark:bg-[#050505] dark:text-white">

            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,#ff6a0018,transparent_55%)] dark:bg-[radial-gradient(circle_at_center,#ff6a0030,transparent_60%)]" />

            <Header/>

         
            <div className="relative z-10 flex min-h-[820px] flex-col items-center justify-center px-6 pb-36 pt-12 text-center md:px-10">

              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#ff6a0035] bg-[#ff6a0010] px-5 py-2 text-sm text-[#FFB06A] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#FF6A00]" />
                {t("btnContent")}
              </div>

  





        

              <div className="absolute right-[-30px] top-[220px] hidden rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur xl:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2137] text-[#58f0c6]">
                    T
                  </div>

                  <div>
                    <p className="text-lg text-white">USDT</p>
                    <p className="mt-1 text-2xl font-semibold text-white">
                      $13,852.93
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Active market
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}