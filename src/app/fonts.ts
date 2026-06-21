import { Space_Grotesk, Space_Mono, Inter, Unbounded, Rampart_One, Margarine } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["700", "800"],
});

export const rampartOne = Rampart_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rampart-one",
  weight: ["400"],
});

export const margarine = Margarine({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-margarine",
  weight: ["400"],
});
