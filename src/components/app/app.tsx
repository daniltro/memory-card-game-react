import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayingField from '../PlayingField/PlayingField';
import SettingsPage from '../SettingsPage/SettingsPage';
import StatisticsPage from '../StatisticsPage/StatisticsPage';
import MainMenu from '../MainMenu/MainMenu';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route
              path="/new-game"
              element={<PlayingField difficulty="medium" />}
            />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
