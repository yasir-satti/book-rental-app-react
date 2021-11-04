import splash_image from '../../assets/image_book.jpeg';
import './App.css';

function App() {
  return (
    <div>
        <img src={splash_image} alt="logo" />
        <p>
          Book Rental Service
        </p>

        <p>Register</p>

        <form>
          <label>
            First name:
            <input
              type="First name" name="name"/>
          </label>
          <p></p>

          <label>
            Last name:
            <input
              type="Last name" />
          </label>
          <p></p>

          <label>
            Email:
            <input
            type="email" />
          </label>
        </form>

        <button text="Register"></button>
    </div>
  );
}

export default App;