import { useState } from 'react';
import { useRecipesQuery } from './hooks/operations';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useRecipesQuery();
  console.log('error: ', error);
  console.log('loading: ', loading);
  console.log('data: ', data);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        {loading ? (
          <p>Loading your recipes data...</p>
        ) : (
          <div>
            {data?.recipes.map((r) => (
              <>
                <span>{r.title}</span> --
                <span>{r.description}</span>
                <br />
              </>
            ))}
          </div>
        )}
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
