import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay, generalSans, switzer } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";
import ProjectModal from "@/components/ProjectModal";

export const metadata: Metadata = {
  title: {
    default: "Cinmach Productions | Cinematic Content Agency, Bahrain",
    template: "%s | Cinmach Productions",
  },
  description:
    "Cinematic content production and brand identity agency in Manama, Bahrain. We turn viewers into paying customers for restaurants, hotels, real estate and luxury brands across the GCC.",
  metadataBase: new URL("https://cinmachproductions.com"),
  openGraph: {
    title: "Cinmach Productions | Cinematic Content Agency, Bahrain",
    description:
      "Cinematic video, photography and brand identity for ambitious brands in Bahrain and the GCC.",
    url: "https://cinmachproductions.com",
    siteName: "Cinmach Productions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${clashDisplay.variable} ${generalSans.variable} ${switzer.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-black-primary text-white-primary">
        <ModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ProjectModal />
        </ModalProvider>
      </body>
    </html>
  );
}
