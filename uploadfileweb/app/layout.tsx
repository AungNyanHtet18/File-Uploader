import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "File Upload App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
        <nav className="py-4 px-8 w-full flex items-center justify-between  bg-black text-white sticky top-0 z-10">
          <h3 className="text-xl">
            <Link href={`/`}>
                Home
            </Link>
          </h3>
          <ul className="flex gap-8">
            <li>
               <Link href={`/upload`}>Upload</Link>
             </li>
          </ul>
        </nav>

          {children}

        </main>
        <Toaster position="top-center" duration={1 * 4000} />
      </body>
    </html>
  );
}
