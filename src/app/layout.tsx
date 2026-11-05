import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LAGUNE FITNESS CLUB | Premium Immersive Fitness Experience | Somone, Sénégal",
  description:
    "Club de remise en forme d'exception à La Somone, Petite Côte du Sénégal. Musculation haute performance, cardio training, coaching privé et ambiance premium.",
  keywords: [
    "Lagune Fitness Club",
    "Salle de sport Somone",
    "Gym Senegal",
    "Fitness Somone Ngaparou",
    "Musculation Petite Côte",
    "Coaching sportif Saly",
    "Premium Gym Senegal",
  ],
  authors: [{ name: "Lagune Fitness Club Somone" }],
  openGraph: {
    title: "LAGUNE FITNESS CLUB | Somone, Sénégal",
    description: "YOUR BODY. YOUR LIMITS. YOUR JOURNEY. Découvrez l'expérience fitness premium à La Somone.",
    url: "https://lagunefitnessclub.com",
    siteName: "Lagune Fitness Club",
    locale: "fr_SN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="font-sans bg-[#090909] text-zinc-100 antialiased selection:bg-[#00F59B] selection:text-black">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
