import { useEmail } from "../context/EmailContext";
import { useNavigate } from "react-router-dom";
import "./resg.css";
export default function Apply() {
  const { field } = useEmail();
  const navigate = useNavigate();

  const { name, CompanyName, EffectiveDate, LastDate } = field;
  return (
    <div className="apply">
      <h1>Apply Template</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
      Dear HR, I am writing to express my interest in the{" "}
      <strong>{CompanyName}</strong> position , as With my experience in [a
      brief mention of your relevant experience, e.g., "digital marketing and
      content strategy"], I believe I would be a valuable addition to your team.
      Please find my attached resume for your review. I look forward to the
      possibility of contributing to <strong>{CompanyName}</strong> and further
      discussing how I can align with your company's goals. I can join from
      <strong>{EffectiveDate}</strong> and will terminate from my company{" "}
      <strong>{LastDate}</strong> Thank you for considering my application. Best
      regards,<strong>{name}</strong>
    </div>
  );
}
