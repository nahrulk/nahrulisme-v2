"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { About, Footer, Header, Skills, Testimonial, Work } from "@/container";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  );
}
