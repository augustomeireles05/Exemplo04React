import './App.css';
import PaiDireta from './components/direta/PaiDireta'
import PaiIndireta from './components/indireta/PaiIndireta'

function App() {
  return (
    <div className="App">
      
      <PaiIndireta />

      <PaiDireta alface/>
      
    </div>
  );
}

export default App;
