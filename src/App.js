import React, { useState } from "react";
import SingleQuestions from "./Questions";
import data from "./data";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section>
          {questions.map((question) => {
            return (
              <SingleQuestions
                key={question.id}
                {...question}
              ></SingleQuestions>
            );
          })}
        </section>
      </div>
    </main>
  );
}
