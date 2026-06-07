import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REBORN: Waste to Worth | Eco-Friendly Bio-Box Packaging",
  description: "Bio-Box: Kemasan Makanan Organik dan Ekonomis dari Serat Pelepah Pisang & Kulit Jagung. 100% biodegradable dan bebas Styrofoam karsinogenik.",
  keywords: ["REBORN", "Bio-Box", "Eco-Friendly", "Kuningan", "Pelepah Pisang", "Kulit Jagung", "Biodegradable", "B2B UMKM", "TPA Ciniru"],
  authors: [{ name: "REBORN Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
