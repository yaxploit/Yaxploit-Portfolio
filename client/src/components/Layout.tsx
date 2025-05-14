import { ReactNode } from "react";
import Navbar from "./Navbar";
import StarBackground from "./StarBackground";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // Main layout wrapper: ensures full viewport height and column flex
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Starry animated background - always rendered first, so it's behind all content */}
      <StarBackground />
      {/* Main content stack, sits above the background (z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top navigation bar */}
        <Navbar />
        {/* Main page content area */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        {/* Footer always visible at the bottom */}
        <Footer />
      </div>
      {/* Global toast notifications */}
      <Toaster />
    </div>
  );
};

export default Layout;
