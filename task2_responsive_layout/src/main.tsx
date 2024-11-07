import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './App.tsx';
import { ProductProvider } from '@/context/ProductContext';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProductProvider>
            <App />
        </ProductProvider>
    </StrictMode>,
);
