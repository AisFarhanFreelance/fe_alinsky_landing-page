import { ArrowDown2, HamburgerMenu } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import USFlagIcon from "/public/assets/flags/united-states-flag.svg";
import Alinsky_Logo from "/public/assets/logo/alinsky-logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <nav className="relative isolate mx-8 my-2 overflow-hidden alinsky-2xl:mx-[104px] md:m-8 md:mx-14 xl:mx-[104px] 2xl:mx-[344px]">
          <div className="my-5 flex flex-row items-center justify-between font-helvetica text-base leading-5">
            <Link href="#">
              <Image
                src={Alinsky_Logo}
                alt="Alinsky-Logo"
                style={{ width: "auto", height: "auto" }}
                className="rounded-2xl"
              />
            </Link>

            <div className="hidden items-center space-x-6 rounded-2xl bg-alinsky-seasalt px-6 py-4 text-alinsky-dim-gray capitalize drop-shadow-lg md:flex">
              <Link href="#">Home</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Features</Link>
              <Link href="#">Contact Us</Link>
            </div>

            <div className="hidden md:flex">
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
            </div>

            <div className="flex md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <HamburgerMenu size="32" color="#000000" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  <DropdownMenuItem>EN - English</DropdownMenuItem>
                  <DropdownMenuItem>ID - Bahasa</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
