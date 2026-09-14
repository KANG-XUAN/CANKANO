// pages/Home/index.jsx

import "./index.css";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import CustomizationProcess from "./CustomizationProcess";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <FeaturedProducts />
      <CustomizationProcess />
    </main>
  );
}