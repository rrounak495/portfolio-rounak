import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rounak Rathod | AI Engineer & ML Developer",
  description:
    "Portfolio of Rounak Rathod — AI Engineer, Machine Learning Engineer, and Generative AI Developer specializing in production-ready AI products, computer vision, and scalable applications.",
  keywords: [
    "Rounak Rathod",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "Deep Learning",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "Next.js",
    "Mumbai",
  ],
  authors: [{ name: "Rounak Rathod" }],
  creator: "Rounak Rathod",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rounak Rathod | AI Engineer & ML Developer",
    description:
      "Building production-ready AI products and scalable intelligent applications.",
    siteName: "Rounak Rathod Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rounak Rathod | AI Engineer & ML Developer",
    description:
      "Building production-ready AI products and scalable intelligent applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rounak Rathod",
  jobTitle: "AI Engineer",
  description:
    "AI/ML Engineer specializing in Machine Learning, Deep Learning, Computer Vision, and Generative AI.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/rounakrathod",
    "https://linkedin.com/in/rounakrathod",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
