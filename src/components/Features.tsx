import React, { useState } from "react";
import {
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaWrench,
  FaLightbulb,
  FaChalkboardTeacher,
  FaStar,
  FaMapMarkerAlt,
  FaPaintRoller,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import {FaApple, FaUsers } from "react-icons/fa";
import ScrollFloat from "../assets/Anim/ScrollFloat";
import { motion } from "framer-motion";
import Img1 from "../assets/Img/1.png"
import Img2 from "../assets/Img/2.png"
import Img3 from "../assets/Img/3.png"


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GradientButton from "./GradientButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const missionCarousel = [
  {
    image: Img1,
    title: "Our Mission",
    description: "Connecting you with trusted professionals in minutes, not hours."
  },
  {
    image: Img2,
    title: "Quality Assurance",
    description: "Every professional is vetted and background checked."
  },
  {
    image: Img3,
    title: "24/7 Availability",
    description: "Services available whenever you need them, day or night."
  }
];

const categories = [
  {
    id: "plumber",
    label: "Plumbing",
    icon: <FaWrench className="text-xl" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "electrician",
    label: "Electrical",
    icon: <FaLightbulb className="text-xl" />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "tutor",
    label: "Tutoring",
    icon: <FaChalkboardTeacher className="text-xl" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "painter",
    label: "Painting",
    icon: <FaPaintRoller className="text-xl" />,
    color: "bg-green-100 text-green-600",
  },
];

const professionals = [
  {
    id: "1",
    name: "Anurup Millan",
    role: "Plumber Expert",
    category: "plumber",
    rating: 4.5,
    ratingCount: 1245,
    rate: 500,
    location: "Guwahati, Assam",
    image: "/img/anurup.jpg",
    isTopRated: true,
    isVerified: true,
    isAvailable: true,
    isSponsored: false,
  },
  {
    id: "2",
    name: "Aakash Aakash",
    role: "Electrician",
    category: "electrician",
    rating: 5,
    ratingCount: 892,
    rate: 450,
    location: "Punjab",
    isTopRated: true,
    isVerified: true,
    isAvailable: false,
    isSponsored: true,
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Math Tutor",
    category: "tutor",
    rating: 4.8,
    ratingCount: 567,
    rate: 600,
    location: "Bangalore, Karnataka",
    isTopRated: false,
    isVerified: true,
    isAvailable: true,
    isSponsored: true,
  },
];

// Enhanced Verified Badge
const VerifiedBadge = () => (
  <div className="absolute top-3 right-3 z-10">
    <MdVerified  className="text-green-500 text-2xl drop-shadow" title="Verified" />
  </div>
);

// Trophy Top-Rated Badge
const TopRatedBadge = () => (
  <div className="absolute top-0.5 right-0.5 z-10 flex items-center gap-1 bg-secondary/90 text-white px-2 py-1 rounded-full shadow">
    <FaTrophy className="text-xs" />
  
  </div>
);

