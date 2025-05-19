import Image from "next/image";
import Link from "next/link";

import Alinsky_Logo from "/public/assets/logo/alinsky-logo.svg";

const Navbar = () => {
  return (
    <nav className="relative isolate overflow-hidden">
      <div className="mx-8 my-2 hidden items-center justify-between font-helvetica text-base leading-5 sm:flex">
        <Link href="#">
          <Image
            src={Alinsky_Logo}
            alt="Alinsky-Logo"
            style={{ width: "auto", height: "auto" }}
            className="rounded-2xl"
          />
        </Link>
        <div className="my-5 space-x-8 rounded-2xl bg-alinsky-white p-4 drop-shadow-lg">
          <Link href="#">Home</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Product</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Blog</Link>
        </div>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
