import React from "react";
import "../components/FarmerDetails.css";

const FarmerDetails = () => {
	const handleForm = (e) => {
		e.preventDefault();
		window.location.href = "/producer";
	};
	return (
		<div>
			<div className="form__container">
				<div className="align-margin">
					<form>
						<div className="row">
							<div className="column">
								<label htmlFor="FarmId" className="label  required-field">
									Farmer Id
								</label>
								<br />
								<input className="input" type="text" placeholder="123" />
							</div>

							<div className="column">
								<label htmlFor="FarmerID" className="label required-field">
									Farmer First Name
								</label>
								<br />
								<input className="input" type="text" placeholder="John" />
							</div>

							<div className="column">
								<label htmlFor="Producer Name" className="label">
									Farmer Middle Name
								</label>
								<br />
								<input className="input" type="text" placeholder="kumar" />
							</div>
						</div>

						<div className="row">
							<div className="label column">
								<label htmlFor="ProducerstateOrTerritory">
									Farmer Last Name
								</label>
								<br />
								<input className="input" type="text" placeholder="singh" />
							</div>

							<div className="label column">
								<label htmlFor="Producer Country">Farmer Gender</label>
								<br />
								<select name="country" id="cattle__farmer">
									<option value="yes">Male</option>
									<option value="No">Female</option>
								</select>
							</div>

							<div className="label column ">
								<label
									htmlFor="hasProducerDateChange"
									className="required-field"
								>
									Mobile Number
								</label>
								<br />
								<input className="input" type="text" placeholder="8885666777" />
							</div>
						</div>

						<div className="row">
							<div className="label column">
								<label htmlFor="ProducerStartDate">Home Number</label>
								<br />
								<input className="input" type="text" placeholder="8833345567" />
							</div>

							<div className="label column">
								<label
									htmlFor="ProducerUnreservedStatus"
									className="required-field"
								>
									Address1
								</label>
								<br />
								<input className="input" type="text" placeholder="jugsalai" />
							</div>

							<div className="label column">
								<label htmlFor="ProducerTotalArea" className="required-field">
									Address2
								</label>
								<br />
								<input className="input" type="text" placeholder="hometown" />
							</div>
						</div>

						<div className="row">
							<div className="label column">
								<label
									htmlFor="ProducerTotalCropArea"
									className="required-field"
								>
									Email
								</label>
								<br />
								<input className="input" type="text" placeholder="4km" />
							</div>

							<div className="label column">
								<label
									htmlFor="ProducerTotalLiveStock"
									className="required-field "
								>
									Producer Total LiveStock
								</label>
								<br />
								<input className="input" type="text" placeholder="4" />
							</div>

							<div className="label column">
								<label htmlFor="ProducerTotalForestArea">Fax</label>
								<br />
								<input className="input" type="text" placeholder="#23545" />
							</div>
						</div>

						<div className="row">
							<div className="label column">
								<label htmlFor="ProducerTotalForestArea">City Village</label>
								<br />
								<input className="input" type="text" placeholder="ramgar" />
							</div>

							<div className="label column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									State
								</label>
								<br />
								<input className="input" type="text" placeholder="karnataka" />
							</div>

							<div className="label column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Country
								</label>
								<br />
								<select name="cattle" id="cattle__farmer">
									<option value="Jharkhand">USA</option>
									<option value="Odisha">India</option>
									<option value="West Bengal">Nepal</option>
									<option value="karnataka">Australia</option>
								</select>
							</div>
						</div>

						<div className="row">
							<div className="label column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Postal Code
								</label>
								<br />
								<input className="input" type="text" placeholder="56007" />
							</div>

							<div className="label column">
								<label htmlFor="ProducerTotalForestArea">
									Farmer Abbreviation
								</label>
								<br />
								<input className="input" type="text" placeholder="karnataka" />
							</div>
							<div className="label column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Has Active
								</label>
								<br />
								<select name="cattle" id="cattle__farmer">
									<option value="Jharkhand">yes</option>
									<option value="Odisha">no</option>
								</select>
							</div>
						</div>

						<div className="btn">
							<button className="btn_submit" type="submit" onClick={handleForm}>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FarmerDetails;
