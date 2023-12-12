import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from "./components/Profile/Create";
import Profile from "./components/Profile";
import DefaultPage from "./components/DefaultPage";
import Header from "./components/Header";

export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<DefaultPage />} />
          <Route path='/create' element={<Create />} />
          <Route path='/profile/:id/*' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}