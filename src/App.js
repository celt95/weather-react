import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container container-with-padding">
        <Weather defaultCity="Madrid" />
      </div>
    </div>
  );
}
