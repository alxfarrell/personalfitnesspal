import React, { useState } from "react";

export default function Calculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [unit, setUnit] = useState("metric"); // mmm, automatically metric

  const calculateBMI = () => {
    let h = parseFloat(height);
    let w = parseFloat(weight);

    if (unit === "imperial") { // to convert imperial to metric
      h = h * 2.54; 
      w = w * 0.453592; 
    }

    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const result = w / (heightInMeters * heightInMeters);
      setBmi(result.toFixed(2));
    }
  };

  const calculateBMR = () => {
    let h = parseFloat(height);
    let w = parseFloat(weight);
    let a = parseFloat(age);

    if (unit === "imperial") { // to convert imperial to metric
      h = h * 2.54; 
      w = w * 0.453592; 
    }

    if (h > 0 && w > 0 && a > 0) {
      let result;
      if (gender === "male") {
        result = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        result = 10 * w + 6.25 * h - 5 * a - 161;
      }
      setBmr(result.toFixed(2));
    }
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}> 
      <h1>BMI & BMR Calculator!</h1>

      <div style={{display: "flex", flexDirection: "column", maxWidth: "358px"}}>
        <label>Units:</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="metric">Metric (cm / kg)</option>
          <option value="imperial">Imperial (inches / lbs)</option>
        </select>

        <label>Height ({unit === "metric" ? "cm" : "inches"}):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />

        <label>Weight ({unit === "metric" ? "kg" : "lbs"}):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />

        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button onClick={calculateBMI} style={{marginTop: "10px"}}>Calculate BMI</button>
        {bmi && <p>Your BMI is: {bmi}</p>}

        <button onClick={calculateBMR} style={{marginTop: "10px"}}>Calculate BMR</button>
        {bmr && <p>Your BMR is: {bmr} calories/day</p>}
      </div>
    </div>
  );
}