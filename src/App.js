import Workouts from "./Components/Workouts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <nav>
        <h1><FontAwesomeIcon icon={faDumbbell} /> Fitness App <FontAwesomeIcon icon={faPersonWalking} /></h1>
      </nav>
      <Workouts/>
    </div>
  );
}

export default App;
