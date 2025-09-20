# Client Feedback Hub

A simple React + TypeScript application to collect and manage client feedback.  
Users can add feedback with sentiment (positive, neutral, negative), view statistics, and remove entries.  
The project demonstrates **Context + Reducer**, **Async/Await with API fetch**, **useMemo**, **useCallback**, and **nested routes**.

---

## 🚀 Features
- Add feedback with message and sentiment
- Remove feedback from the list
- Fetch initial feedbacks from a fake API (JSONPlaceholder)
- Global state management with Context + Reducer
- Statistics page with calculated metrics
- Styled with modern gradients and glassmorphism

---

## 🛠️ Tech Stack
- React + TypeScript
- React Router DOM
- Context API + Reducer
- Vite
- CSS (gradients + blur effects)

---

## 📂 Project Structure
src/
├── App.tsx
├── context/
│ └── FeedbackContext.tsx
├── pages/
│ ├── Landing.tsx
│ ├── Dashboard.tsx
│ ├── Overview.tsx
│ └── Feedbacks.tsx
└── index.css

yaml
Copy code

---

