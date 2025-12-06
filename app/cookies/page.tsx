import { Badge } from "@/UI/Badge";
import Link from "next/link";

const Cookies = () => {
  return (
    <>
      <div className="bg-[#f4eaff]">
        <div className="pt-20 pb-16 px-8 flex flex-col items-center max-sm:w-full">
          <div className="mb-8">
            <Badge text="Cookie Information" variant="warning" dot={true} />
          </div>
          <div>
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col items-center font-bold font-[Inter] bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-sm font-[inter] text-center xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              Learn how we use cookies to improve your experience on our
              platform.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-7xl py-20 px-36 max-xl:w-full max-xl:px-20 max-md:px-10 max-sm:px-5">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 font-[Inter]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are stored on your computer or
            mobile device when you visit our website. They help us provide you
            with a better experience by remembering your preferences and
            improving site functionality.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Cookies We Use
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Essential Cookies
          </h3>
          <p className="text-gray-600 mb-6">
            These cookies are necessary for the website to function properly.
            They enable basic functions like page navigation and access to
            secure areas of the website.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Analytics Cookies
          </h3>
          <p className="text-gray-600 mb-6">
            We use Google Analytics to understand how visitors interact with our
            website. This helps us improve our content and user experience.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Functionality Cookies
          </h3>
          <p className="text-gray-600 mb-6">
            These cookies remember your preferences and choices to provide you
            with a more personalized experience.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Managing Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            You can control and manage cookies in various ways:
          </p>
          <ul className="text-gray-600 mb-6 space-y-2 list-disc ml-5">
            <li>
              Browser settings: Most browsers allow you to control cookies
              through their settings
            </li>
            <li>Delete existing cookies from your device</li>
            <li>Block cookies from being set in the future</li>
            <li>Set your browser to notify you when cookies are being set</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Third-Party Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            Some cookies on our site are set by third-party services such as
            Google Analytics. These services have their own cookie policies
            which we encourage you to review.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Updates to This Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our Cookie Policy, please contact us
            at: <br />
            <Link
              href={`mailto:mughalabdulaleem@gmail.com`}
              className="text-blue-600 hover:text-blue-700"
            >
              mughalabdulaleem@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cookies;
