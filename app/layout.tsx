import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Helvica Pharma",
  description: "Professional pharmaceutical company website",
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

      </body>
    </html>
  );
}