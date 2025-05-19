import { Instagram, Whatsapp } from "iconsax-reactjs";

import CallToAction from "../home/call-to-action/call-to-action";

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
            <div className="flex flex-row justify-start space-x-8 font-satoshi text-[28px] capitalize">
              <div className="flex flex-col space-y-3">
                <span className="mb-4 w-fit">
                  Home
                  <div className="-mt-4 h-3 w-full bg-alinsky-medium-slate-blue/50" />
                </span>
                <span className="w-fit">Pricing</span>
                <span className="w-fit">Products</span>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="w-fit">Contact Us</span>
                <span className="w-fit">Tutorial</span>
                <span className="w-fit">Blog</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-8">
              <h1 className="font-helvetica text-xs uppercase">Contact Us</h1>
              <p className="font-satoshi text-base">
                <a
                  href="mailto:info@alinsky.com"
                  className="hover:text-alinsky-battleship-gray"
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
                <Instagram color="#ffffff" size="18" />
                <Whatsapp color="#ffffff" size="18" />
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
