import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
	return (
		<div className="container-fluid px-1">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Projects" element={<Projects />} />
					<Route path="/Experience" element={<Experience />} />
					{/* <Route path="/Contact" element={<Contact />} /> */}
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
