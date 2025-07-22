import { useEffect } from 'react';
import { motion } from 'framer-motion';
import GradientButton from './GradientButton';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const teamMembers = [
    {
      name: "Founder",
      role: "Visionary Leader",
      bio: "Driving innovation in the local services marketplace",
    },
    {
      name: "CTO",
      role: "Technology Expert",
      bio: "Building secure and scalable platforms",
    },
    {
      name: "Head of Operations",
      role: "Service Quality",
      bio: "Ensuring exceptional service delivery",
    },
  ];

  useEffect(() => {
    document.title = "About KaamBazar - Connecting Local Talent with Opportunities";
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Learn about KaamBazar's mission to revolutionize local hiring and job searching through our innovative platform.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white pt-28" // Added pt-24 for navbar clearance
      >
        <div className="container mx-auto px-6 text-center max-w-7xl"> {/* Increased padding and max-width */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Revolutionizing Local Hiring
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            KaamBazar bridges the gap between skilled professionals and those who need their services
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-6 max-w-7xl"> {/* Increased padding and max-width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              KaamBazar is on a mission to create a trusted, efficient, and transparent marketplace
              that connects local service providers with individuals and businesses in need of their
              skills. We're transforming how blue-collar and skilled workers find opportunities and
              how consumers find reliable help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Verified professionals with background checks
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Location-based matching for convenience
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">
                  Transparent ratings and reviews system
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="relative h-80 bg-gray-200 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-40 w-40 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl"> {/* Increased padding and max-width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              Our Vision
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 mb-10"
            >
              We envision a world where finding skilled help or meaningful work is
              just a tap away, where trust is built into every transaction, and
              where local economies thrive through seamless connections.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mx-4"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Why Choose KaamBazar?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="h-12 w-12 mb-4 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Safe & Secure</h4>
                  <p className="text-gray-600 text-sm">
                    Verified profiles and secure payments for peace of mind
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="h-12 w-12 mb-4 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Local Focus</h4>
                  <p className="text-gray-600 text-sm">
                    Connect with professionals in your neighborhood
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="h-12 w-12 mb-4 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Trusted</h4>
                  <p className="text-gray-600 text-sm">
                    Ratings and reviews help you make informed decisions
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-6 max-w-7xl"> {/* Increased padding and max-width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold mb-4 text-gray-800"
          >
            Our Team
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Dedicated professionals working to make KaamBazar the best platform for local hiring
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-32 w-32 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Company Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl"> {/* Increased padding and max-width */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeIn}
              className="relative h-80 bg-gray-200 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-40 w-40 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Powered by CybroXide Technologies
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                KaamBazar is proudly developed and maintained by CybroXide Technologies Pvt. Ltd.,
                a forward-thinking technology company incorporated in 2022 with a vision to create
                a product-service ecosystem that provides seamless experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As one of the most prestigious and promising technology companies, CybroXide is
                proud to offer innovative solutions through brands like RetinaMonk, NeuraMonk,
                eFalcon, and now KaamBazar.
              </p>
              <div className=" flex justify-center items-center gap-6">
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;