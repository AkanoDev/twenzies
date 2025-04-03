import { useNavigate } from 'react-router-dom';

export default function Start() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/Instructions');
  };

  return (
    <section className="start-section">
      <h1>Welcome to Twenzies</h1>
      <button 
        id="start-btn"
        onClick={handleStartClick}
        >Start</button>
    </section>
  )
}