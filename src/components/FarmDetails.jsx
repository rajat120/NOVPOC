import React from "react";
import "../components/FarmDetails.css";
import { useNavigate } from "react-router-dom";
import "../components/FarmDetails.css";

const FarmDetails = () => {
	const navigate = useNavigate();

	const handleForm = (e) => {
		e.preventDefault();
		navigate("/farmer");
	};
	return (
		<div>
			<div className="theme"></div>
			<div className="form__container">
				<div className="align-margin">
					<form>
						<div className="row">
							<div className="column__farm">
								<label htmlFor="FarmId" className="label__farm  required-field">
									Farm Id
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="123" />
							</div>

							<div className="column__farm">
								<label
									htmlFor="FarmerID"
									className="label__farm required-field"
								>
									Farmer Id
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="John" />
							</div>

							<div className="column__farm">
								<label htmlFor="Producer Name" className="label__farm">
									FarmStateOrTerritory
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="kumar"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column__farm">
								<label htmlFor="ProducerstateOrTerritory">Farm Country</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="singh"
								/>
							</div>

							<div className="label__farm column__farm">
								<label htmlFor="ProducerstateOrTerritory">
									Farm Geolocation
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="singh"
								/>
							</div>

							<div className="label__farm row">
								<div className="column-1__farm">
									<label htmlFor="Producer Country">Farm Strain Type</label>
									<br />
									<select name="country" id="cattle__farm">
										<option value="yes">Yes</option>
										<option value="No">No</option>
									</select>
								</div>
								<div className="label__farm column-1__farm ">
									<label
										htmlFor="hasProducerDateChange"
										className="required-field"
									>
										Farm In Acres
									</label>
									<br />
									<input
										className="input__farm"
										type="text"
										placeholder="8885666777"
									/>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column__farm">
								<label htmlFor="ProducerStartDate">
									Farm Registration Number
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="8833345567"
								/>
							</div>

							<div className="label__farm column__farm">
								<label
									htmlFor="ProducerUnreservedStatus"
									className="required-field"
								>
									hasFarm Organic
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="jugsalai"
								/>
							</div>

							<div className="label__farm column__farm">
								<label htmlFor="ProducerTotalArea" className="required-field">
									Farm Producer TA Received
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="hometown"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column__farm">
								<label
									htmlFor="ProducerTotalCropArea"
									className="required-field"
								>
									Farm Producer Incentive Amount
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="4km" />
							</div>

							<div className="label__farm column__farm">
								<label
									htmlFor="ProducerTotalLiveStock"
									className="required-field "
								>
									Farm Incentive Reason
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="4" />
							</div>

							<div className="label__farm column__farm">
								<label htmlFor="ProducerTotalForestArea">
									Farm Incentive Structure
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="#23545"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column__farm">
								<label htmlFor="ProducerTotalForestArea">
									Farm Incentive Type
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="ramgar"
								/>
							</div>

							<div className="label__farm column__farm">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Farm Payment On Enrollment
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="karnataka"
								/>
							</div>

							<div className="label__farm column__farm">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Farm Payment On Implementation
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="payment"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column-3__farm">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Farm Payment On Harvest
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="56007"
								/>
							</div>

							{/* <div className="label__farm column">
								<label htmlFor="ProducerTotalForestArea">
									Farmer Abbreviation
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="karnataka"
								/>
							</div> */}
							<div className="label__farm column-3__farm">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Farm Payment On MMRV
								</label>
								<br />
								<input className="input__farm" type="text" />
							</div>
						</div>

						<div className="btn__farm">
							<button
								className="btn_submit__farm"
								type="submit"
								onClick={handleForm}
							>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FarmDetails;
