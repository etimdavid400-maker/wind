import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "light", // light | dark | primary
  className = "",
}) {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    light: "bg-white text-gray-700 hover:bg-gray-200 focus:ring-gray-300",
    dark: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600",
    // ✨ Updated primary variant with blue-green gradient
    primary:
      "bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600 focus:ring-blue-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
