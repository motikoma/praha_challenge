import * as ReactDOM from 'react-dom/client';
import { Game } from './game/Index';

// ========================================
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Game />);