
import React from "react";
import { CalendarDays, Truck, RefreshCw, Heart, Package, CreditCard } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 feature-card transition-all duration-300 animate-fade-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="h-12 w-12 rounded-lg bg-blossom-100 flex items-center justify-center text-blossom-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <CalendarDays />,
      title: "Flexible Subscriptions",
      description: "Choose from weekly, bi-weekly, or monthly deliveries that fit your lifestyle and budget.",
      delay: 0.1
    },
    {
      icon: <Truck />,
      title: "Free Delivery",
      description: "Enjoy free delivery on all subscription orders, with same-day delivery available in select areas.",
      delay: 0.2
    },
    {
      icon: <RefreshCw />,
      title: "Easy Changes",
      description: "Skip, pause, or modify your subscription anytime through our user-friendly dashboard.",
      delay: 0.3
    },
    {
      icon: <Heart />,
      title: "Expertly Curated",
      description: "Each arrangement is designed by professional florists using the season's best blooms.",
      delay: 0.4
    },
    {
      icon: <Package />,
      title: "Eco-Friendly Packaging",
      description: "Our bouquets come in biodegradable and recyclable packaging to reduce environmental impact.",
      delay: 0.5
    },
    {
      icon: <CreditCard />,
      title: "Secure Payments",
      description: "Safe and secure payment processing with support for all major credit cards and digital wallets.",
      delay: 0.6
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Our Service</h2>
          <p className="text-lg text-gray-600">
            Discover the benefits of our flower subscription service and how it brings convenience and joy to your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
