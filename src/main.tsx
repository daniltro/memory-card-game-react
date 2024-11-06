import { App } from './components/app/app';
import './styles/main.css';

import ReactDOM from 'react-dom/client';

// Найдем элемент с id "root" и отрендерим в него компонент App
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Рендерим компонент App в контейнер с id="root"
root.render(<App />);
