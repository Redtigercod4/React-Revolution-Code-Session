import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/feedbackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackPage />} />
      </Routes>
    </Router>
  )
}

export default App
