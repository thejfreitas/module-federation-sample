import React from 'react';

import { createRoot } from 'react-dom/client';
import Router from './Router';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(<Router />);
}
