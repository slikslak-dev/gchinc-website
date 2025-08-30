import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OrganizationStructuredData, WebSiteStructuredData } from '@/components/structured-data'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Professional Sharia-Compliant Real Estate Investment | GCHI',
  description: 'Institutional-grade Ontario real estate investment opportunities. Join accredited investors earning consistent returns through professionally managed, Sharia-compliant partnerships.',
  keywords: "Ontario real estate, institutional investments, Sharia-compliant, accredited investors, professional management, Islamic finance, GCHI, real estate partnerships",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationStructuredData />
        <WebSiteStructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
