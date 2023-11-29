import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from './Test';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Test></Test>
  </React.StrictMode>,
);
