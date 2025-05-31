import Image from "next/image";
import Link from "next/link";

import Alinsky_Logo from "/public/assets/logo/alinsky-logo.svg";

const Navbar = () => {
  return (
    <nav className="relative isolate mx-8 my-2 overflow-hidden">
      <div className="relative my-5 hidden items-center font-helvetica text-base leading-5 sm:flex">
        <Link href="#">
          <Image
            src={Alinsky_Logo}
            alt="Alinsky-Logo"
            style={{ width: "auto", height: "auto" }}
            className="rounded-2xl"
          />
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 rounded-2xl bg-alinsky-seasalt p-4 text-alinsky-dim-gray capitalize drop-shadow-lg">
          <Link href="#">Home</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Products</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Tutorials</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
