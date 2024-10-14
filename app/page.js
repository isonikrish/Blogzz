'use client'

import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
