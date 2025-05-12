import { HamburgerMenu } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";

import Alinsky from "/public/assets/logo/alinsky-logo.svg";

const Navbar = () => {
  return (
    <div className="bg-alinsky-white">
      <div className="hidden sm:flex flex-row gap-8 justify-center items-center py-5">
        <Link href="#">About</Link>
        <Link href="#">Market</Link>
        <Link href="#">
          <Image
            src={Alinsky}
            alt="Alinsky-Logo"
            style={{ width: "40px", height: "auto" }}
          />
        </Link>
        <Link href="#">Service</Link>
        <Link href="#">Blog</Link>
      </div>

      <div className="flex sm:hidden flex-row justify-between items-center px-12 py-5">
        <Link href="#">
          <Image
            src={Alinsky}
            alt="Alinsky-Logo"
            style={{ width: "40px", height: "auto" }}
          />
        </Link>
        <HamburgerMenu color="#292d32" />
      </div>
    </div>
  );
};

export default Navbar;
