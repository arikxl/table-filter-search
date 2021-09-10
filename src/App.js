import './App.css';
import {PRODUCTS} from './data/products';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
        <Home products={PRODUCTS}/>
    </div>
  );
}

export default App;
