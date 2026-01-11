import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="loader mb-4" />
        <span className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </span>
      </div>
      <style jsx>{`
        .loader {
          width: 64px;
          height: 64px;
          border: 8px solid #fff;
          border-top: 8px solid #6366f1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
