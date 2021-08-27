import Typist from 'react-text-typist'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-content">
        <Typist 
            sentences={[
                'First Sentence', 
                'Second Sentence', 
                'Third Sentence'
            ]} 
            loop={true} 
            typingSpeed={160}
            className="typist-text"
        />
    </div>
  );
}

export default App;
