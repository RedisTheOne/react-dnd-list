import './App.css';

import {
  BrowserView,
  MobileView
} from 'react-device-detect';

import { Container } from './components/Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

function App() {
  return (
    <>
      <BrowserView>
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </BrowserView>
      <MobileView>
        <DndProvider backend={TouchBackend}>
          <Container />
        </DndProvider>
      </MobileView>
    </>
  );
}

export default App;
