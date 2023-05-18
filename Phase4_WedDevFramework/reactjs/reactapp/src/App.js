import logo from './logo.svg';
import './App.css';
import WelcomeClass from './components/WelcomeClass';
import WelcomeFunc from './components/WelcomeFunc';
// JSX -> component
function App() {
  let username = 'VodaFone';

  return (
    <div className="App">
      
      {/* data is always passed from parent to child */}
      <WelcomeClass username={username} 
      city ="Mumbai"/>
      <WelcomeFunc username={username} 
      city ="Pune"/>
      {/* JSX expression {} */}
      <p>{new Date().toLocaleString()}</p>
      <p>Sqrt of 16 : {Math.sqrt(16)}</p>
    </div>
  );
}

export default App;
