import "./App.css";
import "./index.css";

// import imgs from "./img.json";
import Sections from "./components/Sections";

import logo from "./Netflix_logo.png";

function App() {
    return (
        <div>
            <header className="container">
                <img id="logo" src={logo} alt="logo" />
            </header>
            <div className="container">
                <Sections />
            </div>
        </div>
    );
}

export default App;
