import React from "react";
import testimonialData from "../Data/testimonialData.json";

// Define the type for a single testimonial item
type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {(testimonialData as Testimonial[]).map((item, index) => (
          <div
            key={index}
            className="bg-secondary/20 p-6 rounded-lg shadow-md text-left"
          >
            <p className="text-text italic mb-4">“{item.quote}”</p>
            <h4 className="text-md font-semibold text-text">{item.name}</h4>
            <p className="text-sm text-text/70">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
