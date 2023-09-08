import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        id="name"
        name="name"
        required
        size="10"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => console.log(name)}>
        Enter
      </button>
    </div>
  );
};
