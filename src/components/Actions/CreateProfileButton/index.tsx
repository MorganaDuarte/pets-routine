import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function CreateProfileButton() {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/profile/new', { state: { dog: undefined } })
  }
  return(
    <>
      <Button variant="outline-dark" onClick={navigateToCreate}>Criar pet</Button>
    </>
  )
}