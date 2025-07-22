import React, { useState } from "react";
import {
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaWrench,
  FaLightbulb,
  FaChalkboardTeacher,
  FaPaintRoller,
  FaTrophy,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaApple,
  FaUsers,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import ScrollFloat from "../assets/Anim/ScrollFloat";
import { motion } from "framer-motion";
import Img1 from "../assets/Img/1.png";
import Img2 from "../assets/Img/2.png";
import Img3 from "../assets/Img/3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GradientButton from "./GradientButton";

// Define types for data structures
interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface Professional {
  id: string;
  name: string;
  role: string;
  category: string;
  rating: number;
  ratingCount: number;
  rate: number;
  location: string;
  image: string;
  isTopRated: boolean;
  isVerified: boolean;
  isAvailable: boolean;
  isSponsored: boolean;
}

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  image: string;
}

// Data
const missionCarousel: CarouselItem[] = [
  {
    image: Img1,
    title: "Our Mission",
    description:
      "Connecting you with trusted professionals in minutes, not hours.",
  },
  {
    image: Img2,
    title: "Quality Assurance",
    description: "Every professional is vetted and background checked.",
  },
  {
    image: Img3,
    title: "24/7 Availability",
    description: "Services available whenever you need them, day or night.",
  },
];

const categories: Category[] = [
  {
    id: "plumber",
    label: "Plumbing",
    icon: <FaWrench className="text-lg" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "electrician",
    label: "Electrical",
    icon: <FaLightbulb className="text-lg" />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "tutor",
    label: "Tutoring",
    icon: <FaChalkboardTeacher className="text-lg" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "painter",
    label: "Painting",
    icon: <FaPaintRoller className="text-lg" />,
    color: "bg-green-100 text-green-600",
  },
];

const professionals: Professional[] = [
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
    image: "/img/aakash.jpg",
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
    image: "/img/priya.jpg",
    isTopRated: false,
    isVerified: true,
    isAvailable: true,
    isSponsored: true,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Ritika",
    quote: "An electrician arrived in just 30 minutes!",
    rating: 5,
    image: "/img/ritika.jpg",
  },
  {
    name: "Amit",
    quote: "The professionals are verified and trustworthy.",
    rating: 5,
    image: "/img/amit.jpg",
  },
  {
    name: "Sneha",
    quote: "The app's support team is amazing!",
    rating: 4,
    image: "/img/sneha.jpg",
  },
];

// Components
const VerifiedBadge: React.FC = () => (
  <div className="absolute top-2 right-2 z-10">
    <MdVerified
      className="text-green-500 text-xl drop-shadow"
      title="Verified Professional"
    />
  </div>
);

const TopRatedBadge: React.FC = () => (
  <div className="absolute top-1 right-1 z-10 flex items-center gap-1 bg-secondary/90 text-white px-2 py-0.5 rounded-full shadow text-xs">
    <FaTrophy className="text-l" />
  </div>
);

