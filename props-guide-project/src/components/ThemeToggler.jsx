// src/components/ThemeToggler.jsx
import { useTheme } from "./ThemeContext.jsx";

export default function ThemeToggler() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-colors ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Theme Toggler</h2>

      <p className="mb-4">Current theme: {theme}</p>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800"
      >
        Toggle Theme
      </button>
    </div>
  );
}
