import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import footerData from "../Data/footerData.json";
import Logo from "../assets/Img/kaambazar_logo_512x512px_transparent.png";

// Define types for the footer data
interface ContactDetail {
  icon: keyof typeof iconMap;
  label: string;
  value: string;
  href?: string;
}

interface FooterData {
  contactDetails: ContactDetail[];
}

// Icon mapping from JSON string to actual component
const iconMap = {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
};

const Footer: React.FC = () => {
  const policyLinks: { to: string; label: string }[] = [
    { to: "/terms", label: "Terms and Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refunds", label: "Refund Policy" },
  ];

  const quickLinks: { to: string; label: string }[] = [
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-primary/5 py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-border/50 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Branding */}
          <div className="flex flex-col items-start">
          <Link
  to="/"
 
  className="overflow-hidden h-5 md:h-10  flex items-center"
>
  <img
    src={Logo}
    alt="Logo"
    loading="lazy"
    className="h-32 md:h-48 object-contain"
  />
</Link>
            <p className="text-sm pt-5 text-sterile leading-relaxed max-w-xs">
                KaamBazar connects skilled workers with those in need — building a trusted, efficient, and transparent marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-sterile/80 hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-sterile/80 hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Contact Us</h3>
            <div className="space-y-4">
              {(footerData as FooterData).contactDetails.map(({ icon, label, value, href }) => {
                const Icon = iconMap[icon];
                return (
                  <div key={label} className="flex items-center gap-3 group">
                    {Icon && <Icon className="text-2xl text-accent group-hover:text-accent2 transition-colors animate-pulse" />}
                    <div>
                      <p className="text-sm font-medium text-sterile/80">{label}</p>
                      {href ? (
                        <a href={href} className="text-base text-sterile hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-base text-sterile">{value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-sterile/20 text-center">
          <p className="text-sm text-sterile/80">
            © {new Date().getFullYear()} KaamBazar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;