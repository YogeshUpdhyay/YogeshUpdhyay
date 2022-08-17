import './App.css';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Example from './components/Navbar';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <>
    <Example />
    <Projects />
    <Timeline />
    <Blogs />
    <Contact />
    <Footer />
    </>
  )
}
