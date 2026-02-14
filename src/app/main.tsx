import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './providers/theme/theme-provider';
import App from './app';

const container = document.getElementById('application');
if (!container) throw new Error('Not found container');

createRoot(container).render(<StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
</StrictMode>)

window.addEventListener('load', () => {
    const load = document.getElementById('global-loader');
    if(!load) return;

    load.style.opacity = '0';
    load.style.transition = 'opacity 1.5s ease'
    setTimeout(() => document.getElementById('global-loader')?.remove(),1600);
});