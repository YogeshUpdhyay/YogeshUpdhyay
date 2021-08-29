import './App.css';
import AppBar from './components/AppBar/AppBar';
import Header from './components/Heading/Header';
import Top3d from './components/Top3d/Top3d';

function App() {
  return (
    <div className="main-content">
        <AppBar />
        <Header />
        <Top3d />
    </div>
  );
}

export default App;
