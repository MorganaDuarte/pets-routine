import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import DefaultPage from "./components/DefaultPage";
import Header from "./components/Header";
import {Container} from "react-bootstrap";

export default function AppRouter() {
  return(
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<DefaultPage />} />
            <Route path='/profile/:id/*' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}