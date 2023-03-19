import React from 'react';
import { Outlet } from 'react-router-dom';

import { HostWrapper } from './styles';

const App = () => {
  return (
    <HostWrapper>
      <Outlet />
    </HostWrapper>
  );
};

export default App;
