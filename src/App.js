import React, { useState } from 'react';
import data from './data';
import "./App.css"
import SingleQuestion from './Question';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className="border boeder-info w-50 mx-auto mt-5 p-4 bg-light d-flex rounded">
      <h3 className=" mb-4 w-25">Question And Answers About Login </h3>  
      <div className="w-75">
        {
          questions.map((question)=>{
            return(
              <SingleQuestion key={question.id} {...question}/>
            )
          })
        }
      </div>   
    </main>
  )
}

export default App;
