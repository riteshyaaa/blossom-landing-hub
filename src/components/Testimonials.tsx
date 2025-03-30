
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
  delay: number;
}

const Testimonial = ({ quote, author, role, avatar, stars, delay }: TestimonialProps) => (
  <div 
    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 animate-fade-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <img
        src={avatar}
        alt={author}
        className="h-10 w-10 rounded-full object-cover mr-3"
      />
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Blossom has transformed our office environment. The weekly deliveries bring a fresh energy to our workspace that clients and employees both appreciate.",
      author: "Sarah Johnson",
      role: "Office Manager",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      stars: 5,
      delay: 0.1
    },
    {
      quote: "I've tried several flower subscription services, but none compare to the quality and consistency of Blossom. Their arrangements always last well beyond a week.",
      author: "Michael Chen",
      role: "Interior Designer",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      stars: 5,
      delay: 0.2
    },
    {
      quote: "The perfect gift that keeps on giving. I purchased a 3-month subscription for my mother and she looks forward to each delivery with such excitement.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      stars: 4,
      delay: 0.3
    },
    {
      quote: "Their customer service is exceptional. When one delivery arrived damaged, they immediately sent a replacement and followed up to ensure I was satisfied.",
      author: "David Turner",
      role: "Restaurant Owner",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      stars: 5,
      delay: 0.4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our satisfied subscribers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
