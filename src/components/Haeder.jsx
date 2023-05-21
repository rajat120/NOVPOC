import React, { useState } from "react";
import "../components/Haeder.css";
import { useNavigate } from "react-router-dom";

const Haeder = () => {
	const [step, setStep] = useState(0);
	const navigate = useNavigate();

	const handleNavigation = (e) => {
		if (e.target.id === "farm") {
			e.preventDefault();
			setStep(0);
			navigate("/");
		} else if (e.target.id === "farmer") {
			e.preventDefault();
			setStep(1);
			navigate("/" + e.target.id);
		} else if (e.target.id === "producer") {
			e.preventDefault();
			setStep(2);
			navigate("/" + e.target.id);
		}
	};

	return (
		<div className="row__container" onClick={handleNavigation}>
			<h4
				className={`${step === 0 ? "active header__title" : "header__disable"}`}
				id="farm"
			>
				{/* <span className={`${step === 0 ? "active circle" : "null"}`}>1</span>{" "} */}
				Farm Details
			</h4>
			<hr className="horizontal-line" />
			<h4
				className={`${step === 1 ? "active header__title" : "header__disable"}`}
				id="farmer"
			>
				{/* <span className={`${step === 1 ? "active circle" : "null"}`}>2</span>{" "} */}
				Farmer Details
			</h4>
			<hr className="horizontal-line" />
			<h4
				className={`${step === 2 ? "active header__title" : "header__disable"}`}
				id="producer"
			>
				{/* <span className={`${step === 2 ? "active circle" : "null"}`}>3</span>{" "} */}
				Producer Details
			</h4>
		</div>
	);
};

export default Haeder;
