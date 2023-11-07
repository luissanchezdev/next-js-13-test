import "./globals.css";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: [ '400', '700'],
  subsets: ['latin-ext']
})

export default function RootLayout({ children }) {

  return (
    <html lang="es-co">
      <body className={`${poppins.className} antialiased`}>
        <Navigation />
        <main className="container mx-auto bg-gray-50 p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
