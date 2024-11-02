import React, { useState } from "react";
import Form from "./components/Form";
import Feedback from "./components/Feedback";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState([]);

  const handleCheckGrammar = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/check-grammar", {
        text,
      });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="App">
      <h1>Language Learning Companion</h1>
      <Form text={text} setText={setText} onSubmit={handleCheckGrammar} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;