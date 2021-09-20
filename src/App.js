import { Suspense } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Header from './components/Heading/Header';
import Top3d from './components/Top3d/Top3d';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Suspense fallback={<div></div>}>
        <div className="main-content">
            <AppBar />
            <Header />
            <Top3d />
            <About />
            <Footer />
        </div>
    </Suspense>
    
  );
}

export default App;
