export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <img
            src="/img/logo.png"
            alt="OKIZ Logo"
            className="h-24 md:h-32 w-auto animate-pulse"
            width={128}
            height={128}
          />
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary-dark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading text */}
        <p className="text-center mt-4 text-gray-600 font-medium animate-pulse">
          Loading amazing student discounts...
        </p>
      </div>
    </div>
  );
}