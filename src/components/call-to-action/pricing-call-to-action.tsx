import { useTranslations } from "next-intl";

const PricingCallToAction = () => {
  const t = useTranslations("homepage.pricingCta");

  return (
    <div className="mx-12 flex h-[72px] items-center justify-center rounded-t-[48px] bg-alinsky-white">
      <span className="from-alinsky-midnight-blue font-satoshi text-xl opacity-80">
        {t("headline")}
        <b>{t("highlight")}</b>
      </span>
    </div>
  );
};

export default PricingCallToAction;
