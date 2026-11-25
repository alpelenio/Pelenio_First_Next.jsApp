import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alnor Pelenio | Full Stack Developer",
  description: "I'm a passionate developer interested in creating amazing web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-slate-200 bg-slate-950">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex w-full max-w-5xl items-center justify-center gap-2 px-6 py-4"
          >
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Projects
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
