import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return(
    <>
      <Link to={'/'}>Home!</Link>
      <Outlet />
    </>
  )
}