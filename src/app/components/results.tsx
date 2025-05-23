"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import check from "../../../public/assets/img/icons/check.svg";


export default function Results() {
  const { t } = useTranslation();

  const results = t("results.list", { returnObjects: true }) as string[];

  return (
    <section id="results" className="bg-[#faf5f3] text-gray-900 h-auto pt-3 pb-5 flex items-center justify-center">
      <div className="max-w-7xl flex justify-center items-center flex-col">

        <div className="flex items-center justify-center flex-col w-[90%]">
          <h1 
            className="font-bold text-2xl md:text-3xl text-center p-5" 
            dangerouslySetInnerHTML={{ 
              __html: t("results.title")
                .replace(/<strong>/g, "<b>")
                .replace(/<\/strong>/g, "</b>")
                .replace(/&nbsp;/g, "&nbsp;") 
            }}
          />
          <div className="p-5 text-md md:text-lg">
            {results.map((item, index) => (
              <p
                key={index}
                className="font-semibold mb-3 flex flex-row items-center"
              >
                <Image
                  src={check}
                  alt="check mark icon"
                  className="w-[2rem] h-[2rem] mr-1"
                />
                {item}
              </p>
            ))}
          </div>
        </div>

        <h2 
          className="text-lg md:text-xl font-normal px-3 py-2 self-center text-center" 
          dangerouslySetInnerHTML={{ 
            __html: t("results.h2")
              .replace(/<strong>/g, "<b>")
              .replace(/<\/strong>/g, "</b>")
              .replace(/&nbsp;/g, " ") 
          }} 
        />

      </div>
    </section>
  )
}