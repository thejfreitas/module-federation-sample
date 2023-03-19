import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ background: 'gray', padding: '3rem' }}>
      <Header />
      <h1>Cart App</h1>
      <Footer />
    </div>
  );
};

export default App;
