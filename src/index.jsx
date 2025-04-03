import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import Start from "./component/Start";
import Instructions from "./component/Instructions";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'))
root.render(<Root/>)