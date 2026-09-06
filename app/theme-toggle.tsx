'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const next: Theme = current === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // The theme still applies for this session when storage is unavailable.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle color theme'}
      title={theme ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle color theme'}
    >
      <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.75v2M12 19.25v2M2.75 12h2M19.25 12h2M5.46 5.46l1.42 1.42M17.12 17.12l1.42 1.42M18.54 5.46l-1.42 1.42M6.88 17.12l-1.42 1.42" />
      </svg>
      <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.2 15.1A7.5 7.5 0 0 1 8.9 4.8 7.5 7.5 0 1 0 19.2 15.1Z" />
      </svg>
    </button>
  );
}
