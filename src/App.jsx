import './App.css'
import Navbar from './components/Navbar'
import Moviecard from "./components/moviecard"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Moviecard 
        movie={{
          title: "Dude",
          releaseDate: "2024-06-01"
        }} 
      />
    </div>
  )
}

export default App