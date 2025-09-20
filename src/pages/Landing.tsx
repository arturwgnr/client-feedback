import { useNavigate } from "react-router-dom";

export default function Landing() {

    const nav = useNavigate();

  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Client Feedback Hub</h1>
        <p className="landing-subtitle">
          Collect real opinions, understand your audience, and grow with them.
        </p>
        <button onClick={() => nav("/dashboard")} className="landing-button">Start Feedback Hub</button>
      </div>
    </div>
  );
}
