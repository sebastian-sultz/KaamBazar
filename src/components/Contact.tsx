import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  Mail,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  SendHorizontal,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin,
  Clock,
} from "lucide-react";
import contactData from "../Data/contactData.json";
import GradientButton from "./GradientButton";

// Define types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface CharacterCount {
  name: number;
  subject: number;
  message: number;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });
  const [characterCount, setCharacterCount] = useState<CharacterCount>({
    name: 0,
    subject: 0,
    message: 0,
  });

  // Character count updates
  useEffect(() => {
    setCharacterCount({
      name: formData.name.length,
      subject: formData.subject.length,
      message: formData.message.length,
    });
  }, [formData]);

  const validateField = (name: keyof FormData, value: string): string => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        else if (value.length > 50)
          error = "Name must be less than 50 characters";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format";
        break;
      case "subject":
        if (!value) error = "Subject is required";
        else if (value.length > 100)
          error = "Subject must be less than 100 characters";
        break;
      case "message":
        if (!value) error = "Message is required";
        else if (value.length < 10)
          error = "Message must be at least 10 characters";
        else if (value.length > 500)
          error = "Message must be less than 500 characters";
        break;
    }
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submitStatus.type === "error" || errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: validateField(name as keyof FormData, value),
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormData, value),
    });
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill out all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", formData);
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="bg-background py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Let's Connect
          </h1>
          <p className="text-textSecondary text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Whether you're looking for support or just want to say hello, we'd
            love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column: Contact Cards + Social */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                {
                  icon: <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Phone",
                  value: contactData.contactDetails.phone,
                  color: "bg-primary",
                },
                {
                  icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Email",
                  value: contactData.contactDetails.email,
                  color: "bg-secondary",
                },
                {
                  icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Address",
                  value: contactData.contactDetails.address,
                  color: "bg-accent",
                },
                {
                  icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "Business Hours",
                  value: Object.entries(
                    contactData.contactDetails.businessHours
                  ).map(([day, hours], index) => (
                    <span key={index} className="block">
                      {day}: {hours}
                    </span>
                  )),
                  color: "bg-primary",
                },
              ].map(({ icon, title, value, color }, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md"
                >
                  <div
                    className={`${color} p-3 sm:p-4 rounded-full text-white shadow-sm`}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="text-textSecondary text-sm sm:text-base">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 pt-4 justify-center items-center">
              {[
                {
                  icon: Youtube,
                  url: "https://www.youtube.com/@Kaambazar",
                  label: "YouTube",
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/Kaambazar",
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/Kaambazar",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/company/Kaambazar",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary text-white p-2.5 sm:p-3 rounded-full transition duration-200 shadow-md hover:scale-105"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg p-6 sm:p-8 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              Send us a message
            </h2>

            {submitStatus.type === "success" && (
              <div className="mb-4 sm:mb-6 p-4 bg-green-100/20 border border-green-400/30 rounded-lg flex items-start gap-2 sm:gap-3">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0 w-5 h-5" />
                <div>
                  <p className="text-green-500 font-medium text-sm sm:text-base">
                    {submitStatus.message}
                  </p>
                  <p className="text-green-500/80 text-xs sm:text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus.type === "error" && (
              <div className="mb-4 sm:mb-6 p-4 bg-red-100/20 border border-red-400/30 rounded-lg flex items-start gap-2 sm:gap-3">
                <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0 w-5 h-5" />
                <p className="text-red-500 text-sm sm:text-base">
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Your Name",
                  maxLength: 50,
                  label: "Name",
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Your Email",
                  label: "Email",
                },
                {
                  name: "subject",
                  type: "text",
                  placeholder: "Subject",
                  maxLength: 100,
                  label: "Subject",
                },
              ].map(({ name, type, placeholder, maxLength, label }) => (
                <div key={name} className="space-y-1">
                  <label htmlFor={name} className="sr-only">
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      id={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      value={formData[name as keyof FormData]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={maxLength}
                      className={`w-full bg-background border ${
                        errors[name as keyof FormErrors]
                          ? "border-red-500"
                          : "border-white/20"
                      } text-text px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg focus:outline-none focus:ring-2 ${
                        errors[name as keyof FormErrors]
                          ? "focus:ring-red-500"
                          : "focus:ring-primary"
                      } text-sm sm:text-base`}
                      aria-invalid={!!errors[name as keyof FormErrors]}
                      aria-describedby={`${name}-error`}
                    />
                    {maxLength && (
                      <span className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 text-xs text-textSecondary">
                        {characterCount[name as keyof CharacterCount]}/
                        {maxLength}
                      </span>
                    )}
                  </div>
                  {errors[name as keyof FormErrors] && (
                    <p
                      id={`${name}-error`}
                      className="text-red-500 text-xs sm:text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors[name as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}

              <div className="space-y-1">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    maxLength={500}
                    className={`w-full bg-background border ${
                      errors.message ? "border-red-500" : "border-white/20"
                    } text-text px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "focus:ring-red-500"
                        : "focus:ring-primary"
                    } resize-none text-sm sm:text-base`}
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                  ></textarea>
                  <span className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 text-xs text-textSecondary">
                    {characterCount.message}/500
                  </span>
                </div>
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-red-500 text-xs sm:text-sm flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <GradientButton
                type="submit"
                text={isSubmitting ? "Sending..." : "Send Message"}
                icon={
                  isSubmitting ? (
                    <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <SendHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
                  )
                }
                className="w-full justify-center"
                size="sm"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Submitting form" : "Send message"}
              />
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-primary mb-4 sm:mb-6">
            Find Us on the Map
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="KaamBazar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.753566617539!2d91.7690125750222!3d26.17215407709627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a597df4893e79%3A0x3d5972b0a9cf1ab7!2sGreyNext%20(formerly%20RetinaMonk)!5e0!3m2!1sen!2sin!4v1753154356497!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] border-none"
              allowFullScreen
              loading="lazy"
              style={{
                filter: "grayscale(10%) contrast(110%) brightness(95%)",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
