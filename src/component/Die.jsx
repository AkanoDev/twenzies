export default function Die(props) {
  return (
      <button 
      id="die-btn" 
      style={{
        backgroundColor: props.isHeld ? "#16C47F" : "#FFD65A",
        color: props.isHeld ? "#FFD65A" : "#16C47F"
      }}
      onClick={props.isHold}
      >{props.value}</button>
  )
}