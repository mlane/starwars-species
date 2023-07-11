import './App.css'
import { SpeciesDetails } from './SpeciesDetails'
import { SpeciesList } from './SpeciesList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  // TODO: implement Routes for the following pages using BrowserRouter and Routes/Route from react-router-dom:
  // - SpeciesList as the index page at /
  // - SpeciesDetails at /species/:id
  // - NotFound at /404
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<SpeciesList />} />
          <Route path='/species/:id' element={<SpeciesDetails />} />
          <Route element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
