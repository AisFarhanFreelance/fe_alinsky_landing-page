import { usePathname } from "@/i18n/navigation";
import { ArrowDown2, CloseSquare, HamburgerMenu } from "iconsax-reactjs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import IDFlagIcon from "/public/assets/flags/indonesia-flag.svg";
import USFlagIcon from "/public/assets/flags/united-states-flag.svg";

const NavbarMobile = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const flagIcon = currentLocale === "id" ? IDFlagIcon : USFlagIcon;

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const pathSegments = pathname.split("/");
    pathSegments[1] = newLocale;
    const newUrl = pathSegments.join("/");
    globalThis.location.href = newUrl;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div
          className="cursor-pointer rounded-[12px] bg-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseSquare size="32" color="#000000" />
          ) : (
            <HamburgerMenu size="32" color="#000000" />
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mx-8 w-[calc(100vw-64px)] bg-[#FAFAFA] p-4 text-[#616161] sm:mx-0 sm:w-sm"
      >
        {["home", "pricing", "features", "contact"].map((item) => (
          <DropdownMenuItem asChild className="mb-6" key={item}>
            <a href={`#${item}`}>{t(item)}</a>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-x-2 rounded-full bg-alinsky-rich-black px-4 font-helvetica text-[15px] text-alinsky-white hover:bg-alinsky-rich-black/90">
                <Image
                  src={flagIcon}
                  alt="Language"
                  className="h-6 w-6 rounded-full"
                />
                <span>{currentLocale.toUpperCase()}</span>
                <ArrowDown2 size="18" color="#FFFFFF" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem onClick={() => handleChange("en")}>
                EN - English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleChange("id")}>
                ID - Bahasa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarMobile;
