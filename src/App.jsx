import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Die from './component/Die'

export default function App() {

  const [dice, setDice] = useState(generateDice())  
  const [rollCount, setRollCount] = useState(0)
  const [isRolling, setIsRolling] = useState(false);
  const buttonRef = useRef(null)
  // let gameWon = false;

  // if(dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)) {
  //   console.log('Game end')
  //   gameWon = true
  // }
  
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);

  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus;
    }
  }, [gameWon])

  console.log(buttonRef);

  function generateDice() {
    const newDiceArray = []
    for(let i = 0; i < 20; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDiceArray.push(
        {
          value: randomNumber, 
          isHeld: false, 
          id: nanoid()
        }
      )
    }
    return newDiceArray
  }

  
  function rollDice() {
    setDice(prevDice => prevDice.map(dice => {
      return dice.isHeld ? dice : { ... dice, value: Math.ceil(Math.random() * 6) }
    }))
    setRollCount(prevCount => prevCount + 1)
    setIsRolling(true);
    setTimeout(() => setIsRolling(false), 1000); 
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(dice => {
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))
    console.log(id);
  }

  function playAgain() {
    setDice(generateDice())
    setRollCount(0)
  }

  const newDiceElement = dice.map((diceObj) => 
  <Die 
      key={diceObj.id} 
      isHold={() => holdDice(diceObj.id)}
      isHeld={diceObj.isHeld} 
      value={diceObj.value} 
    />)
      
  return (
    <main>
      {gameWon && <div className="overlay"></div>}
      <h1>Twenzies</h1>
      <p>The first player to lock all 20 dice to the same number and call "Twenzies!" wins the game.</p>
      <div className="die-container">
        {newDiceElement}
      </div>
      {gameWon &&   
        <div className="modal">
          <span>number of rolls: {rollCount}  </span>
          <button ref={buttonRef} id='exit-btn' onClick={playAgain}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
            fill="none"
            className="svg-icon"
          >
            <g strokeWidth="1.5" strokeLinecap="round" stroke="#F9E6CF">
              <path
                d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"
              ></path>
              <path
                d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"
              ></path>
            </g>
          </svg>
          <span className="lable">play again</span></button>
        </div>
      }
      <div
        ref={buttonRef}
        className={`dice ${isRolling ? "rolling" : ""}`}
        onClick={rollDice}
      >
        <div className="dice-face front">1</div>
        <div className="dice-face right">2</div>
        <div className="dice-face back">3</div>
        <div className="dice-face left">4</div>
        <div className="dice-face top">5</div>
        <div className="dice-face bottom">6</div>
      </div>
    </main>
  )
}