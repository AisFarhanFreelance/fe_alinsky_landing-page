import { ArrowDown2, HamburgerMenu } from "iconsax-reactjs";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import USFlagIcon from "/public/assets/flags/united-states-flag.svg";

const NavbarMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <HamburgerMenu size="32" color="#000000" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 bg-[#FAFAFA] p-4 text-[#616161]"
      >
        <DropdownMenuItem className="mb-6">Home</DropdownMenuItem>
        <DropdownMenuItem className="mb-6">Pricing</DropdownMenuItem>
        <DropdownMenuItem className="mb-6">Features</DropdownMenuItem>
        <DropdownMenuItem className="mb-6">Contact Us</DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-x-2 rounded-full bg-alinsky-rich-black px-4 font-helvetica text-[15px] text-alinsky-white hover:bg-alinsky-rich-black/90 ">
                <Image
                  src={USFlagIcon}
                  alt="English"
                  className="h-6 w-6 rounded-full"
                />
                <span>EN</span>
                <ArrowDown2 size="18" color="#FFFFFF" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem>EN - English</DropdownMenuItem>
              <DropdownMenuItem>ID - Bahasa</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarMobile;
