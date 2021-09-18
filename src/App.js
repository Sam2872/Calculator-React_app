import './App.css';
import Calculator from './Calculator';

function App() {

  
  return (
    <div className="App">
          <h3 className='calc-title'>Calculator</h3>
      <section className='container'>
          <div className='calc-btns'>
          <Calculator/>
          </div>
      </section>
    </div>
  );
}

export default App;
