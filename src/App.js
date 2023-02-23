import React from 'react'

// import Article from './components/Article/Article';
// import Brand from './components/Brand/Brand';
// import CTA from './components/CTA/CTA';
// import Feature from './components/Feature/Feature';
// import Navbar from './components/Navbar/Navbar';

// import { Article, Brand, CTA, Feature, Navbar} from './components';

import './App.css';
import './index.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import { Brand, CTA, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />


    </div>
  )
}

export default App
