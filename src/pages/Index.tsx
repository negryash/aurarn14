
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Features from "../components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <ProductShowcase />
      <Features />
    </div>
  );
};

export default Index;
