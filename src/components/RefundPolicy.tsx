import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="font-inter pt-24 pb-16 bg-gradient-to-br from-surface to-background px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-4xl relative">
        {/* Header */}
        <div className="relative mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text text-center drop-shadow-2xl">
            Refund <span className="text-accent">Policy</span>
          </h1>
          <p className="text-base md:text-lg text-text mt-4 text-left">
            Last updated: June 5, 2025
          </p>
          <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-accent to-accent3"></div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {/* Return Eligibility Conditions */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">
              Return Eligibility Conditions
            </h2>
            <p className="text-sm md:text-base text-textSecondary">
              Products are eligible for return within 30 days of delivery if
              they are unused, in their original packaging, and in the same
              condition as received. Items that are damaged, defective, or
              incorrect may also be returned. Certain products, such as sterile
              medical instruments opened after delivery, are not eligible for
              return due to health and safety regulations.
            </p>
          </div>

          {/* Refund Process Steps */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">
              Refund Process Steps
            </h2>
            <ol className="list-decimal list-inside text-sm md:text-base text-textSecondary space-y-2">
              <li>
                Contact our support team at{" "}
                <a
                  href="mailto:refunds@kaambazar.com"
                  className="text-accent hover:underline"
                >
                  refunds@kaambazar.com
                </a>{" "}
                to initiate a return.
              </li>
              <li>Provide your order number and reason for the return.</li>
              <li>
                Receive a Return Merchandise Authorization (RMA) number and
                shipping instructions.
              </li>
              <li>
                Package the item securely and ship it to the designated address.
              </li>
              <li>Upon receipt and inspection, we will process your refund.</li>
            </ol>
          </div>

          {/* Processing Timeframes */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">
              Processing Timeframes
            </h2>
            <p className="text-sm md:text-base text-textSecondary">
              Refunds are typically processed within 7-10 business days of
              receiving the returned item. Once approved, the refund will be
              credited to your original payment method within 3-5 business days,
              depending on your financial institution. Shipping costs are
              non-refundable unless the return is due to our error.
            </p>
          </div>

          {/* Contact Information for Assistance */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-border backdrop-blur-md transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-text mb-4">
              Contact Information for Assistance
            </h2>
            <p className="text-sm md:text-base text-textSecondary">
              For assistance with returns or refunds, please reach out to our
              support team:
              <br />
              Email:{" "}
              <a
                href="mailto:refunds@kaambazar.com"
                className="text-accent hover:underline"
              >
                refunds@kaambazar.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+15551234567"
                className="text-accent hover:underline"
              >
                +1 (555) 123-4567
              </a>
              <br />
              Address: 123 Health St, Medical City, CA 90210
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-left">
          <p className="text-sm text-textSecondary">
            For further questions, please{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
