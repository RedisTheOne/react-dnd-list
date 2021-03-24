import './App.css';

import { Container } from './components/Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  );
}

export default App;
