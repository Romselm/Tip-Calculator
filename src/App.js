import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculation />
    </div>
  );
}

function TipCalculation() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Bill bill={bill} setBill={setBill}>
        How much was the bill?
      </Bill>
      <Service percentage={percentage1} setPercentage={setPercentage1}>
        How did u like the service?
      </Service>
      <Service percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset}>Reset</Reset>
        </>
      )}
    </div>
  );
}

function Bill({ bill, children, setBill }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        value={bill}
        placeholder="Bill value"
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
function Service({ children, percentage, setPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
}
function Reset({ children, onReset }) {
  return <button onClick={onReset}>{children}</button>;
}
