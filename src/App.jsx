import { Title, Gallery} from "./components";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Title color="#191a19">Welcome! </Title>
      <Gallery />
      <TodoList />
    </div>
  );
}

export default App;
