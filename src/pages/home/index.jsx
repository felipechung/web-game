import { useState } from "react";
import "./index.css";

export const Home = () => {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  return (
    <div className="border">
      <input
        type="text"
        id="name"
        name="name"
        required
        size="10"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        id="roomCode"
        name="roomCode"
        required
        size="10"
        value={roomCode}
        onChange={(event) => setRoomCode(event.target.value)}
      />
      <button type="button" onClick={() => console.log(name)}>
        Entrar na sala
      </button>

      <button type="button" onClick={() => console.log(name)}>
        Criar sala
      </button>
    </div>
  );
};
