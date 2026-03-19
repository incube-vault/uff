import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://usformfiller.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "UFF — US Form Filling | IRS Form Filling Made Simple",
    template: "%s — UFF",
  },
  description:
    "Fill and generate IRS tax forms for your US company. Built for international founders and small businesses. Free and open source.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "UFF — US Form Filling",
    title: "UFF — IRS Form Filling Made Simple",
    description:
      "Fill and generate IRS tax forms for your US company. Free, open source, no signup required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UFF — IRS Form Filling Made Simple",
    description:
      "Fill and generate IRS tax forms for your US company. Free, open source, no signup required.",
  },
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "IRS forms",
    "tax forms",
    "form filler",
    "SS-4",
    "EIN application",
    "Form 8832",
    "Form 1120",
    "US company",
    "international founders",
    "PDF form filler",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
