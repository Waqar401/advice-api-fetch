import { useState } from 'react';

import './App.css';

function App() {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    const apiUrl = "https://api.adviceslip.com/advice";
    try{
        const res = await fetch(apiUrl);
        console.log(res)
        const json = await res.json();
        // console.log(json.slip.advice);
        setAdvice(json.slip.advice);
    } catch(error) {
      console.log(error)
    }
  }

 

  setInterval(fetchData, 6000);



  return (
    <div className="App">

    <div className="twitter-quotes-main">
      <div className="twitter-quotes-sec">
          <h3 className="twitter-quote"> {advice} </h3>
      </div>
    </div>
    
    </div>
  );
}

export default App;
