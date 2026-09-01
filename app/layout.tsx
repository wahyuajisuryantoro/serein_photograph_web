import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://photograph.sereinindonesia.com"),
  title: {
    default: "Serein Photograph",
    template: "%s | Serein Photograph",
  },
  description:
    "Aplikasi manajemen bisnis untuk studio fotografi. Kelola job, kru, fee, pasca produksi, dan keuangan dalam satu tempat.",
  icons: {
    apple: "/logo.png",
  },
  openGraph: {
    title: "Serein Photograph",
    description:
      "Aplikasi manajemen bisnis untuk studio fotografi. Kelola job, kru, fee, pasca produksi, dan keuangan dalam satu tempat.",
    url: "https://photograph.sereinindonesia.com",
    siteName: "Serein Photograph",
    locale: "id_ID",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
