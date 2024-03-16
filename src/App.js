// Importing logo from the specified path
import logo from "./logo.svg";

// Importing styles for the App component
import "./App.css";

// Importing the NavBar component from the specified path
import { NavBar } from "./components/NavBar";

// Importing the Banner component from the specified path
import { Banner } from "./components/Banner";

import { Skills } from "./components/Skills";

// Importing Bootstrap CSS styles
import "bootstrap/dist/css/bootstrap.min.css";

// App component function definition
function App() {
  // Returning JSX for the App component
  return (
    // Root div with className "App"
    <div className="App">
      {/* Rendering the NavBar component */}
      <NavBar />
      {/* Rendering the Banner component */}
      <Banner />
      <Skills />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
