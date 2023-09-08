import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const Home = () => {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h1>Jack na caixa</h1>
      <div className="inputContainer">
        <div className="formGroup">
          <label htmlFor="name">Usuário:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            size="10"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="roomCode">Código:</label>
          <input
            type="text"
            id="roomCode"
            name="roomCode"
            required
            size="10"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
          />
        </div>

        <div className="buttonContainer">
          <button type="button" onClick={() => navigate("/room")}>
            Entrar na sala
          </button>
        </div>

        <button type="button" onClick={() => navigate("/room")}>
          Criar sala
        </button>
      </div>
    </div>
  );
};
