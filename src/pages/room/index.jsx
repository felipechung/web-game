import "./index.css";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const Room = () => {
  const { lastMessage, readyState, sendMessage } = useWebSocket(
    import.meta.env.WEB_SOCKET,
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
    </div>
  );
};
