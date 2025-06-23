import { Instagram, Whatsapp } from "iconsax-reactjs";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.classList.remove("opacity-0", "translate-y-5");
      footerRef.current.classList.add("animate-fadeInUp");
    }
  }, []);

  const t = useTranslations("footer");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="mx-8 mb-6 alinsky-2xl:mx-[104px] md:mx-14 xl:mx-[104px] 2xl:mx-[344px]">
          <div
            ref={footerRef}
            className="translate-y-5 rounded-4xl bg-alinsky-rich-black pt-2 opacity-0 transition-all duration-700 ease-out md:pt-14 xl:pt-32"
          >
            <div className="grid-1 grid gap-12 p-6 text-alinsky-white sm:grid-cols-2 sm:gap-6 sm:p-12">
              <div className="space-y-8">
                <h1 className="animate-delay-100 font-helvetica text-xs uppercase">
                  {t("catalog")}
                </h1>
                <div className="flex flex-col space-y-3 font-satoshi text-[28px] capitalize sm:flex-row sm:space-y-0 sm:space-x-8">
                  <div className="flex flex-col space-y-3">
                    {["home", "pricing", "product"].map((item, index) => (
                      <span
                        key={item}
                        className="group mb-4 inline-block w-fit cursor-pointer"
                        style={{ transitionDelay: `${100 + index * 50}ms` }}
                      >
                        {t(item)}
                        <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-3">
                    {["contact", "tutorial", "blog"].map((item, index) => (
                      <span
                        key={item}
                        className="group mb-4 inline-block w-fit cursor-pointer"
                        style={{ transitionDelay: `${250 + index * 50}ms` }}
                      >
                        {t(item)}
                        <div className="-mt-4 h-3 w-full origin-left scale-x-0 bg-alinsky-medium-slate-blue/50 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-8">
                  <h1 className="font-helvetica text-xs uppercase transition-all delay-300 duration-500">
                    {t("contact")}
                  </h1>
                  <p className="font-satoshi text-base transition-all delay-400 duration-500">
                    <a
                      href="mailto:info@alinsky.com"
                      className="hover:text-alinsky-silver"
                    >
                      info@alinsky.com
                    </a>
                  </p>
                </div>

                <div className="space-y-8 justify-self-end">
                  <h1 className="font-helvetica text-xs uppercase transition-all delay-500 duration-500">
                    {t("connect")}
                  </h1>
                  <div className="flex flex-row justify-end space-x-1">
                    <span className="cursor-pointer transition-all delay-600 duration-500 hover:scale-110">
                      <Instagram color="#ffffff" size="24" />
                    </span>
                    <span className="cursor-pointer transition-all delay-700 duration-500 hover:scale-110">
                      <Whatsapp color="#ffffff" size="24" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between px-6 py-4 text-xs text-alinsky-battleship-gray transition-all delay-700 duration-500 sm:px-12">
              <div>&copy; {currentYear} — Copyright</div>
              <div className="transition-transform hover:scale-105">
                {t("privacy")}
              </div>
              <div className="transition-transform hover:scale-105">
                All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
