import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";
import {Lang} from "@/context/LanguageContext";
import {Fon} from "@/context/FontSize";
import { WrapLines } from "@/context/wrapLines";
import { Them } from "@/context/ThemContext";
import "./globals.css";
import { Toaster } from "sonner";
import {Bg} from "@/context/bgContext"
import { Bgenabled } from "@/context/bgEnabled";
export const metadata: Metadata = {
  title: "Snappify",
  description: "code,snap,share your codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Lang>
<Them>
    <Fon>
        <WrapLines>
            <Bg>
                <Bgenabled>

        {children}
                </Bgenabled>

            </Bg>
        </WrapLines>



    </Fon>
</Them>
            </Lang>
          </ThemeProvider>
          <Toaster/>
        </body>
    </html>
  );
}
