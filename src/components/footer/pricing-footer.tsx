import { motion } from "framer-motion";

const PricingFooter = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="mx-8 w-fit items-center justify-center rounded-full bg-alinsky-midnight-blue px-14 py-5 font-satoshi text-base font-normal text-alinsky-white alinsky-2xl:mx-[104px] md:mx-14 xl:mx-[104px] xl:flex xl:text-2xl"
      >
        Software is powerful, but paired with our strategic services,
        it&apos;s&nbsp;
        <b>
          <i>unstoppable</i>
        </b>
      </motion.div>
    </div>
  );
};

export default PricingFooter;
