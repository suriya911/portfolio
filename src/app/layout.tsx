import "./globals.css";
import { Rubik } from "next/font/google";

const montserrat = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Suriya Chellappan Portfolio.",
  description: "All about Suriya's Interests & career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Suriya's Portfolio</title>
        <meta name="description" content="Suriya's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/app-favicon.ico" /> */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
