// Loader.tsx
import React from 'react';
import './Loader.css'; // Вы можете стилизовать лоадер через CSS.

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p>Загрузка...</p>
    </div>
  );
};

export default Loader;
