import React from 'react';
import './Loader.css'; // Вы можете стилизовать лоадер через CSS.

export default function Loader(): JSX.Element {
  return (
    <div className="loader">
      <div className="loader__spinner" />
      <p>Загрузка...</p>
    </div>
  );
}
