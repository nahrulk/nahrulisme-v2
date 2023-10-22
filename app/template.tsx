"use client";

import Navbar from "@/components/Navbar";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <div className="app">
      <Navbar />
      {children}
    </div>
  );
}
