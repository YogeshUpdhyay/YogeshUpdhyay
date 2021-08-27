import Typist from 'react-text-typist'
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <div className="main-content">
        <AppBar />
        {/* <Typist 
            sentences={[
                'First Sentence', 
                'Second Sentence', 
                'Third Sentence'
            ]} 
            loop={true} 
            typingSpeed={160}
            className="typist-text"
        /> */}
    </div>
  );
}

export default App;
