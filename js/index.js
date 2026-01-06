`use strict`;

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  const user = {
    name: "Emma",
    surname: "Watson",
    age: 35,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hG7GD7aa5R3syPCkANL9RmSfyA2-Wg5JQg&s",
  };

  return (
    <main className="userWrap">
      <article className="userCard">
        <h1>{user.name}</h1>
        <h2>{user.surname}</h2>
        <img className="userImg" src={user.imgSrc} alt={user.name} />
        <p>{user.age}</p>
      </article>
    </main>
  );
}
