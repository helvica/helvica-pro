import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata = {
  title: "Helvica Pharma",
  description: "Professional pharmaceutical company website",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      
      <body>

        <Header />
        

        {/* 👇 push content below fixed header */}
        <main >
          {children}
        </main>

        <Footer />

        
  <CookieBanner />

      </body>
    </html>
  );
}