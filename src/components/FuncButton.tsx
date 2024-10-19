import React from "react";

function FuncButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex items-center justify-center border-transparent rounded-3xl p-6 ${className} `}
    >
      {children}
    </button>
  );
}

export default FuncButton;
