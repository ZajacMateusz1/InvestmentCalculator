import { useState } from "react";
export default function UserInput() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  function handleInputChange(e) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }
  return (
    <main>
      <ul id="user-input">
        <li className="input-group">
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={handleInputChange}
            value={inputValues.initialInvestment}
          />
        </li>
        <li className="input-group">
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={handleInputChange}
            value={inputValues.annualInvestment}
          />
        </li>
        <li className="input-group">
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            type="number"
            id="expectedReturn"
            onChange={handleInputChange}
            value={inputValues.expectedReturn}
          />
        </li>
        <li className="input-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            onChange={handleInputChange}
            value={inputValues.duration}
          />
        </li>
      </ul>
    </main>
  );
}
