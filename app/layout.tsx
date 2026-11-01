import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-manrope" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "Clear Cut Solutions | Grant-Funded Home Repairs & Accessibility Upgrades in London, Ontario | 1-877-228-8765",
  description:
    "London, Ontario contractor for grant-funded home repairs and accessibility upgrades through Humanity Homes, plus painting, window, gutter and pressure-washing services. 4.7 stars from 27 Google reviews. Call 1-877-228-8765.",
  openGraph: {
    title: "Clear Cut Solutions | Home Repairs & Accessibility Upgrades in London, ON",
    description: "Humanity Homes Contractor of the Year. Same-day quotes, no upselling. Call 1-877-228-8765.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${manrope.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
