import './App.css';
import Products from './Products';

function App() {
  return (
    <main>
      <div className='row'>
        <Products/>
        <aside>
          this is aside
        </aside>
      </div>
      <footer>
        footer page
      </footer>
    </main>
  );
}

export default App;
