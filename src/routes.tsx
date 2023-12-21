import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Create from "./components/Profile/Create";
import Profile from "./components/Profile";
import DefaultPage from "./components/DefaultPage";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

export default function AppRouter() {
  return(
    <Container>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<DefaultPage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/profile/:id/*' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}