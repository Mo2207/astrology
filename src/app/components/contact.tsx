
import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import flower from "../../../public/assets/img/contact/flower.png";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-[3rem] pb-0 bg-white text-gray-900 flex justify-center">
      <div className="max-w-7xl flex justify-center">

      <div className="flex flex-col md:flex-row justify-center gap-5 min-w-[90%] w-[90%]">

        {/* LEFT SIDE */}
        <div className="flex-[3]">
          <Image
            src={flower}
            alt="picture of a flower"
            className="border-0 rounded-lg object-cover h-[15rem] w-full"
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-[2] flex flex-col justify-center md:items-center">
          <h2 className="font-bold text-2xl pb-4">{t("contact.title")}</h2>
          <p className="font-semibold pb-3 md:text-center">{t("contact.p")}</p>
          <Button onClick={() => window.open("https://t.me/Resursinner_bot", "_blank")} className="self-start md:self-center">{t("buttons.messenger")}</Button>
        </div>

      </div>
      </div>
    </section>
  );
}