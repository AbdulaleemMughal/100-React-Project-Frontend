import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-[#fafdff]">
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" toastOptions={{
          duration: 3000
        }} />
      </body>
    </html>
  );
}
