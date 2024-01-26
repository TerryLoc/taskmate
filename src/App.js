import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  // const concept = 'Prop Drilling';

  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
