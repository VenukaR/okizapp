import React from 'react';
 

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <img
            src="/img/logo.png"
            alt="OKIZ Logo"
            className="h-24 md:h-32 w-auto"
            width={128}
            height={128}
          />
        </div>

        {/* Graduation Cap jumping over */}
      

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading text */}
        <p className="text-center mt-4 text-gray-600 font-medium animate-pulse">
          Loading your experience...
        </p>
      </div>

      <style jsx>{`
        @keyframes jump {
          0% {
            transform: translateX(-80px) translateY(0) rotate(-10deg);
          }
          25% {
            transform: translateX(-40px) translateY(-60px) rotate(0deg);
          }
          50% {
            transform: translateX(0px) translateY(0) rotate(10deg);
          }
          75% {
            transform: translateX(40px) translateY(-60px) rotate(0deg);
          }
          100% {
            transform: translateX(80px) translateY(0) rotate(-10deg);
          }
        }

        .animate-jump {
          animation: jump 2.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingComponent;