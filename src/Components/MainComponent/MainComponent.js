import React, { useState } from 'react';
export default function MainComponent(){
    const [phrase, setPhrase] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = e => {
    setInput(e.target.value);
    if (e.target.value === phrase) {
      setIsRunning(false);
      setInput("");
      setTime((new Date() - time) / 1000);
    }
  };
  const handleStart = () => {
    setIsRunning(true);
    setTime(new Date());
  };

  return (
    <div>
      <h2>Type the phrase as fast as you can:</h2>
      <p style={{userSelect:'none'}} onCopy={(e)=>e.preventDefault()}>
        {phrase.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color: (input.length)>=index?(input[index] === char ? "green" : "red"):"black",
            }}
          >
            {char}
          </span>
        ))}
        </p>
      <input
        value={input}
        onChange={handleChange}
        disabled={!isRunning}
        onPaste={(e)=>e.preventDefault()}
      />
      <button style={{color:'white',backgroundColor:'blueviolet'}} onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      {!isRunning && <p>Time: {Math.round(time/60)} minute(s) and {time%60} seconds</p>}
    </div>
  );
};