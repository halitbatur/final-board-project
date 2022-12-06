import "./App.css";
import app from './firebase/initFirebase'

console.log(app);

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-500">
        Tailwind is work
      </h1>
    </div>
  );
}

export default App;
