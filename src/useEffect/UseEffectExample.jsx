import { useEffect } from "react";

export default function UseEffectExample(name) {
  //the callback function will be executed  after
  //each rendering if the name value is diffferent between renderings
  useEffect(() => {
    //update the DOM
    document.title = "Use useEffect to change DOM";
    //url
    const url = "https://api.github.com/users/" + { name };
    //fetch user QuincyLarson
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        //print it out
        console.log(user.login);
      });
  }, [name]);

  return (
    <>
      <h1>Use useEffect to change DOM</h1>
    </>
  );
}
