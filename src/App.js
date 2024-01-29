import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  // const concept = 'Prop Drilling';

  return (
    <div className="App">
      <Header />
      <main>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
