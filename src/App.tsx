import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { Contact } from "./pages/ContactPage";
import { Login } from "./pages/LoginPage";
import { useSelector } from "react-redux";

function App() {
  const selectedTheme = useSelector((state: any) => state.theme.value.theme);

  const getStyle = (currentTheme: string) => {
    if (currentTheme === 'LIGHT') {
      return { backgroundColor: 'lightblue' }
    }
    return { backgroundColor: 'grey' }
  }

  return (
    <div className="App" style={getStyle(selectedTheme)}>
      <Router>
        <Link style={{ textDecoration: 'none', margin: '20px', color: 'blue' }} to="/"> Home </Link>
        <Link style={{ textDecoration: 'none', margin: '20px', color: 'blue' }} to="/login"> Login </Link>
        <Link style={{ textDecoration: 'none', margin: '20px', color: 'blue' }} to="/contact"> Contact </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;