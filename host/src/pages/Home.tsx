import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import SuperBanner from '../components/shared/SuperBanner';

const Home = () => {
  return (
    <>
      <Header />
      <SuperBanner heading="Hello I am a host">Super Banner for the win!</SuperBanner>
      <Footer />
    </>
  );
};

export default Home;
