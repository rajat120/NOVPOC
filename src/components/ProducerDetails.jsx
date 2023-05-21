import React from "react";
import "../components/ProducerDetails.css";

const FarmDetails = () => {
	return (
		<div>
			<div className="theme"></div>
			<div className="form__container">
				<div className="align-margin">
					<form>
						<div className="row">
							<div className="column">
								<label htmlFor="FarmId" className="label__farm  required-field">
									Farm Id
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="123" />
							</div>

							<div className="column">
								<label
									htmlFor="FarmerID"
									className="label__farm required-field"
								>
									Farmer Id
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="John" />
							</div>

							<div className="column">
								<label htmlFor="Producer Name" className="label__farm">
									Producer Name
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
							<div className="label__farm column">
								<label htmlFor="ProducerstateOrTerritory">
									Producer State Or Territory
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="singh"
								/>
							</div>

							<div className="label__farm column">
								<label htmlFor="ProducerstateOrTerritory">
									Producer Country
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="USA">USA</option>
									<option value="China">China</option>
								</select>
							</div>

							<div className="label__farm column">
								<label
									htmlFor="hasProducerDateChange"
									className="required-field"
								>
									Producer Start Date
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="05/07/2001"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column">
								<label htmlFor="ProducerStartDate">
									Producer Undeserved Status
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerUnreservedStatus"
									className="required-field"
								>
									Producer Total Area
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="240" />
							</div>

							<div className="label__farm column">
								<label htmlFor="ProducerTotalArea" className="required-field">
									Producer Total Crop Area
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
							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalCropArea"
									className="required-field"
								>
									Producer Total Live Stock
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="4km" />
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalLiveStock"
									className="required-field "
								>
									Producer Total LiveStock
								</label>
								<br />
								<input className="input__farm" type="text" placeholder="4" />
							</div>

							<div className="label__farm column">
								<label htmlFor="ProducerTotalForestArea">
									Producer Total Forest Area
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="23545"
								/>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column">
								<label htmlFor="ProducerTotalForestArea">
									Producer Live Stock Type
								</label>
								<br />
								<input className="input__farm" type="text" />
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Has Producer Farm Organic
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Has Producer Organic Field
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column-3">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Producer Motivation
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="56007"
								/>
							</div>

							<div className="label__farm column">
								<label htmlFor="ProducerTotalForestArea">
									Producer CSAF Market Incentives
								</label>
								<br />
								<input
									className="input__farm"
									type="text"
									placeholder="karnataka"
								/>
							</div>
							<div className="label__farm column-3">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									has Producer Out Reach
								</label>
								<br />
								<select name="cattle" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
						</div>

						<div className="row">
							<div className="label__farm column">
								<label htmlFor="ProducerTotalForestArea">
									Producer CSAF Experience
								</label>
								<br />
								<input className="input__farm" type="text" />
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Producer CSAF Federal Funds
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>

							<div className="label__farm column">
								<label
									htmlFor="ProducerTotalForestArea"
									className="required-field"
								>
									Producer CSAF Non Profit Funds
								</label>
								<br />
								<select name="country" id="cattle__producer">
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
						</div>

						<div className="btn__farm">
							<button className="btn_submit__farm" type="submit">
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
