"use client";

import { usePathname } from "@/i18n/navigation";
import { Variants, motion } from "framer-motion";
import { ArrowDown2 } from "iconsax-reactjs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import NavbarMobile from "./navbar-mobile/navbar-mobile";
import USFlagIcon from "/public/assets/flags/united-states-flag.svg";
import Alinsky_Logo from "/public/assets/logo/alinsky-logo.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState<string | undefined>();

  const navItemVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const logoVariants: Variants = {
    hover: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 },
    },
  };

  const dropdownVariants: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  const underlineVariants: Variants = {
    hidden: {
      width: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    visible: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const containerVariants: Variants = {
    rest: {
      backgroundColor: "#F8FAFC",
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      backgroundColor: "#EFF6FF",
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const menuItems = ["home", "pricing", "features", "contact"];

  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const pathSegments = pathname.split("/");
    pathSegments[1] = newLocale;

    const newUrl = pathSegments.join("/");
    globalThis.location.href = newUrl;
  };

  const t = useTranslations("navbar");

  return (
    <div className="relative z-[10] w-full">
      <nav className="relative isolate mt-8 w-full px-8 transition-all duration-300 ease-in-out md:px-[104px]">
        <div className="my-5 flex flex-row items-center justify-between font-helvetica text-base leading-5">
          <motion.div whileHover="hover" variants={logoVariants}>
            <Link href="#home">
              <Image
                src={Alinsky_Logo}
                alt="Alinsky-Logo"
                className="h-[52px] w-auto"
              />
            </Link>
          </motion.div>

          <motion.div
            className="hidden h-[52px] items-center rounded-2xl bg-white/60 text-alinsky-dim-gray shadow-[5px_5px_32px_rgba(0,0,0,0.1)] backdrop-blur-md transition-shadow duration-300 ease-in-out hover:shadow-[5px_5px_32px_rgba(0,0,0,0.1)] md:flex"
            variants={containerVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            whileHover="hover"
          >
            <div className="flex items-center px-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsHovered(item)}
                  onHoverEnd={() => setIsHovered(undefined)}
                  className="relative flex h-full items-center"
                >
                  <a
                    href={`#${item}`}
                    className="relative block px-4 py-2 text-center"
                  >
                    <span className="relative inline-block pb-1">
                      {t(item)}
                      {isHovered === item && (
                        <motion.span
                          className="absolute right-0 bottom-0 left-0 h-[2px] bg-alinsky-midnight-blue"
                          variants={underlineVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        />
                      )}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="flex items-center rounded-full bg-alinsky-rich-black px-4 font-helvetica text-[15px] text-alinsky-white hover:bg-alinsky-rich-black/90">
                    <Image
                      src={USFlagIcon}
                      alt="English"
                      className="h-6 w-6 rounded-full"
                      width={24}
                      height={24}
                    />
                    <span>{currentLocale.toUpperCase()}</span>
                    <motion.div
                      animate={{ y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowDown2 size="18" color="#FFFFFF" />
                    </motion.div>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32" asChild>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                >
                  <DropdownMenuItem onClick={() => handleChange("en")}>
                    EN - English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleChange("id")}>
                    ID - Bahasa
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
