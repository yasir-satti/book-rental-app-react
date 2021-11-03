import splash_image from './assets/image_book.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={splash_image} alt="logo" />
        <p>
          Book Rental Service
        </p>
      </header>
    </div>
  );
}

export default App;
