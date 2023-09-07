import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";

function App() {
  const { lastMessage, readyState, sendMessage } = useWebSocket(
    "ws://40e6-168-0-112-246.ngrok-free.app/ws/game/",
    {
      onMessage: (e) => console.log(e),
    }
  );

  return (
    <div>
      <button
        disabled={readyState !== ReadyState.OPEN}
        onClick={() => sendMessage(JSON.stringify({ message: 10 }))}
      >
        Click Me to send
      </button>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {/* {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
