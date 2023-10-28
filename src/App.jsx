// components
import About from './components/About';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Toggle from './components/Toggle';

const App = () => {
  return (
     <div className='overflow-hidden'>
      <Toggle />
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
