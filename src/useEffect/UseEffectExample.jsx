import { useEffect } from "react";

export default function UseEffectExample() {
  //the callback function will only be executed once after
  //the first rendering
  useEffect(() => {
    //update the DOM
    document.title = "Use useEffect to change DOM";
    //url
    const url = "https://api.github.com/users/QuincyLarson";
    //fetch user QuincyLarson
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        //print it out
        console.log(user.login);
      });
  }, []);

  return (
    <>
      <h1>Use useEffect to change DOM</h1>
    </>
  );
}
