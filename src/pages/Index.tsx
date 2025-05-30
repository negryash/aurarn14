
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Features from "../components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <ProductShowcase />
      <Features />
    </div>
  );
};

export default Index;
