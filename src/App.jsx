import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Header />

      {/* Main Portfolio Sections */}
      <main>
        {/* Welcome / Hero Banner */}
        <Hero />

        {/* Biography & Skills */}
        <About />

        {/* Selected Works Grid */}
        <Projects />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Dynamic Metadata Footer */}
      <Footer />
    </>
  );
}

export default App;
