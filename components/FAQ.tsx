const faqs = [
  {
    id: 1,
    ques: "Can I contribute to the projects?",
    ans: "Yes! We welcome contributions. Check our GitHub repository for contribution guidelines and feel free to submit pull requests.",
  },
  {
    id: 2,
    ques: "Are the projects free to use?",
    ans: "Absolutely! All projects are open source and free for personal and commercial use under the MIT license.",
  },
  {
    id: 3,
    ques: "How often are new projects added?",
    ans: "We add new projects regularly. Follow us on GitHub to stay updated with the latest additions and improvements.",
  },
  {
    id: 4,
    ques: "Need help with a specific project?",
    ans: "Feel free to email us with your questions. We're here to help you learn and succeed with your JavaScript projects.",
  },
];

export const FAQ = () => {
  return (
    <>
      <div className="p-8 bg-white rounded-3xl shadow-xl w-1/2 max-lg:w-full">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 sm:space-y-6">
            {
                faqs.map((faq) => (
                    <div key={faq.id}>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
              {faq.ques}
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {faq.ans}
            </p>
          </div>
                ))
            }
          
        </div>
      </div>
    </>
  );
};
