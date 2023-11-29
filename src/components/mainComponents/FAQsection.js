import React, { useState } from "react";
import questions from "./FAQ.json";

function Faq() {
 const [activeIndex, setActiveIndex] = useState(null);

 const toggleAnswer = (index) => {
   setActiveIndex(index === activeIndex ? null : index);
 };

 return (
   <div>
     {questions.map((question, index) => (
       <div key={index}>
         <button onClick={() => toggleAnswer(index)}>
           {question.question}
         </button>
         {activeIndex === index && <p>{question.answer}</p>}
       </div>
     ))}
   </div>
 );
}

export default Faq;
