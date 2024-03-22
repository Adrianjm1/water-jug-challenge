
import './App.css'
import { ToastAlert } from './components/UI/ToastAlert'
import WaterJugChallenge from './components/waterJugChallenge/WaterJugChallenge'

function App() {

  return (
    <div>
      <h1>Water Jug Challenge</h1>
      <WaterJugChallenge />
      <ToastAlert />
    </div>
  )
}

export default App
