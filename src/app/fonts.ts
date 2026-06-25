import { Space_Mono, Margarine, Rampart_One } from "next/font/google";

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const margarine = Margarine({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-margarine",
  weight: ["400"],
});

export const rampartOne = Rampart_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rampart-one",
  weight: ["400"],
});
