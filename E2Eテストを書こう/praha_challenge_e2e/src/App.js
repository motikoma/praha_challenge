import logo from './logo.svg';
// import './App.css';
import { Game } from './game/Index';
import { useGame } from './hooks/useGame';

function App() {

  const {current, status, handleClick, moves} = useGame();

  return (
    <Game current={current} status={status} handleClick={handleClick} moves={moves} />
  );
}

export default App;
