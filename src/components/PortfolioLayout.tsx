"use client";

import type { ReactNode } from "react";
import { ChatDialog } from "./ChatDialog";
import Header from "./Header";
import Footer from "./Footer";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      <Footer />

      {/* Chat Dialog */}
      <ChatDialog />
    </div>
  );
}
