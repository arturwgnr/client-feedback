import { useState, useCallback } from "react";
import { useFeedback } from "../context/FeedbackContext";

export default function Feedbacks() {
  const { state, dispatch } = useFeedback();

  // local state do formulário
  const [message, setMessage] = useState("");
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative">("positive");

  // handler para adicionar
  const handleAdd = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!message.trim()) return;

      const newFeedback = {
        id: Date.now().toString(),
        email: "user@test.com", // placeholder, depois dá pra melhorar
        message,
        sentiment,
      };

      dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
      setMessage(""); // limpa campo
      setSentiment("positive");
    },
    [message, sentiment, dispatch]
  );

  // handler para remover
  const handleRemove = useCallback(
    (id: string) => {
      dispatch({ type: "REMOVE_FEEDBACK", payload: id });
    },
    [dispatch]
  );

  return (
    

    <div className="feedbacks">
      
      {/* Formulário */}
      <form onSubmit={handleAdd} className="feedback-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback..."
          className="feedback-input"
        />

        <select
          value={sentiment}
          onChange={(e) => setSentiment(e.target.value as "positive" | "neutral" | "negative")}
          className="feedback-select"
        >
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>

        <button type="submit" className="feedback-button">Add Feedback</button>
      </form>

      {/* Lista */}
      <ul className="feedback-list">
        {state.feedbacks.map((f) => (
          <li key={f.id} className={`feedback-item ${f.sentiment}`}>
            <div className="feedback-content">
              <p className="feedback-email">{f.email}</p>
              <p className="feedback-message">{f.message}</p>
            </div>
            <div className="feedback-actions">
              <span className="feedback-sentiment">{f.sentiment}</span>
              <button
                onClick={() => handleRemove(f.id)}
                className="remove-button"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
