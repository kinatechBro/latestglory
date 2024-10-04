import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At kinatechbrainz.com, we take your privacy seriously. This policy
        describes how we collect, use, and protect your personal information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information you provide (e.g., name, email)</li>
        <li>Usage data and analytics</li>
        <li>Cookies and similar technologies</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information to improve our services, personalize your
        experience, and comply with legal obligations.
      </p>
      <p className="mb-4">
        For more details, please read our full{" "}
        <Link to="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">
        kinatechbrainz.com uses cookies to enhance your browsing experience and
        provide personalized content.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit our
        website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Essential cookies for website functionality</li>
        <li>Analytics cookies to understand user behavior</li>
        <li>Advertising cookies for targeted content</li>
      </ul>
      <p className="mb-4">
        You can manage your cookie preferences in your browser settings.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">kinatechbrainz.com</h3>
            <p className="text-sm text-gray-600">
              Empowering tech minds since 2024
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-md font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/kinatechbrainz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                {/* <ExternalLink size={20} /> */}
              </a>
              <a
                href="https://linkedin.com/company/kinatechbrainz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                {/* <ExternalLink size={20} /> */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} kinatechbrainz.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { PrivacyPolicy, CookiePolicy, Footer };
