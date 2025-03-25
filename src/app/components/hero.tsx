
import { useTranslation } from "react-i18next";
import CheckoutButton from "./ui/button/checkoutButton";
import Image from "next/image";
// import sitting from "../../../public/assets/img/hero/woman-sitting.jpeg";
import teaching from "../../../public/assets/img/hero/teaching.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pb-[6rem] bg-[#FFFFFF] text-gray-900 flex justify-center flex-col">
      

      <div className="flex justify-center flex-col w-[90%] mx-auto pt-[8rem] pb-[4rem] md:py-[8rem]">
        <div className="font-normal text-center text-sm xxs:text-lg xs:text-xl sm:text-xl md:text-xl pb-2">{t("hero.title.title1")}</div>
        <div className="font-normal text-center text-sm xxs:text-lg xs:text-xl sm:text-xl md:text-xl pb-5">
          {t("hero.title.title2-1")}
          <span className="font-bold text-[#E69761]">{t("hero.title.title2-2")}</span>
          {t("hero.title.title2-3")}
          <span className="font-bold text-[#E69761]">{t("hero.title.title2-4")}</span>
        </div>
        <div className="font-bold text-center text-xl xxs:text-2xl xs:text-4xl sm:text-4xl md:text-6xl">{t("hero.title.title3")}</div>
        
        {/* <h2 className="font-bold text-center text-sm xxs:text-lg xs:text-2xl sm:text-2xl md:text-4xl">{t("hero.title.line1")}</h2> */}
        {/* <h2 className="pb-8 font-bold text-center text-sm xxs:text-lg xs:text-2xl sm:text-2xl md:text-4xl">{t("hero.title.line2")}</h2> */}
        {/* <div className="flex justify-center">
          <CheckoutButton className="self-center text-md sm:text-lg" text={t("buttons.start_course")}></CheckoutButton>
        </div> */}
      </div>


      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 w-[90%] h-auto max-h-[40rem] md:min-h-[20rem] mx-auto text-[#444444]">

        {/* <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2">
          <Image
            src={sitting}
            width={500}
            height={500}
            alt="woman sitting on chair"
            className="border-0 rounded-lg object-cover w-full h-full"
          />
        </div> */}

        <div className="row-span-2">
          <Image
            src={teaching}
            width={500}
            height={500}
            alt="woman teaching"
            className="border-0 rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#faf5f3] bg-center bg-no-repeat border-0 rounded-xl flex justify-center flex-col items-center">
          <div className="text-center p-4 text-sm sm:text-lg lg:text-xl">
            <h2 className="font-bold pb-6">{t("hero.title.title4")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("hero.title.title5").replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }} />
            <p className="font-semibold">{t("hero.title.title6")}</p>
          </div>
        </div>

        <div className="bg-[#faf5f3] flex justify-center items-center flex-col px-6 border-0 rounded-xl">
          <div className="text-center p-4 text-sm sm:text-lg lg:text-xl">
            {/* <h2 className="font-bold pb-6">{t("hero.title.bonusTitle")}</h2> */}
            <h2 className="font-bold pb-6" dangerouslySetInnerHTML={{ __html: t("hero.title.bonusTitle").replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }} />
            <p className="font-semibold pb-3 text-[#E69761]">{t("hero.title.bonusText1")}</p>
            <p className="font-semibold text-[#E69761]">{t("hero.title.bonusText2")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}