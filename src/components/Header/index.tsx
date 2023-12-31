import { Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return(
    <>
      <Navbar>
        <Navbar.Brand href="/pets-routine">Página Inicial</Navbar.Brand>
      </Navbar>
      <Outlet />
    </>
  )
}