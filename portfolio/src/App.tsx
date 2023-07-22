import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './Routes/AppRouter';
import { OpenWeb } from './Organisms/Components/Index';

const App = () => {
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem('played');
    if (played) {
      setPlayed(true);
    }
  }, []);

  const handleAnimationEnd = () => {
    sessionStorage.setItem('played', 'true');
    setPlayed(true);
  };

  const skipAnimation = () => {
    if (!played) {
      sessionStorage.setItem('played', 'true');
      setPlayed(true);
    }
  };

  return (
    <div onClick={skipAnimation}>
      {!played ? <OpenWeb onEnd={handleAnimationEnd} /> : <AppRouter />}
    </div>
  );
};

export default App;
