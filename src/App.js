import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Home/>
			<Footer/>
		</div>
	);
}

export default App;
