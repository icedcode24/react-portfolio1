import React from 'react';
import header from './components/header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div>
      <header />
      <main>
        <About />
        <Portfolio />
        <Contact />
        </main>
    </div>
  );
}
export default App;