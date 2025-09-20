import { useReducer, createContext, useContext } from "react";

// Interfaces
interface Feedback {
  id: string;
  email: string;
  message: string;
  sentiment: "positive" | "neutral" | "negative";
}

interface FeedbackState {
  feedbacks: Feedback[];
}

type FeedbackAction =
  | { type: "ADD_FEEDBACK"; payload: Feedback }
  | { type: "REMOVE_FEEDBACK"; payload: string }
  | { type: "SET_FEEDBACKS"; payload: Feedback[] };

// Reducer
function feedbackReducer(state: FeedbackState, action: FeedbackAction): FeedbackState {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return { ...state, feedbacks: [...state.feedbacks, action.payload] };

    case "REMOVE_FEEDBACK":
      return { ...state, feedbacks: state.feedbacks.filter((f) => f.id !== action.payload) };

    case "SET_FEEDBACKS":
      return { ...state, feedbacks: action.payload };

    default:
      return state;
  }
}

const initialState: FeedbackState = {
  feedbacks: [],
};

// Context
const FeedbackContext = createContext<
  { state: FeedbackState; dispatch: React.Dispatch<FeedbackAction> } | undefined
>(undefined);

// Provider
export function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  return (
    <FeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
}

// Hook
export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}
