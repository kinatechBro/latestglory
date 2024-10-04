import React from "react";
import { Shield, Check } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-300" />
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-xl text-indigo-200">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="mt-12 prose prose-lg text-indigo-100 mx-auto">
          <h2 className="text-2xl font-bold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the services provided by KinaTechBrainz, you
            agree to be bound by these Terms of Service and all applicable laws
            and regulations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">
            2. Use of Services
          </h2>
          <p>
            You agree to use our services only for lawful purposes and in
            accordance with these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">
            3. Intellectual Property
          </h2>
          <p>
            All content on this site, including text, graphics, logos, and
            software, is the property of KinaTechBrainz and protected by
            intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">
            4. User Accounts
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">
            5. Limitation of Liability
          </h2>
          <p>
            KinaTechBrainz shall not be liable for any indirect, incidental,
            special, consequential or punitive damages resulting from your use
            of our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of our services after changes are made constitutes
            your acceptance of the new terms.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-indigo-200">
            By using our services, you acknowledge that you have read and
            understood these Terms of Service.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Check className="mr-2 h-5 w-5" />I Agree to the Terms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
