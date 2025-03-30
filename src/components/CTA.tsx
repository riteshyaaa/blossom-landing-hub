
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-blossom-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Ready to brighten your days with fresh flowers?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our subscription service today and get 15% off your first month with code <span className="font-semibold text-blossom-600">BLOOM15</span>.
              </p>
              <Button size="lg" className="w-full md:w-auto bg-blossom-500 hover:bg-blossom-600">
                Get Started Now
              </Button>
            </div>
            
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-12">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Stay updated with seasonal flower tips, special offers, and exclusive discounts.
              </p>
              
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="pl-10"
                  />
                </div>
                <Button type="submit" className="bg-leaf-500 hover:bg-leaf-600">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
