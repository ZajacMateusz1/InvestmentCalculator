import { useState } from "react";
export default function UserInput() {
  const [testValue, setTestVale] = useState("");
  function handleInputChange(e) {
    setTestVale(e.target.value);
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
            value={testValue}
          />
        </li>
        <li className="input-group">
          <label htmlFor="annualInvestment">Annual investment</label>
          <input type="number" id="annualInvestment" value={testValue} />
        </li>
        <li className="input-group">
          <label htmlFor="expectedReturn">Expected return</label>
          <input type="number" id="expectedReturn" />
        </li>
        <li className="input-group">
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" />
        </li>
      </ul>
    </main>
  );
}
