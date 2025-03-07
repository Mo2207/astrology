
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  const baseStyles = "py-2 px-6 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-gray-600 hover:bg-gray-500 text-white",
    secondary: "bg-gray-400 hover:bg-gray-800 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
