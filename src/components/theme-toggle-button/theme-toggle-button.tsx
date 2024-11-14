import React from 'react';

interface ThemeToggleButtonProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggleButton;
