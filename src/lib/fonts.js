import { Poppins, Inter, Montserrat, Raleway } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});
export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const raleway = Raleway({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
});
