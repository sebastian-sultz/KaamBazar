import React from "react";
import ShinyText from "../assets/Anim/ShinyText";
import GradientButton from "./GradientButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
const Hero: React.FC = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden font-sans bg-background">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 scale-[1.5] sm:scale-[1.4] md:scale-[1.3] lg:scale-[1.2]">
            <iframe
              src="https://www.youtube.com/embed/lMzCmpInZo4?autoplay=1&mute=1&loop=1&playlist=lMzCmpInZo4&controls=0&showinfo=0&modestbranding=1&rel=0&start=1&end=38"
              className="absolute w-full h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Background Video"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          {/* Bold Headline */}
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-surface animate-floatFadePause">
            <ShinyText
              text=" Find Verified Professionals Instantly!"
              disabled={false}
              speed={2}
            />
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-xl text-secondary animate-floatFadePauseDelayed">
            Helping startups & enterprises grow with AI, automation, and digital
            transformation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Download on Play Store */}
            <GradientButton
              to="https://play.google.com/store/apps/details?id=com.kaambazar.com"
              text="Download Now"
              icon={<IoLogoGooglePlaystore className="w-5 h-5" />}
              iconPosition="left"
              size="md"
              isExternal={true}
            />

            {/* Watch how it works */}

            <GradientButton
              to="https://www.youtube.com/watch?v=lMzCmpInZo4"
              text="Watch How It Works"
              icon={<FaArrowRight className="w-5 h-5" />}
              iconPosition="left"
              size="md"
              gradientFrom="from-white"
              gradientTo="to-white"
              className=" text-black hover:text-white"
              isExternal={true}
              // text-black to keep it visible on white
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
