
"use client";

import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import CheckoutButton from "./ui/button/checkoutButton";

export default function Bonus() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");
  
  const salePrice = audience === '2' ? '$9USD/370' : '$15CAD/580';
  const oldPrice = audience === '2' ? '$95USD/3700' : '$95CAD/2700';

  const checklist = t("bonus.checklist", { returnObjects: true }) as string[];

  return (
    <section id="course" className="flex flex-col justify-center items-center bg-[#FFFFFF] text-gray-900 pt-5 pb-[4rem]">
      <div className="max-w-7xl">

      {/* bonus section */}
      <div className="flex flex-col mt-4">
        <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl flex justify-center mb-6">{t("bonus.title")}</h2>
        <div className="text-center font-semibold text-[#c58c6d] text-md md:text-xl lg:text-2xl">
          {checklist.map((item, index) => (
          <p className="mb-2" key={index}>{item}</p>
          ))}
        </div>
        {/* pricing section */}
        <div className="flex flex-col items-center text-center">
          <p className="mt-4 pb-4 text-md md:text-xl lg:text-2xl">
            <span className="font-bold text-[#54994f]">{salePrice}{t("price.sign")}</span> 
            <del className="text-gray-500 ml-2 font-bold">{oldPrice}{t("price.sign")}</del>
          </p>
          <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
        </div>
      </div>

      </div>
    </section>
  );
}