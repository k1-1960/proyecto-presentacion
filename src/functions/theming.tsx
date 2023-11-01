import { useState } from 'react';

export const toggleTheme = () => {
  let events = document.getElementById('events') as HTMLElement;

  let current = localStorage.getItem('theme');
  let html = document.getElementsByTagName('html').item(0);

  switch (current) {
    case 'dark':
      localStorage.setItem('theme', 'light');
      html?.classList.remove('dark');
      html?.classList.add('light');
      events.dispatchEvent(
        new CustomEvent('onThemeChange', {
          detail: {
            newTheme: 'light',
          },
        })
      );
      break;
    case 'light':
      localStorage.setItem('theme', 'dark');
      html?.classList.remove('light');
      html?.classList.add('dark');
      events.dispatchEvent(
        new CustomEvent('onThemeChange', {
          detail: {
            newTheme: 'dark',
          },
        })
      );
      break;

    case 'system':
      break;
  }
};

export const getTheme = () => {
  let [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') as string
  );

  let events = document.getElementById('events') as HTMLElement;
  events.addEventListener('onThemeChange', (event) => {
    setTheme((event as CustomEvent).detail.newTheme);
  });

  return [theme, setTheme];
};
