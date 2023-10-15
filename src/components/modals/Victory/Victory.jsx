import "./Victory.css";
export default function Victory(props) {
  return (
    <div className="victory">
      <h1>You Win!</h1>
      <p>You guessed {props.language} correctly!</p>
    </div>
  );
}