import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Array from "./components/Array";
import String from "./components/String";
import NoPage from "./components/NoPage";
import Contact from "./components/Contact";
import RandomGraph from "./components/Graph";
import CustomGraph from "./components/CustomGraph";
function App() {
	return (
		<div className="App bg-gray-200 h-screen w-screen ">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/array" element={<Array />} />
					<Route path="/string" element={<String />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/Graph" element={<RandomGraph />} />
					<Route path="/CustomGraph" element={<CustomGraph />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
export default App;
