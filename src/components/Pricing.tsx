
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
}

const PricingPlan = ({ name, price, description, features, highlighted = false, delay }: PlanProps) => (
  <div 
    className={`rounded-xl p-8 border ${
      highlighted 
        ? "border-blossom-200 bg-blossom-50 shadow-lg" 
        : "border-gray-200 bg-white"
    } flex flex-col h-full animate-fade-up`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="mb-6">
      <h3 className="text-xl font-serif font-semibold mb-2">{name}</h3>
      <div className="mb-3">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check size={18} className="text-leaf-500 mr-2 shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="mt-auto">
      <Button 
        className={`w-full ${
          highlighted 
            ? "bg-blossom-500 hover:bg-blossom-600" 
            : "bg-white text-blossom-600 border border-blossom-300 hover:bg-blossom-50"
        }`}
      >
        Get Started
      </Button>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Petite",
      price: "$29",
      description: "Perfect for small spaces or as thoughtful gifts.",
      features: [
        "Bi-weekly delivery",
        "Seasonal blooms",
        "10-12 stems per arrangement",
        "Basic arrangement style",
        "Email support"
      ],
      highlighted: false,
      delay: 0.1
    },
    {
      name: "Signature",
      price: "$49",
      description: "Our most popular option for homes and offices.",
      features: [
        "Weekly or bi-weekly delivery",
        "Premium seasonal blooms",
        "15-18 stems per arrangement",
        "Advanced arrangement styles",
        "Priority email & phone support",
        "Special occasion upgrades"
      ],
      highlighted: true,
      delay: 0.2
    },
    {
      name: "Luxe",
      price: "$89",
      description: "Premium arrangements for discerning flower lovers.",
      features: [
        "Weekly delivery",
        "Rare and exotic blooms",
        "20-25 stems per arrangement",
        "Premium vase included quarterly",
        "Professional arrangement styles",
        "Dedicated concierge support",
        "Special occasion upgrades"
      ],
      highlighted: false,
      delay: 0.3
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan that works for your space and budget. All plans include free delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All plans include a 100% satisfaction guarantee. Not completely satisfied? <br className="hidden md:inline" />
            <a href="#" className="text-blossom-600 hover:underline">Contact us</a> and we'll make it right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
