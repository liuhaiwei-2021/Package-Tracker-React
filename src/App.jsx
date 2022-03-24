import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <Navigation />
      <div className="container">
        <div className="track-page">
          <form className="track-page-form" role="search">
            <h3>Track your package</h3>
            <p className="track-page-subtitle">
              Are you expecting delivery of a package? Great! Enter your package
              ID and phone number or zip code below to track your package.
            </p>
            <input
              className="search-input-field"
              id="parcelId"
              type="search"
              placeholder="Enter package ID"
              required
            />
            <input
              className="search-input-field"
              id="authCode"
              type="search"
              placeholder="Enter phone no. or zip code"
              required
            />
            <button className="track-button">Track your package</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
