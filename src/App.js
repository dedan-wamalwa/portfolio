import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import "./App.css";
function App() {
	return (
		<div className="container-fluid">
			<Router>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/' element={<Projects/>}/>
					<Route path='/' element={<Experience/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
