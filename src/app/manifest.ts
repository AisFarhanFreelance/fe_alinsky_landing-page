import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alinsky",
    short_name: "Alinsky",
    description:
      "provide tailored digital solutions that respect the unique challenges and aspirations of SMEs. By focusing on cost-effective strategies, personalized service, and cutting-edge technology, we empower businesses to thrive in the digital landscape",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/assets/logo/alinsky-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
