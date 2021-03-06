import { useEffect, useState } from "react";

export default function SetTimer() {
  //declare a time variable that has the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //the callback function will only be executed once after the first
  //rendering
  useEffect(() => {
    document.title = "Use useEffect to set a timer";
    //set a timer
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    //clearn up the timer when the compoment unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Use useEffect to set a timer</h1>
      <h2>Current time:{time}</h2>
    </>
  );
}
