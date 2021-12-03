import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {ContextProvider } from './components/ContextProvider';
import ViewerHandler from './components/ViewerHandler';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <Header />
        <ViewerHandler />
      </div>
    </ContextProvider>
  );
}

export default App;

