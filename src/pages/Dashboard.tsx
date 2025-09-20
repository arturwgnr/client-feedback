import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import { useEffect } from "react";

export default function Dashboard() {



  const nav = useNavigate();
  const {state, dispatch} = useFeedback();

  function randomGenerate() {
    const sentiments = ["positive", "neutral", "negative"]
    const randomIndex = Math.floor(Math.random() * sentiments.length);

    return sentiments[randomIndex];
  }

  async function fetchFeedbacks() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
      const res = await data.json()

      const mapped = res.map((i) => {
        return {
          id: i.id.toString(),
          email: i.email,
          message: i.body,
          sentiment: randomGenerate()
        }
      })
      
      console.log(mapped)
      dispatch({type: "SET_FEEDBACKS", payload: mapped})
    }
    catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1 onClick={() => nav('/')} className="dashboard-logo">Client Feedback Hub</h1>
        <nav className="dashboard-nav">
          <Link to="/dashboard/overview" className="nav-link">
            Overview
          </Link>
          <Link to="/dashboard/feedbacks" className="nav-link">
            Feedbacks
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet />

     <ul className="feedback-list">
  {state.feedbacks.map((f) => (
    <li key={f.id} className={`feedback-item ${f.sentiment}`}>
      <div className="feedback-content">
        <p className="feedback-email">{f.email}</p>
        <p className="feedback-message">{f.message}</p>
      </div>
      <span className="feedback-sentiment">{f.sentiment}</span>
    </li>
  ))}
</ul>
      </main>
    </div>
  );
}
