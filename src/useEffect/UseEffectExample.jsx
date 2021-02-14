import { useEffect } from "react";

export default function UseEffectExample() {
  //const url = "https://api.github.com/users/QuincyLarson";
  document.title = "Use useEffect to change DOM";

  useEffect(() => {
    const url = "https://api.github.com/users/QuincyLarson";
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        console.log(user.login);
      });
  });

  return (
    <>
      <h1>Use useEffect to change DOM</h1>
    </>
  );
}
