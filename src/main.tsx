import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@shared/styles/theme.css'
import App from './app';

const container = document.getElementById('application');
if (!container) throw new Error('Not found container');

createRoot(container).render(<StrictMode>
    <App />
</StrictMode>)