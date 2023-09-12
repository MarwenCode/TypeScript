import React, { useEffect, useState } from 'react'

const Quiz = () => {
    const [Questions, setQuestions] = useState([]);


    useEffect(() => {
        const fetchQuestions =async () => {
            const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");
            const data = await response.json();
            setQuestions(data)
            
        }
    
    fetchQuestions()
     
    }, [])

    console.log(Questions)
    

 




  return (
    <div>Quiz</div>
  )
}

export default Quiz