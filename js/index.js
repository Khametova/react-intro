`use strict`;

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  return (
    <main className="userWrap">
      <Article />
    </main>
  );
}

function Article() {
  return (
    <article className="userCard">
      <img
        className="userImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s"
        alt="Emma"
      ></img>
      <h1>Emma Watson</h1>
    </article>
  );
}
