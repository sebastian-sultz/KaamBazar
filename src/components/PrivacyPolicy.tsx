import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="font-inter pt-24 pb-16 bg-gradient-to-br from-surface to-background px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-4xl relative">

        {/* Header */}
        <div className="relative mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text text-center drop-shadow-2xl">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-base md:text-lg text-text mt-4 text-left">
            Last updated: June 5, 2025
          </p>
          <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-accent to-accent3"></div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {[
            {
              title: "Data Collection and Usage",
              content:
                "We collect personal information such as your name, email address, and phone number when you interact with our services, including form submissions or account creation. This data is used to provide and improve our services, communicate with you, and ensure a personalized experience. We may also collect non-personal information, such as browsing behavior, to analyze trends and enhance our website functionality.",
            },
            {
              title: "Cookies and Tracking",
              content:
                "Our website uses cookies and similar tracking technologies to enhance user experience, analyze site traffic, and deliver targeted advertisements. You can manage cookie preferences through your browser settings. By continuing to use our site, you consent to our use of cookies as outlined in this policy.",
            },
            {
              title: "User Rights",
              content:
                "You have the right to access, correct, or delete your personal information held by us. You may also request to restrict processing or object to certain uses of your data. To exercise these rights, please contact us at contact@medsupply.com. We will respond to your request within 30 days, subject to applicable laws.",
            },
            {
              title: "Third-Party Sharing Disclaimer",
              content:
                "We may share your information with trusted third parties, such as payment processors or analytics providers, to facilitate our services. These parties are contractually obligated to protect your data and use it only for specified purposes. We do not sell your personal information to third parties for marketing purposes.",
            },
            {
              title: "Policy Updates",
              content:
                "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised 'Last updated' date. We encourage you to review this policy regularly to stay informed about how we protect your data.",
            },
          ].map(({ title, content }) => (
            <div
              key={title}
              className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-text mb-4">{title}</h2>
              <p className="text-sm md:text-base text-textSecondary">{content}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-left">
          <p className="text-sm text-textSecondary">
            For questions about this Privacy Policy, please{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
