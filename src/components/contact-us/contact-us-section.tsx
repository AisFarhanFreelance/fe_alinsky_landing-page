import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import FillDetailPopup from "@/components/pop-up/fill-in-details-popup";

import { Button } from "../ui/button";

const ContactUsSection = () => {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        }
      },
      { threshold: 0.8 },
    );

    for (const ref of [sectionRef, headingRef, buttonsRef]) {
      if (ref.current) observer.observe(ref.current);
    }

    return () => {
      for (const ref of [sectionRef, headingRef, buttonsRef]) {
        if (ref.current) observer.unobserve(ref.current);
      }
    };
  }, []);

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
    },
  };

  const t = useTranslations("homepage.contactUs");

  return (
    <div
      id="contact"
      ref={sectionRef}
      style={{ opacity: 0, transition: "opacity 0.8s ease" }}
      className="flex justify-center"
    >
      <div className="w-full max-w-[1920px]">
        <div className="mx-8 mb-[72px] flex h-[274px] items-center justify-center overflow-hidden alinsky-2xl:mx-[104px] md:mx-14 xl:mx-[104px] 2xl:mx-[344px]">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <div
              ref={headingRef}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease 0.2s",
              }}
              className="font-satoshi text-xl leading-[100%] font-medium text-alinsky-midnight-blue capitalize md:text-4xl xl:text-5xl"
            >
              {t("headline")}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-y-5 font-helvetica uppercase sm:flex-row sm:gap-x-5"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="overflow-hidden rounded-full"
              >
                <Button
                  asChild
                  className="relative overflow-hidden rounded-full bg-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-white hover:bg-alinsky-midnight-blue/90"
                >
                  <a
                    href="https://wa.me/6281310072368?text=*Hello%20SocialHub!*%0A%0AI%E2%80%99d%20like%20to%20discuss%20my%20brand%E2%80%99s%20needs%20directly%2C%20*how%20to%20proceed%3F*"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full"
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 0.1,
                        transition: { duration: 0.3 },
                      }}
                    />
                    {t("reachOut")}
                  </a>
                </Button>
              </motion.div>

              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="text-[15px] leading-[100%] font-bold italic"
              >
                or
              </motion.span>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="overflow-hidden rounded-full"
              >
                <Button
                  variant="outline"
                  className="relative overflow-hidden rounded-full border-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-midnight-blue"
                  onClick={() => setOpen(true)}
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-alinsky-midnight-blue opacity-0 hover:opacity-10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 0.1,
                      transition: { duration: 0.3 },
                    }}
                  />
                  {t("bookAudit")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <FillDetailPopup open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default ContactUsSection;