const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProfessionals =
    activeCategory === "all"
      ? professionals
      : professionals.filter(
          (p) => p.isAvailable && p.category === activeCategory
        );

  return (
    <section className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero + USPs */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 text-center">
        <ScrollFloat
          animationDuration={1.2}
          ease="power3.out"
          scrollStart="top 90%"
          scrollEnd="bottom 20%"
          stagger={0.05}
          textClassName="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Seamless Services, Anytime, Anywhere
        </ScrollFloat>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover fast, reliable, and trusted solutions with our 24/7
          professional services.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 mt-8">
          {[
            {
              icon: <FaClock className="text-3xl text-green-500" />,
              label: "24/7 Availability",
              description: "Access our services anytime, day or night.",
            },
            {
              icon: <FaShieldAlt className="text-3xl text-green-500" />,
              label: "Verified & Safe",
              description: "Work with trusted, vetted professionals.",
            },
            {
              icon: <FaBolt className="text-3xl text-green-500" />,
              label: "Instant Response",
              description: "Get help in minutes, not hours.",
            },
          ].map(({ icon, label, description }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-3">{icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {label}
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Carousel */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
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
              ariaLabel="Mission and Services Carousel"
            >
              {missionCarousel.map((item, index) => (
                <div key={index} className="relative h-64 sm:h-80 md:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                        {item.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-background py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Browse Services
          </h3>
          <div className="relative overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-start sm:justify-center gap-2 pb-2 border-b border-secondary/20">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === "all"
                    ? "bg-white shadow-md border-primary text-primary"
                    : "bg-secondary/10 text-gray-600 hover:bg-white hover:shadow border-transparent"
                } min-w-[120px] justify-center`}
                aria-label="All Professionals"
              >
                All Professionals
              </button>
              {categories.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === id
                      ? "bg-white shadow-md border-primary text-primary"
                      : "bg-secondary/10 text-gray-600 hover:bg-white hover:shadow border-transparent"
                  } min-w-[120px] justify-center`}
                  aria-label={label}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professionals Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {activeCategory === "all"
              ? "All Professionals"
              : `${
                  categories.find((c) => c.id === activeCategory)?.label
                } Professionals`}
          </h3>
          {filteredProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProfessionals.map((pro) => (
                <motion.div
                  key={pro.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 relative"
                >
                  {pro.isVerified && <VerifiedBadge />}
                  <div className="flex items-start gap-3 mb-4 relative">
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 animate-pulse">
                      {pro.isTopRated && <TopRatedBadge />}
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ccc"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M6 20c0-3.333 4-5 6-5s6 1.667 6 5" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h4 className="font-semibold text-base sm:text-lg">
                        {pro.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {pro.role}
                      </p>

                      <div className="flex items-center mt-1 text-xs sm:text-sm">
                        <FaStar className="text-yellow-400 mr-1 text-sm" />
                        <span className="font-medium">
                          {pro.rating.toFixed(1)}
                        </span>
                        <span className="text-gray-500 ml-1">
                          (
                          {pro.ratingCount > 1000
                            ? `${(pro.ratingCount / 1000).toFixed(1)}k+`
                            : pro.ratingCount}
                          )
                        </span>
                      </div>

                      <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                        <FaMapMarkerAlt className="mr-1.5 text-gray-400" />
                        <span className="truncate">{pro.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags + Price in same line */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
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

                    {/* Price moved here, aligned right */}
                    <span className="ml-auto border border-green-500 bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                      ₹{pro.rate}/hr
                    </span>
                  </div>

                  <GradientButton
                    to={`/book/${pro.id}`}
                    text="Connect Now!"
                    className="w-full justify-center"
                    size="sm"
                    aria-label={`Book ${pro.name} for ${pro.role}`}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                No professionals available
              </h4>
              <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                We couldn't find any professionals in this category. Try another
                category or check back later.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            What Our <span className="text-green-600">Customers</span> Love
          </motion.h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map(({ name, quote, rating, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-md mx-auto mb-4">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Ctext%20x%3D%2216%22%20y%3D%2236%22%20fill%3D%22%23AAAAAA%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%3E64x64%3C%2Ftext%3E%3C%2Fsvg%3E";
                      }}
                    />
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, j) => (
                      <FaStar
                        key={j}
                        className={`text-base ${
                          j < rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic text-sm sm:text-base mb-3 leading-relaxed">
                    "{quote}"
                  </blockquote>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    — {name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: (
                  <FaCheckCircle className="text-green-500 text-2xl sm:text-3xl" />
                ),
                label: "Verified Professionals",
                description: "Background checked and certified",
              },
              {
                icon: (
                  <FaStar className="text-yellow-400 text-2xl sm:text-3xl" />
                ),
                label: "5-Star Rated Services",
                description: "Rated by thousands of customers",
              },
              {
                icon: (
                  <FaBolt className="text-green-500 text-2xl sm:text-3xl" />
                ),
                label: "Instant Response",
                description: "Average response time under 30 mins",
              },
            ].map(({ icon, label, description }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-full bg-green-50 text-green-500 group-hover:bg-green-100 transition-colors duration-300">
                  {icon}
                </div>
                <div className="text-center">
                  <h4 className="text-gray-800 font-bold text-base sm:text-lg">
                    {label}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Join Our <span className="text-secondary">Growing</span> Community
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-textSecondary mb-6 max-w-xl mx-auto"
          >
            Download our app now and experience seamless service booking in
            seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <GradientButton
              to="https://play.google.com/store/apps/details?id=com.kaambazar.com"
              text="Get It on Google Play"
              icon={<IoLogoGooglePlaystore className="w-5 h-5" />}
              iconPosition="left"
              size="md"
              isExternal={true}
              aria-label="Download from Google Play Store"
            />
            <GradientButton
              to="https://www.apple.com/app-store/"
              text="Get It on App Store"
              icon={<FaApple className="w-5 h-5" />}
              iconPosition="left"
              size="md"
              isExternal={true}
              aria-label="Download from App Store"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-textSecondary text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <FaUsers className="text-base" />
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="h-3 w-px bg-gray-300 sm:h-4"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-base" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
