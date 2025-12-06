import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <div className="w-4xl mx-auto my-5 font-[Inter] max-lg:w-full px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when
              you create an account, participate in interactive features, or
              contact us for support.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Send you technical notices and support messages</li>
              <li>• Respond to your comments and questions</li>
              <li>• Monitor and analyze trends and usage</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to enhance your
              experience, analyze traffic, and personalize content. You can
              control cookies through your browser settings.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
              <Link
                href="mailto:mughalabdulaleem8@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                mughalabdulaleem8@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
