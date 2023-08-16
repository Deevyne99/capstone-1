import Directory from './components/directory/DirectoryComponent'
import Home from './components/routes/home/Home'
import { Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/routes/navigations/Navigation'

const Shop = () => {
  return (
    <>
      <h1>Hello world</h1>
      <div></div>
    </>
  )
}
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
