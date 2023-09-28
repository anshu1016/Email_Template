import { useEmail } from "../context/EmailContext";
import { useNavigate } from "react-router-dom";
import "./resg.css";
export default function Resignation() {
  const { field } = useEmail();
  console.log(field, "FIELD");
  const { name, CompanyName, EffectiveDate, LastDate } = field;
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Resignation Template</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
      <p>
        Hi, Please accept this email as my formal resignation from{" "}
        <strong>{CompanyName}</strong>. I have taken this decision as I have got
        a different/better work opportunity and would like to pursue my career
        in the same. Request you to consider my letter of resignation effective
        from <strong>{EffectiveDate}</strong>. I understand that as per the
        policy I am required to serve a notice period of 60 days and my last
        working day accordingly shall be
        <strong>{LastDate}</strong>. I would request you to consider if an early
        release is possible. I am grateful to <strong>{CompanyName}</strong> and
        looking forward to your support. Thanks and Regards,{" "}
        <strong>{name}</strong>
      </p>
    </div>
  );
}
