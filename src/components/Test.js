import React, { useState, useEffect } from 'react';

const Test = () => {
  const [seconds, setSeconds] = useState("Javascript");

  useEffect(() => {
    const interval = setInterval(() => {
        if(seconds === 'Javascript'){

            setSeconds('React');
        } else{

            setSeconds('Javascript')
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="App">
      <header className="App-header">
        skills: {seconds}
      </header>
    </div>
  );
};

export default Test;