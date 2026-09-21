import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ms-servicios-construcciones.vercel.app"),
  title: "MS | Servicios y construcciones",
  description: "Mantenimientos, refacciones, reformas y construcciones en CABA y Gran Buenos Aires.",
  icons: {
    icon: "/favicon-ms.png",
    shortcut: "/favicon-ms.png",
  },
  openGraph: {
    title: "MS | Servicios y construcciones",
    description: "Mantenimientos, refacciones, reformas y construcciones en CABA y Gran Buenos Aires.",
    url: "/",
    siteName: "MS",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-ms.png", width: 1200, height: 630, alt: "MS — Servicios y construcciones" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS | Servicios y construcciones",
    description: "Mantenimientos, refacciones, reformas y construcciones en CABA y Gran Buenos Aires.",
    images: ["/og-ms.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
