import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Y2K Exim Services Pvt Ltd",
    short_name: "Y2K Exim",
    description:
      "Top DGFT Consultants, Licensed Customs House Agent (CHA), Corporate Tax & GST, and Industrial Subsidies Consultants in India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ea580c",
    icons: [
      {
        src: "/img/y2k-logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/img/y2k-logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
