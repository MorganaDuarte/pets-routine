import { Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return(
    <>
      <Navbar>
        <Navbar.Brand href="/">Página Inicial</Navbar.Brand>
      </Navbar>
      <Outlet />
    </>
  )
}