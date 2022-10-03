import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './Game';

// ========================================
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<Game />);
