import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev)=>{
      return  prev+100
      
    });
  };

  const handleDecrease = () => {
    setCount(count - 100);
    console.log(count); // Same as above.
  };

  return (
    <div>
      <h1>Current count value is: {count}</h1>
      <button onClick={handleIncrease}>Increase by 100</button>
      <button onClick={handleDecrease}>Decrease by 100</button>
    </div>
  );
};

export default App;

