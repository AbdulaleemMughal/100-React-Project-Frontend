'use client';

import { Button } from "@/UI/Button";
import { useRouter } from "next/navigation";

export const Building = () => {

    const router = useRouter();

  return (
    <div className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/30">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Ready to Start Building?
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Join thousands of developers who have enhanced their skills through our
        hands-on projects. Start your coding journey today!
      </p>
      <div className="flex justify-center">
      <Button
              text="Explore Projects"
              onClick={() => router.push("/projects")}
              className="text-xl py-4 px-10 max-sm:text-lg max-sm:px-6 max-sm:py-3"
            />
        </div>
    </div>
  );
};
