import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "Iron Apex | Premium Olympic Weightlifting Gear",
    template: "%s | Iron Apex"
  },
  description: "Competition-grade Olympic weightlifting apparel, accessories, and strength sports products engineered for explosive pulls.",
  keywords: ["Olympic weightlifting", "lifting shoes", "knee sleeves", "singlets", "strength sports", "UAE lifting gear"],
  openGraph: {
    title: "Iron Apex | Premium Olympic Weightlifting Gear",
    description: "Built for maximal performance under the bar.",
    type: "website",
    images: ["/og.svg"]
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
