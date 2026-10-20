import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isDev = process.env.NODE_ENV === "development";

// GitHub Pages no permite cabeceras HTTP propias, así que la CSP va en una etiqueta meta.
// frame-ancestors no aplica en meta; Next necesita 'unsafe-inline' en un sitio exportado.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

export const metadata: Metadata = {
  title: "Infra Ticket AI | Automatización inteligente de solicitudes de infraestructura",
  description:
    "Proyecto universitario que convierte solicitudes de infraestructura enviadas por Microsoft Teams en tickets de Azure DevOps con IA generativa.",
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
