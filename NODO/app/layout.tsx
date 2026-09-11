import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nodo-refacciones.vercel.app"),
  title: "NODO | Mantenimiento, reparaciones y proyectos",
  description: "Un solo contacto. Todos los oficios. Mantenimiento, reparaciones, reformas y construcciones en CABA y Gran Buenos Aires.",
  openGraph: {
    title: "NODO | Mantenimiento, reparaciones y reformas",
    description: "Un solo contacto. Todos los oficios. Un espacio en orden.",
    url: "/",
    siteName: "NODO",
    locale: "es_AR",
    type: "website",
  images: [{
  url: "/images/nodo-cover-01.jpg",
  width: 1774,
  height: 887,
  alt: "NODO — Mantenimiento, reparaciones, reformas y construcciones",
}],
  },
  twitter: {
    card: "summary_large_image",
    title: "NODO | Mantenimiento, reparaciones y reformas",
    description: "Un solo contacto. Todos los oficios. Un espacio en orden.",
  images: ["/images/nodo-cover-01.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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

