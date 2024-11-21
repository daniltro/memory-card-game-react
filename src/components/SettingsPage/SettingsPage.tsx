import React from 'react';
import BackButton from '../BackButton/BackButton';

function SettingsPage() {
  return (
    <>
      <BackButton />
      <div className="settings-page">
        <h1>Настройки</h1>
        <p>Здесь будут настройки игры.</p>
      </div>
    </>
  );
}

export default SettingsPage;
