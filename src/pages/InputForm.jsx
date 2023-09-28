import { useState } from "react";
import { useEmail } from "../context/EmailContext";
import "./form.css";
import { useNavigate } from "react-router-dom";
export default function InputForm() {
  const { field, setField } = useEmail();
  const [dropValue, setDropValue] = useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    const name = e.target.value;
    // Name validation (Only allow alphabets and spaces)
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      alert("Name can only contain letters and spaces.");
      return;
    }
    if (name !== "") {
      setField({
        ...field,
        name: e.target.value
      });
    } else {
      alert("Enter your name ...");
    }
  };

  const handleCompName = (e) => {
    const compName = e.target.value;
    // Company Name validation (Allow alphabets, spaces, dots, and dashes)
    if (!/^[a-zA-Z\s\.\-]*$/.test(compName)) {
      alert("Company name can only contain letters, spaces, dots, and dashes.");
      return;
    }
    setField({
      ...field,
      CompanyName: e.target.value
    });
  };

  const handleEffectiveDate = (e) => {
    console.log(e.target.value, "EFF DATE");
    const effDate = new Date(e.target.value);
    const lastDate = new Date(field.LastDate);
    if (effDate > lastDate) {
      alert("Effective Date cannot be after the Last Date.");
      return;
    }
    setField({ ...field, EffectiveDate: e.target.value });
  };

  const handleEndDate = (e) => {
    console.log(e.target.value, "END DATE");
    const effDate = new Date(field.EffectiveDate);
    const lastDate = new Date(e.target.value);
    if (lastDate < effDate) {
      alert("Last Date cannot be before the Effective Date.");
      return;
    }
    setField({ ...field, LastDate: e.target.value });
  };

  const handleDropDown = (e) => {
    console.log(e.target.value, "DROPDOWN");
    setDropValue(e.target.value);
  };

  const handleSubmit = () => {
    const { name, CompanyName, EffectiveDate, LastDate } = field;
    if (dropValue && field && dropValue.toLowerCase() === "resignation") {
      navigate("/resignation");
    } else if (
      dropValue &&
      name &&
      CompanyName &&
      dropValue.toLowerCase() === "apply"
    ) {
      navigate("/apply");
    } else {
      alert("Please Select Template First And Fill All The Values");
    }
  };

  console.log(field, dropValue, "ALL FIELD");
  return (
    <div>
      <form>
        <label>Select Type of Template:</label>
        <select onChange={handleDropDown}>
          <option defaultValue>Select Option...</option>
          <option>Resignation</option>
          <option>Apply</option>
        </select>

        <label id="name">
          Name:
          <input
            id="name"
            value={field.name}
            onChange={handleName}
            type="text"
            placeholder="Enter Name..."
          />
        </label>

        <label id="companyName">
          Company Name:
          <input
            value={field.CompanyName}
            onChange={handleCompName}
            id="companyName"
            type="text"
            placeholder="Enter Company Name..."
          />
        </label>

        <label id="DOES">
          Effective Date:
          <input
            id="DOES"
            value={field.EffectiveDate}
            onChange={handleEffectiveDate}
            type="date"
            placeholder="DD/MM/YY"
          />
        </label>

        <label id="DOEE">
          Last Date:
          <input
            id="DOEE"
            value={field.LastDate}
            onChange={handleEndDate}
            type="date"
            placeholder="DD/MM/YY"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
