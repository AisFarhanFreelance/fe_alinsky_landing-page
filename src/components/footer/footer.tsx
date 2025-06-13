import { Instagram, Whatsapp } from "iconsax-reactjs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="mx-8 mb-6 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
          <div className="rounded-4xl bg-alinsky-rich-black pt-32">
            <div className="grid grid-cols-2 gap-6 p-12 text-alinsky-white">
              <div className="space-y-8">
                <h1 className="font-helvetica text-xs uppercase">Catalog</h1>
                <div className="flex flex-row justify-start space-x-8 font-satoshi text-[28px] capitalize">
                  <div className="flex flex-col space-y-3">
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Home
                      <div className="-mt-4 h-3 w-full origin-left scale-x-100 bg-alinsky-medium-slate-blue/50 transition-transform duration-300" />
                    </span>
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Pricing
                      <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Products
                      <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Contact Us
                      <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Tutorial
                      <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <span className="group mb-4 inline-block w-fit cursor-pointer">
                      Blog
                      <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-8">
                  <h1 className="font-helvetica text-xs uppercase">
                    Contact Us
                  </h1>
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
      </div>
    </div>
  );
};

export default Footer;
