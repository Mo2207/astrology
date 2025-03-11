
'use client'

import { useState, useEffect } from "react";
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#faf5f3] text-gray-900 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="main logo"
            width={200}
            height={200}
          />
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          {navs.map((nav) => (
            <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
              {t(`navs.${nav.id}.name`)}
            </a>
          ))}
        </nav>

        {/* Langauge Selection */}
        <div className="relative">

        {/* Language Button */}
        <Button
          className="flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {languages.find((lang) => lang.code === i18n.language)?.label}
          <ChevronDown className="w-5 h-5" />
        </Button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-600 hover:rounded-lg"
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-400">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}