import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MOUSE_EFFECT from "@/components/mouseEffect";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goodbye Gala 2024",
  description: "Heartful farewell to all seniors of SKIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#222222] select-none`}>
        <div id="mosueEffectContainer" className="cursor-none">
          <div className="hidden lg:block">
            <MOUSE_EFFECT />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
