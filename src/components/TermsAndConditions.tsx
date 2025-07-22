import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="font-inter pt-24 pb-16 bg-gradient-to-br from-surface to-background px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-4xl relative">

        {/* Header */}
        <div className="relative mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text text-center drop-shadow-2xl">
            Terms <span className="text-accent">And Conditions</span>
          </h1>
          <p className="text-base md:text-lg text-text mt-4 text-left">
            Last updated: June 5, 2025
          </p>
          <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-accent to-accent3"></div>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Acceptable Usage */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">Acceptable Usage</h2>
            <p className="text-sm md:text-base text-textSecondary">
              You agree to use our website and services only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their access to our services. Prohibited activities include unauthorized access, distribution of harmful content, or any actions that violate applicable laws or regulations.
            </p>
          </div>

          {/* Account Usage */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">Account Usage</h2>
            <p className="text-sm md:text-base text-textSecondary">
              If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account. You must notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </div>

          {/* Intellectual Property Disclaimer */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">Intellectual Property Disclaimer</h2>
            <p className="text-sm md:text-base text-textSecondary">
              All content on our website, including text, images, logos, and designs, is the property of MedSupply or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
            </p>
          </div>

          {/* Dispute and Liability Clauses */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">Dispute and Liability Clauses</h2>
            <p className="text-sm md:text-base text-textSecondary">
              Any disputes arising from your use of our services will be resolved through negotiation or, if necessary, binding arbitration. We are not liable for any indirect, incidental, or consequential damages resulting from your use of our website or services. Our liability is limited to the amount paid for the products or services in question.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">Governing Law</h2>
            <p className="text-sm md:text-base text-textSecondary">
              These Terms and Conditions are governed by the laws of the State of California, United States, without regard to its conflict of law principles. Any legal actions must be brought in the courts located in Medical City, California.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-left">
          <p className="text-sm text-textSecondary">
            For questions about these Terms and Conditions, please{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
