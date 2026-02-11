import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import Application from './components/app/app';

const container = document.getElementById('application');
if (!container) throw new Error('Not found container');

const root = createRoot(container);
root.render(<StrictMode><Application /></StrictMode>);
