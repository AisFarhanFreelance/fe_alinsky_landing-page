import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export { helvetica, satoshi };
