
import './App.css';
import FetchOnline from './utils/FetchOnline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', flexDirection: 'row'}}>
        Users online: <FetchOnline />
        </div>
      </header>
    </div>
  );
}

export default App;
