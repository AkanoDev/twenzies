import { useNavigate } from 'react-router-dom';

export default function Instructions() {

  const navigate = useNavigate();

  const handleInstructionClick = () => {
    navigate('/App');
  };
    
  return (
    <div className="tenzi-container">
      <h1>How to Play Twenzie</h1>
      <h2>Instructions:</h2>
      <ol>
        <li>
          <strong>Start Rolling:</strong> At the same time, all players roll their 20 dice.
        </li>
        <li>
          <strong>Choose a Target Number:</strong> After the first roll, decide which number (e.g., 3s, 5s) you’re going to collect.
          Set aside any dice showing your target number.
        </li>
        <li>
          <strong>Re-Roll Remaining Dice:</strong> Pick up the other dice and roll them again. Repeat this process, setting aside any dice that match your target number after each roll.
        </li>
        <li>
          <strong>Continue Until All Dice Match:</strong> Keep rolling until all 20 of your dice show the same number.
        </li>
      </ol>
      <h2>Winning:</h2>
      <p>
        The first player to get all 20 of their dice to match their target number yells, <strong>"Twenzies!"</strong> and wins the game.
      </p>
      <button 
      id="instruction-btn"
      onClick={handleInstructionClick}>Start</button>
    </div>
  )
}