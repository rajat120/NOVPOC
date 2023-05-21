import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FarmDetails from "./components/FarmDetails";
import FarmerDetails from "./components/FarmerDetails";
import ProducerDetails from "./components/ProducerDetails"
import Haeder from "./components/Haeder";
function App() {
	return (
		<BrowserRouter>
			<Haeder />
			<Routes>
				<Route path="/" element={<FarmDetails />} />
				<Route path="/farmer" element={<FarmerDetails />} />
        <Route path="/producer" element={<ProducerDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
