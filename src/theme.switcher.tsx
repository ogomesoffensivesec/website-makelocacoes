import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="absolute bottom-2 left-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 dark:bg-zinc-700 rounded-full peer dark:bg-zinc-950 dark:peer-checked:bg-orange-500">
          <div className="w-5 h-5 bg-white dark:bg-zinc-300 rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform"></div>
        </div>
        <span className="ml-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </label>
    </div>
  );
}
