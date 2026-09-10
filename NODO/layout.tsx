import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NODO | Mantenimiento, reparaciones y proyectos",
  description: "Un solo contacto. Todos los oficios. Mantenimiento, reparaciones, reformas y construcciones en CABA y Gran Buenos Aires.",
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
