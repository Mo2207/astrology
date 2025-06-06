
import { useTranslation } from "react-i18next";
import { handleScroll } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/assets/img/navigation/icons/main-logo.svg";
import instagram from "../../../public/assets/img/navigation/icons/instagram.svg";
import facebook from "../../../public/assets/img/navigation/icons/facebook.svg";
// import clicks from "../../../public/assets/img/icons/clicks-logo.webp";

export default function Footer() {
  const { t } = useTranslation();

  const links = t("footer.list", { returnObjects: true }) as Array<{ title: string; link: string; logo: string }>;

  // defined custom navs here since contact isnt needed it is already at the bottom of page
  const navs = [
    { id: 1, name: "About", href: "about" },
    { id: 2, name: "Course", href: "course" },
    { id: 3, name: "Reviews", href: "reviews" },
  ];

  return (
    <>
    <section id="footer" className="bg-[#faf5f3] text-gray-900">
      <div className="flex justify-center flex-col pb-10">

        {/* logo & social links */}
        <div className="flex flex-row justify-between px-4">
          {/* LEFT SIDE */}
          <Image
            src={logo}
            alt="main logo"
            width={100}
            height={100}
            className="w-[10rem] h-[4rem] md:w-[14rem] md:h-[4rem] mt-2"
          />
          {/* RIGHT SIDE */}
          <div className="flex flex-row gap-3 items-center">
            <a href="https://www.instagram.com/maryko_soul?igsh=Znd5YmMwaGV2OWg2&utm_source=qr">
              <Image
                src={instagram}
                alt="instagram icon"
                width={100}
                height={100}
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=1349430859&mibextid=LQQJ4d">
              <Image
                src={facebook}
                alt="facebook icon"
                width={100}
                height={100}
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* navigation */}
        <nav className="flex gap-10 justify-center font-semibold border-t border-b border-[#DDBEA9] mb-10 py-2 px-5 text-md md:text-xl">
            {navs.map((nav) => (
              <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
                {t(`navs.${nav.id}.name`)}
              </a>
            ))}
          </nav>

        {/* links */}
        <div className="flex justify-center gap-4 sm:gap-10 md:gap-12 px-5">
          {links.map((item, index) => (
            <div
              key={index}
              className="text-sm cursor-pointer flex justify-center"
            >
              <a 
                href={item.link}
                target="_blank"
                className="hover:underline flex justify-center items-center"
              >
                {item.title}
                {item.logo && <img src={item.logo} alt="TheClicks logo" className="w-[4rem] h-[4rem]" />}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* spacer to prevent button covering footer on mobile */}
    <div className="h-[80px] md:hidden bg-[#faf5f3]" />
    </>
  );
}