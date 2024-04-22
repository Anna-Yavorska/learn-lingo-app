import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import TeachersPage from "../pages/TeachersPage/TeachersPage"
import FavoritePage from "../pages/FavoritePage/FavoritePage"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="/teachers" element={<TeachersPage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
          <Route path="*" element={<HomePage />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
