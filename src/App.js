import logo from './logo.svg';
import './App.css';
import DragAndDropArea from './components/dragAndDrop/DragAndDropArea';

const testBoxes = [{id: 1, data: 1}, {id: 2, data: 2} ,{id: 3, data: 3}, {id: 4, data: 4}, {id: 5, data: 5}, {id: 6, data: 6}]

function App() {
  return (
    <div className="App">
      <DragAndDropArea boxes={testBoxes}></DragAndDropArea>
    </div>
  );
}

export default App;
