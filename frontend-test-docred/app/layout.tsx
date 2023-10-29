"use client";
import type { Metadata } from "next";
import "@/styles/index.css";
import GraphQlProvider from "@/lib/Graphql/Provider";
import Navbar from "@/components/General/Navbar/Navbar";
import Footer from "@/components/General/Footer/Footer";

export const metadata: Metadata = {
  title: "Docred Test",
  description: "Front-end test for Docred"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <GraphQlProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </GraphQlProvider>
  );
}
