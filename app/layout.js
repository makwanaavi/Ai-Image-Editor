import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"
import { Toaster } from "../components/ui/sonner";
import FloatingShape from "../components/FloatingShape";

const inter = Inter({
  subsets: ["latin"],
});



export const metadata = {
  title: "Pixxle",
  description: "Ai Image Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
            <FloatingShape />
            <Toaster richColors />
            {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
