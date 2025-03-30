import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pb-32 overflow-hidden relative"
    >
      <div className="absolute inset-0 -z-10 hero-gradient"></div>
      <div className="absolute inset-0 -z-10 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blossom-100 text-blossom-700 text-sm font-medium mb-6 animate-fade-in">
            <Star size={14} className="mr-1 text-yellow-400" />
            <span>Discover the beauty of nature</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{animationDelay: "0.1s"}}>
            Fresh Flowers, <br/>
            <span className="text-blossom-600">Delivered</span> to Your Door
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{animationDelay: "0.2s"}}>
            A premium flower subscription service that brings the beauty of fresh, seasonal blooms to your home or office on a schedule that works for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: "0.3s"}}>
            <Button size="lg" className="bg-blossom-500 hover:bg-blossom-600 text-white w-full sm:w-auto">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="group w-full sm:w-auto">
              View Our Collections
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 md:mt-16 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 animate-fade-up" style={{animationDelay: "0.4s"}}>
            <img 
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful flower arrangement" 
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1503152889424-9c280f38cb1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
              alt="Home with flowers" 
              className="w-full h-52 object-cover rounded-lg shadow-md hidden md:block"
            />
            <img 
              src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pink roses bouquet" 
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
