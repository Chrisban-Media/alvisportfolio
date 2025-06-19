import React, { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply or remove the 'dark' class on <html> tag
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-3xl mt-6">Hello Tailwind</h1>
      <p className="mt-2">
        This is a {darkMode ? "dark" : "light"} theme example.
      </p>
    </div>
  );
};

export default App;
