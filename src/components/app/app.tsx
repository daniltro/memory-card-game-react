import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayingField from '../PlayingField/PlayingField';
import SettingsPage from '../SettingsPage/SettingsPage';
import ResultssPage from '../ResultsPage/ResultsPage';
import MainMenu from '../MainMenu/MainMenu';
import { StatisticsProvider } from '../StatContext/StatContext';
import { DifficultyProvider } from '../DifficultContext/DifficultContext';

function App() {
  return (
    <StatisticsProvider>
      <DifficultyProvider>
        <Router>
          <div className="app">
            <main>
              <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path="/new-game" element={<PlayingField />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/results" element={<ResultssPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </DifficultyProvider>
    </StatisticsProvider>
  );
}

export default App;
