import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { DetailMeal } from './pages/DetailMeal'

const App = () => {

  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='detail/:id' element={<DetailMeal />} />
    </Routes>
  )
}

export default App