const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProfessionals =
    activeCategory === "all"
      ? professionals
      : professionals.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      
      {/* Hero + USPs */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFloat
          animationDuration={1.5}
          ease="power3.out"
          scrollStart="top 80%"
          scrollEnd="bottom 30%"
          stagger={0.05}
          textClassName="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Seamless Services, Anytime, Anywhere
        </ScrollFloat>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in [animation-delay:0.3s]">
          Discover fast, reliable, and trusted solutions with our 24/7 professional services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <FaClock className="text-4xl text-green-500" />, label: "24/7 Availability", description: "Access our services anytime, day or night." },
            { icon: <FaShieldAlt className="text-4xl text-green-500" />, label: "Verified & Safe", description: "Work with trusted, vetted professionals." },
            { icon: <FaBolt className="text-4xl text-green-500" />, label: "Instant Response", description: "Get help in minutes, not hours." },
          ].map(({ icon, label, description }) => (
            <div
              key={label}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden animate-fade-in [animation-delay:0.4s]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{label}</h3>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Carousel */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              swipeable={true}
              dynamicHeight={false}
              emulateTouch={true}
            >
              {missionCarousel.map((item, index) => (
                <div key={index} className="relative h-96">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-8">
                      <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                      <p className="text-xl max-w-2xl mx-auto">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Header */}
    

 {/* Categories */}
{/* Category Filter with Connected Highlight */}
<div className="bg-background pt-5 pb-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
      Browse Services
    </h3>

    {/* Scrollable Tabs Container */}
    <div className="relative overflow-x-auto scrollbar-hide">
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 lg:gap-4 px-1 min-w-max pb-2 border-b border-secondary/30">

        {/* All Professionals */}
        <button
          onClick={() => setActiveCategory("all")}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${
            activeCategory === "all"
              ? "bg-white shadow-md border-primary text-primary scale-105"
              : "bg-secondary/10 text-gray-600 hover:bg-white hover:shadow border-transparent"
          }`}
        >
          All Professionals
        </button>

        {/* Dynamic Categories */}
        {categories.map(({ id, label, icon }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm sm:text-base font-medium transition-all duration-300 border ${
                isActive
                  ? `bg-white text-primary shadow-md border-primary scale-105`
                  : "bg-secondary/10 text-gray-600 hover:bg-white hover:shadow border-transparent"
              }`}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </div>
    </div>
  </div>
</div>



      {/* Professionals Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {activeCategory === "all"
              ? "All Professionals"
              : `${categories.find((c) => c.id === activeCategory)?.label} Professionals`}
          </h3>

          {filteredProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProfessionals.map((pro) => (
                <motion.div
                  key={pro.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
                >
                  {/* Verified Badge */}
                  {pro.isVerified && <VerifiedBadge />}

                  {/* Card Image with Top Badge */}
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className="relative w-24 h-28 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      {pro.isTopRated && <TopRatedBadge />}
                      <img
                        src={pro.image}
                        alt={pro.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg">{pro.name}</h4>
                      <p className="text-sm text-gray-500">{pro.role}</p>
                    </div>
                  </div>

                  {/* Rating and Rate */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium mr-1">{pro.rating.toFixed(1)}</span>
                      <span className="text-xs text-gray-500">
                        ({pro.ratingCount > 1000
                          ? `${(pro.ratingCount / 1000).toFixed(1)}k+`
                          : pro.ratingCount})
                      </span>
                    </div>
                    <div className="border border-green-500 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      ₹{pro.rate}/hr
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    <span className="truncate">{pro.location}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pro.isSponsored && (
                      <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                        Sponsored
                      </span>
                    )}
                    {pro.isAvailable ? (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        Available Now
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        Not Available
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="">
 <GradientButton to="#" text="Book Now" className="w-full justify-center" size="sm" />
</div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">No professionals available</h4>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any professionals in this category. Try another category or check back later.
              </p>
            </div>
          )}
        </div>
      </div>

{/* Testimonials */}
<div className="bg-gray-50 py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
    >
      What Our <span className="text-green-600">Customers</span> Love
    </motion.h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Ritika",
          quote: "An electrician arrived in just 30 minutes!",
          rating: 5,
          image: "/img/ritika.jpg"
        },
        {
          name: "Amit",
          quote: "The professionals are verified and trustworthy.",
          rating: 5,
          image: "/img/amit.jpg"
        },
        {
          name: "Sneha",
          quote: "The app's support team is amazing!",
          rating: 4,
          image: "/img/sneha.jpg"
        }
      ].map(({ name, quote, rating, image }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a7b8b5c3a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a7b8b5c3a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                  }}
                />
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, j) => (
                <FaStar 
                  key={j} 
                  className={`text-lg ${j < rating ? "text-yellow-400" : "text-gray-300"}`} 
                />
              ))}
            </div>
            
            <blockquote className="text-gray-600 italic mb-4 text-md leading-relaxed">
              "{quote}"
            </blockquote>
            
            <p className="font-semibold text-gray-900">— {name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>



{/* Trust Badges */}
<div className="bg-white py-16 relative">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>
  </div>
  
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center"
    >
      {[
        { 
          icon: <FaCheckCircle className="text-green-500 text-3xl md:text-4xl" />, 
          label: "Verified Professionals",
          description: "Background checked and certified"
        },
        { 
          icon: <FaStar className="text-yellow-400 text-3xl md:text-4xl" />, 
          label: "5-Star Rated Services",
          description: "Rated by thousands of customers"
        },
        { 
          icon: <FaBolt className="text-green-500 text-3xl md:text-4xl" />, 
          label: "Instant Response",
          description: "Average response time under 30 mins"
        },
      ].map(({ icon, label, description }) => (
        <div 
          key={label}
          className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
        >
          <div className="p-4 rounded-full bg-green-50 text-green-500 group-hover:bg-green-100 transition-colors duration-300">
            {icon}
          </div>
          <div>
            <h4 className="text-gray-800 font-bold text-lg md:text-xl mb-1">{label}</h4>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</div>

{/* CTA */}
<div className="bg-gray-50  py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-primary mb-6"
        >
          Join Our <span className="text-secondary">Growing</span> Community
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-textSecondary mb-8 max-w-2xl mx-auto"
        >
          Download our app now and experience seamless service booking in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
        <GradientButton
  to="https://play.google.com/store/apps/details?id=com.kaambazar.com"
  text="Get It on Google Play"
  icon={<IoLogoGooglePlaystore className="w-5 h-5" />}
  iconPosition="left"
  size="md"
  isExternal={true}
/>

          <GradientButton
            to="/"
            text="Get It on App Store"
            icon={<FaApple />}
            iconPosition="left"
           
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-6 text-textSecondary text-sm"
        >
          <div className="flex items-center gap-2">
            <FaUsers />
            <span>10,000+ Happy Customers</span>
          </div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </div>





    </section>
  );
};

export default Features;
