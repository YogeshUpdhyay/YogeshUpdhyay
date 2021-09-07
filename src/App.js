import { Suspense } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Header from './components/Heading/Header';
import Top3d from './components/Top3d/Top3d';
import Work from './components/Work/Work';

function App() {
  return (
    <Suspense fallback={<div></div>}>
        <div className="main-content">
            <AppBar />
            <Header />
            <Top3d />
            <Work />
        </div>
    </Suspense>
    
  );
}

export default App;
