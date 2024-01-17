import animals from "./assets/data/animals"
import './App.css'
import Cards from './assets/components/animalList/AnimalList'

function App() {

  return (
    <>
      <Cards animals={animals}/>
    </>
  )
}

export default App
