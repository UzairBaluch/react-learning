

import BasicProps from "./components/BasicProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

import { ThemeProvider, useTheme } from "./components/ThemeContext.jsx";

function Navigation() {
  const { isDark } = useTheme();

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-800"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900" : "bg-purple-400"
      } transition-colors`}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            A comprehensive guide to understanding props in React
          </p>
        </header>

        <div className="space-y-8">
          <BasicProps />
          <ChildrenProps />
          <ComplexProps />
          <RefProps />
          <ThemeToggler />
        </div>

        <footer
          className={`mt-12 text-center pb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
