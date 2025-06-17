import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserForm from './modules/user/UserForm';

function App() {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={handlerClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <h1 className="small font-bold">
          Hello world!
        </h1>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <UserForm />
    </>
  );
}

export default App;
