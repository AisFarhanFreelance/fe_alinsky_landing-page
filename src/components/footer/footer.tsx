import { Instagram, Whatsapp } from "iconsax-reactjs";

import CallToAction from "../home/call-to-action/call-to-action";
import CatalogLinks from "./catalog-links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative mx-8 mb-6">
      <div className="absolute -top-20 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2">
        <CallToAction />
      </div>
      <div className="rounded-4xl bg-alinsky-rich-black pt-32">
        <div className="grid grid-cols-2 gap-6 p-12 text-alinsky-white">
          <div className="space-y-8">
            <h1 className="font-helvetica text-xs uppercase">Catalog</h1>
            <CatalogLinks />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-8">
              <h1 className="font-helvetica text-xs uppercase">Contact Us</h1>
              <p className="font-satoshi text-base">
                <a
                  href="mailto:info@alinsky.com"
                  className="hover:text-alinsky-silver"
                >
                  info@alinsky.com
                </a>
              </p>
            </div>
            <div className="space-y-8 justify-self-end">
              <h1 className="font-helvetica text-xs uppercase">
                Connect With Us
              </h1>
              <div className="flex flex-row justify-end space-x-1">
                <span className="cursor-pointer transition-transform duration-200 hover:scale-110">
                  <Instagram color="#ffffff" size="24" />
                </span>
                <span className="cursor-pointer transition-transform duration-200 hover:scale-110">
                  <Whatsapp color="#ffffff" size="24" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-12 py-4 text-xs text-alinsky-battleship-gray">
          <div>&copy; {currentYear} — Copyright</div>
          <div>Privacy</div>
          <div>All right reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
