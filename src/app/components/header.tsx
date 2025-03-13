
'use client'

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button/button";
import { handleScroll, navs } from "@/lib/utils";
import logo from "../../../public/assets/img/navigation/icons/main-logo.svg";
import Image from "next/image";

const languages = [
  { code: 'en', label: 'English'},
  { code: 'ru', label: 'Russian'}
]

export default function Header() {
  const { t, i18n } = useTranslation();
  const [languagedDropdownOpen, setLanguagedDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);

  // language switcher
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setLanguagedDropdownOpen(false);
  }
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
  }, []);

  // mobile menu toggle
  const handleToggleMenu = () => {
    // setTimeout delays the state update until after the mousedown event is processed,
    // this is to prevent the menu closing from the event and re-opening from this function
    setTimeout(() => {
      setMobileMenuOpen((prev) => !prev);
    }, 1);
  };
  useEffect(() => {
    // closes mobile menu when clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      // check first that both exist and are rendered in the dom
      if (!mobileMenuRef.current || !mobileBtnRef.current) return;

      // close the menu when clicking outside
      if (
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileBtnRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    // add listener on component mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // clean up listener after
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])

  return (
    <header className="fixed top-0 left-0 w-[100vw] bg-[#faf5f3] text-gray-900 shadow-md z-50">
      <div className=" mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 mt-2 pl-4">
          <Image
            src={logo}
            alt="main logo"
            width={100}
            height={100}
            className="w-[140px] h-[50px] md:w-[160px] md:h-[70px]"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 gap-6">
          {navs.map((nav) => (
            <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition md:text-lg">
              {t(`navs.${nav.id}.name`)}
            </a>
          ))}
        </nav>

        {/* Langauge Selection */}
        <div className="relative pr-4">

        {/* Language Button */}
        <Button
          className="hidden md:flex items-center"
          onClick={() => setLanguagedDropdownOpen(!languagedDropdownOpen)}
        >
          {languages.find((lang) => lang.code === i18n.language)?.label}
          <ChevronDown className="w-5 h-5" />
        </Button>

        {/* Language Dropdown Menu */}
        {languagedDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[#faf5f3] rounded-lg shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setLanguagedDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-[#ad9585] hover:rounded-lg"
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
        </div>

        {/* mobile menu hamburger  */}
        <div className="md:hidden pr-4">
          <button 
            className="text-[#ddbea9] hover:text-[#ad9585] text-3xl"
            onClick={handleToggleMenu} // toggle menu again when button clicked
            ref={mobileBtnRef}
          >
            ☰
          </button>
        </div>

        {/* mobile menu dropdown */}
        {mobileMenuOpen && (
          <div 
            className="absolute top-[5rem] right-[1rem] p-3 border-0 rounded-xl bg-[#faf5f3] md:hidden shadow-lg"
            ref={mobileMenuRef}
          >
            <div className="flex flex-col justify-center gap-4">
              {navs.map((nav) => (
                <button 
                  key={nav.id}
                  onClick={() => handleScroll(nav.href)} 
                  className="hover:text-[#AD9585] hover:cursor-pointer transition flex flex-col py-2"
                >
                  {t(`navs.${nav.id}.name`)}
                </button>
              ))}
            </div>

            {/* language button toggle */}
            <Button
              className="items-center mt-4"
              onClick={() => {
                const nextLanguage = i18n.language === "en"? "ru" : "en";
                changeLanguage(nextLanguage);
              }}
            >
              {/* display opposite label */}
              {languages.find((lang) => lang.code === (i18n.language === "en" ? "ru" : "en"))?.label}
            </Button>

          </div>
        )}


      </div>
    </header>
  );
}