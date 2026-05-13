import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grace Light Aesthetics & Wellness | Med Spa in Livonia, MI",
  description:
    "Grace Light Aesthetics & Wellness is a boutique med spa in Livonia, MI offering laser treatments, RF microneedling, neurotoxins, body contouring, and more. Book your consultation today.",
  keywords:
    "med spa Livonia MI, laser hair removal, RF microneedling, neurotoxins, body contouring, ClearLift, Dye-VL, aesthetics, wellness, Grace Light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
