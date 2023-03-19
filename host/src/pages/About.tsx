import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import SuperBanner from '../components/shared/SuperBanner';

const About = () => {
  return (
    <>
      <Header />
      <SuperBanner heading="About"></SuperBanner>
      <Footer />
    </>
  );
};

export default About;
