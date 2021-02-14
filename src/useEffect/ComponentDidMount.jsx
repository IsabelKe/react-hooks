import { useEffect, useState } from "react";

export default function ComponentDidMount() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("name");
  }, []);

  return (
    <>
      <h1>test</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
