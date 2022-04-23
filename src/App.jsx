import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import Tabs from './components/tabs/Tabs';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Experience />
      <Tabs />
      <Contact />
    </div>
  );
};

export default App;
