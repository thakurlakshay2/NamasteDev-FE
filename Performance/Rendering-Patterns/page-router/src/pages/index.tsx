import React from "react";
import { useRouter } from "next/router";

const MainApp: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-12">
        Choose Your Rendering Strategy
      </h1>
      <div className="space-y-6">
        {[
          { path: "/csr-page", label: "Client-Side Rendering" },
          { path: "/ssr-page", label: "Server-Side Rendering" },
          { path: "/ssg-page", label: "Static Site Generation" },
        ].map((button) => (
          <button
            key={button.path}
            className="w-64 py-3 px-6 bg-white text-blue-600 rounded-full font-semibold shadow-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={() => handleNavigation(button.path)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainApp;
