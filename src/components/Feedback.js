import React from "react";

function Feedback({ feedback }) {
  return (
    <div>
      {feedback.length > 0 ? (
        feedback.map((item, index) => (
          <p key={index}>
            <strong>Message:</strong> {item.message} <br />
            <strong>Suggestions:</strong> {item.suggestions.join(", ")}
          </p>
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
}

export default Feedback;