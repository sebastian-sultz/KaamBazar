import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  SendHorizonal,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import GradientButton from "./GradientButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [characterCount, setCharacterCount] = useState({
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

  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value) error = "Name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        else if (value.length > 50) error = "Name must be less than 50 characters";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "subject":
        if (!value) error = "Subject is required";
        else if (value.length > 100) error = "Subject must be less than 100 characters";
        break;
      case "message":
        if (!value) error = "Message is required";
        else if (value.length < 10) error = "Message must be at least 10 characters";
        else if (value.length > 500) error = "Message must be less than 500 characters";
        break;
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Validate on change only after first submission attempt or field blur
    if (submitStatus.type === "error" || errors[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ type: "error", message: "Please fix the errors in the form." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", formData); // For debugging
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="bg-background py-28 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Let's Connect</h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Whether you're looking for support or just want to say hello, we'd love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Cards + Social */}
          <div className="space-y-8">
            {[{
              icon: <PhoneCall className="w-6 h-6" />,
              label: "Phone",
              value: "+91 98765 43210",
              color: "primary"
            }, {
              icon: <Mail className="w-6 h-6" />,
              label: "Email",
              value: "support@example.com",
              color: "secondary"
            }].map(({ icon, label, value, color }, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className={`bg-${color} p-4 rounded-full text-white shadow-md`}>
                  {icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold text-${color}`}>{label}</h3>
                  <p className="text-textSecondary">{value}</p>
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-primary hover:bg-secondary text-white p-3 rounded-full transition duration-200 shadow-md hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary mb-6">Send us a message</h2>
            
            {submitStatus.type === "success" && (
              <div className="mb-6 p-4 bg-green-100/20 border border-green-400/30 rounded-lg flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-500 font-medium">{submitStatus.message}</p>
                  <p className="text-green-500/80 text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus.type === "error" && (
              <div className="mb-6 p-4 bg-red-100/20 border border-red-400/30 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-500">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", type: "text", placeholder: "Your Name", maxLength: 50 },
                { name: "email", type: "email", placeholder: "Your Email" },
                { name: "subject", type: "text", placeholder: "Subject", maxLength: 100 },
              ].map(({ name, type, placeholder, maxLength }) => (
                <div key={name} className="space-y-1">
                  <div className="relative">
                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={maxLength}
                      className={`w-full bg-background border ${
                        errors[name] ? "border-red-500" : "border-white/20"
                      } text-text px-5 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                        errors[name] ? "focus:ring-red-500" : "focus:ring-primary"
                      }`}
                    />
                    {maxLength && (
                      <span className="absolute right-3 bottom-3 text-xs text-textSecondary">
                        {characterCount[name]}/{maxLength}
                      </span>
                    )}
                  </div>
                  {errors[name] && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="space-y-1">
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    maxLength={500}
                    className={`w-full bg-background border ${
                      errors.message ? "border-red-500" : "border-white/20"
                    } text-text px-5 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                      errors.message ? "focus:ring-red-500" : "focus:ring-primary"
                    } resize-none`}
                  ></textarea>
                  <span className="absolute right-3 bottom-3 text-xs text-textSecondary">
                    {characterCount.message}/500
                  </span>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <GradientButton
                type="submit"
                text={isSubmitting ? "Sending..." : "Send Message"}
                icon={isSubmitting ? <Loader2 className="animate-spin" /> : <SendHorizonal />}
                className="w-full"
                size="sm"
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center text-primary mb-6">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019314015916!2d-122.41941548468152!3d37.77492977975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c31f7e6df%3A0x3bdc3c9e1a0e3f45!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1629052204987!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="w-full h-[450px] border-none"
              style={{ filter: "grayscale(10%) contrast(110%) brightness(95%)" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;