import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaDownload } from "react-icons/fa";

interface WhatsAppCTAProps {
  phoneNumber: string;
  message?: string;
  downloadLink?: string;
  position?: "left" | "right";
  downloadText?: string;
  whatsappText?: string;
  showLabels?: boolean;
}

const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  phoneNumber,
  message = "Hello, I have a question about your service",
  downloadLink = "#download",
  position = "right",
  downloadText = "Download",
  whatsappText = "Chat",
  showLabels = false,
}) => {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setShowDownload(currentPosition > 300); // Show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleDownloadClick = () => {
    window.location.href = downloadLink;
  };

  return (
    <div
      className={`fixed ${
        position === "left" ? "left-5" : "right-5"
      } bottom-5 z-50 flex flex-col gap-3`}
    >
      {/* Floating WhatsApp button - always visible */}
      <button
        onClick={handleWhatsAppClick}
        title="Chat on WhatsApp"
        className={`flex items-center justify-center ${
          showLabels ? "px-4 gap-2" : "w-12"
        } h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all duration-300`}
      >
        <FaWhatsapp size={20} />
        {showLabels && (
          <span className="text-sm font-medium">{whatsappText}</span>
        )}
      </button>

      {/* Download button - appears on scroll */}
      {showDownload && (
        <button
          onClick={handleDownloadClick}
          title={downloadText}
          className={`flex items-center justify-center ${
            showLabels ? "px-4 gap-2" : "w-12"
          } h-12 rounded-full bg-[#4285F4] text-white shadow-lg hover:scale-110 transition-all duration-300 animate-fade-in-up`}
        >
          <FaDownload size={18} />
          {showLabels && (
            <span className="text-sm font-medium">{downloadText}</span>
          )}
        </button>
      )}
    </div>
  );
};

export default WhatsAppCTA;
