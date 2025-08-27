import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrganizationStructuredData, WebSiteStructuredData } from '@/components/structured-data'

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Canadian Homes Inc. — Ontario Real Estate Investments",
  description: "Invest in income-producing rentals and thoughtful developments across Ontario. Two tiers (6%–10% target). Quarterly payouts after year one.",
  keywords: "Ontario real estate, rental investments, accredited investors, OM exemption, income-producing properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
