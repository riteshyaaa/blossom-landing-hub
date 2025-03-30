
import React from "react";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      alt: "Pink and white flowers",
    },
    {
      url: "https://images.unsplash.com/photo-1561181286-d5233afaa864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Bouquet with pink roses",
    },
    {
      url: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Yellow tulips",
    },
    {
      url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "White and purple flower arrangement",
    },
    {
      url: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Peonies in vase",
    },
    {
      url: "https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Rustic flower arrangement",
    },
    {
      url: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Sunflowers",
    },
    {
      url: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Pink and white orchids",
    },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Floral Gallery</h2>
          <p className="text-lg text-gray-600">
            A glimpse of the stunning arrangements our subscribers receive every week.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl animate-fade-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
