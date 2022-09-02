import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-9xl text-center my-5">Burger Builder</h1>
      <hr />
      <div className="px-5">
        <button className="btn btn-primary">Create a Burger</button>
      </div>
    </>
  );
}

export default App;
